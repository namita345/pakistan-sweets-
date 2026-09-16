/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { PRODUCTS, type Product } from './products';

export interface CartLine {
  product: Product;
  qty: number;
  unitPrice: number;
  variationLabel?: string;
  variationKey: string;
}

interface StoredLine {
  id: number;
  qty: number;
  unitPrice?: number;
  variationLabel?: string;
  variationKey?: string;
}

interface CartContextValue {
  lines: CartLine[];
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (p: Product, qty?: number, variationLabel?: string, unitPrice?: number, variationKey?: string) => void;
  setQty: (variationKey: string, qty: number) => void;
  remove: (variationKey: string) => void;
  clear: () => void;
  qtyOf: (id: number) => number;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'ps-cart-v2';

function load(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data: StoredLine[] = JSON.parse(raw);
    return data.map((d) => {
      const product = PRODUCTS.find((p) => p.id === d.id);
      if (!product) return null;
      const unitPrice = d.unitPrice ?? product.price;
      return {
        product,
        qty: Math.max(1, d.qty),
        unitPrice,
        variationLabel: d.variationLabel,
        variationKey: d.variationKey ?? `${product.id}:base`,
      };
    }).filter((l): l is CartLine => Boolean(l));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(load);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines.map((l) => ({
      id: l.product.id,
      qty: l.qty,
      unitPrice: l.unitPrice,
      variationLabel: l.variationLabel,
      variationKey: l.variationKey,
    }))));
  }, [lines]);

  const add = useCallback((p: Product, qty = 1, variationLabel?: string, unitPrice = p.price, variationKey = `${p.id}:base`) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.variationKey === variationKey);
      if (existing) return prev.map((l) => l.variationKey === variationKey ? { ...l, qty: l.qty + qty } : l);
      return [...prev, { product: p, qty, unitPrice, variationLabel, variationKey }];
    });
  }, []);

  const setQty = useCallback((variationKey: string, qty: number) => {
    setLines((prev) => qty <= 0 ? prev.filter((l) => l.variationKey !== variationKey) : prev.map((l) => l.variationKey === variationKey ? { ...l, qty } : l));
  }, []);

  const remove = useCallback((variationKey: string) => setLines((prev) => prev.filter((l) => l.variationKey !== variationKey)), []);
  const clear = useCallback(() => setLines([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => ({
    lines,
    count: lines.reduce((s, l) => s + l.qty, 0),
    total: lines.reduce((s, l) => s + l.qty * l.unitPrice, 0),
    isOpen,
    openCart,
    closeCart,
    add,
    setQty,
    remove,
    clear,
    qtyOf: (id) => lines.filter((l) => l.product.id === id).reduce((s, l) => s + l.qty, 0),
  }), [lines, isOpen, openCart, closeCart, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
