import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#overlays");
    setMounted(true);
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
