"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bunny } from "@/components/bunny";

const HO_CHI_MINH_TIME_ZONE = "Asia/Ho_Chi_Minh";
const TIME_LABEL_FORMATTER = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  hour12: true,
  minute: "2-digit",
  timeZone: HO_CHI_MINH_TIME_ZONE,
});
const HOUR_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  hourCycle: "h23",
  timeZone: HO_CHI_MINH_TIME_ZONE,
});

function getHoChiMinhTime() {
  const now = new Date();
  const label = TIME_LABEL_FORMATTER.format(now).toLowerCase();
  const hour = Number(HOUR_FORMATTER.format(now));

  return {
    label,
    sleeping: hour < 6 || hour >= 18,
  };
}

export function SiteFooter() {
  const pathname = usePathname();
  const [localTime, setLocalTime] = useState({
    label: "—:—",
    sleeping: false,
  });

  useEffect(() => {
    const updateTime = () => setLocalTime(getHoChiMinhTime());
    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="site-footer">
      <p className="site-footer__row">
        <span>
          <time>{localTime.label}</time> in Ho Chi Minh City
        </span>
        <span aria-hidden="true" className="site-footer__bunny">
          <Bunny sleeping={localTime.sleeping} />
        </span>
      </p>
    </footer>
  );
}
