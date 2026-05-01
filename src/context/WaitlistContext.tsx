"use client";
import { createContext, useContext, useState, useCallback } from "react";
import WaitlistModal from "@/components/WaitlistModal";

interface WaitlistCtx { open: () => void; }
const WaitlistContext = createContext<WaitlistCtx>({ open: () => {} });
export const useWaitlist = () => useContext(WaitlistContext);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <WaitlistContext.Provider value={{ open }}>
      {children}
      {isOpen && <WaitlistModal onClose={close} />}
    </WaitlistContext.Provider>
  );
}
