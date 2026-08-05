"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { findByProductId } from "@/content/countries";
import { site } from "@/content/site";

const STORAGE_KEY = "treatsfrom.cart.v1";

export type CartLine = { id: string; qty: number };

type CartContext = {
  lines: CartLine[];
  ready: boolean;
  count: number;
  subtotalCents: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const Ctx = createContext<CartContext | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: CartLine[] = JSON.parse(raw);
        // Drop anything that no longer exists in the content layer.
        setLines(parsed.filter((l) => findByProductId(l.id)));
      }
    } catch {
      // Corrupt or unavailable storage — start empty rather than crash.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Private mode or quota — the cart still works for this session.
    }
  }, [lines, ready]);

  const add = useCallback((id: string, qty = 1) => {
    setLines((prev) => {
      const found = prev.find((l) => l.id === id);
      if (found) {
        return prev.map((l) =>
          l.id === id ? { ...l, qty: Math.min(l.qty + qty, 20) } : l
        );
      }
      return [...prev, { id, qty }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, qty: Math.min(qty, 20) } : l))
    );
  }, []);

  const remove = useCallback(
    (id: string) => setLines((prev) => prev.filter((l) => l.id !== id)),
    []
  );

  const clear = useCallback(() => setLines([]), []);

  const { count, subtotalCents } = useMemo(() => {
    let count = 0;
    let subtotalCents = 0;
    for (const line of lines) {
      const hit = findByProductId(line.id);
      if (!hit) continue;
      count += line.qty;
      subtotalCents += hit.product.priceCents * line.qty;
    }
    return { count, subtotalCents };
  }, [lines]);

  const value: CartContext = {
    lines,
    ready,
    count,
    subtotalCents,
    add,
    setQty,
    remove,
    clear,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

/** Cents remaining before US free shipping kicks in. */
export function remainingForFreeShipping(subtotalCents: number) {
  return Math.max(0, site.freeShipping.US - subtotalCents);
}
