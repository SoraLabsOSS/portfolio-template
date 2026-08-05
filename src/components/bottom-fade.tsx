"use client";

import { usePathname } from "next/navigation";
import { type CSSProperties, useEffect, useState } from "react";

const FADE_ROUTES = new Set(["/about"]);

/**
 * Soft fade behind the floating menu. Lives in the root layout and toggles with
 * a CSS opacity transition so `backdrop-filter` stays live.
 *
 * Document View Transitions hide participating nodes and paint snapshots —
 * `backdrop-filter` does not survive that, which made the blur near the menu
 * pop off on every navigation.
 */
export function BottomFade() {
  const pathname = usePathname();
  const shouldShow = FADE_ROUTES.has(pathname);
  const [visible, setVisible] = useState(shouldShow);

  useEffect(() => {
    setVisible(shouldShow);
  }, [shouldShow]);

  return (
    <div
      aria-hidden="true"
      className="bottom-fade"
      data-visible={visible ? "true" : "false"}
      style={{ "--fade-h": "144px" } as CSSProperties}
    >
      <span className="bottom-fade__blur bottom-fade__blur--1" />
      <span className="bottom-fade__blur bottom-fade__blur--2" />
      <span className="bottom-fade__blur bottom-fade__blur--3" />
    </div>
  );
}
