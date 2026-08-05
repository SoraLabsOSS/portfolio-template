"use client";

import { usePathname } from "next/navigation";

/**
 * CSS page enter fade — avoids document View Transitions so layout chrome
 * (menu, bottom-fade backdrop-filter) stays live across navigations.
 */
export function PageFade({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="page-fade-root" key={pathname}>
      {children}
    </div>
  );
}
