"use client";

import { animate } from "motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  AboutIconOutline,
  AboutIconSolid,
  BackIcon,
  ChevronIcon,
  ContactIcon,
  DarkIcon,
  EmailIcon,
  ExpandIcon,
  GitHubIcon,
  HomeIconOutline,
  HomeIconSolid,
  LightIcon,
  LinkedInIcon,
  PlaygroundIconOutline,
  SystemIcon,
  XIcon,
} from "./icons";

type MenuState = "active" | "expanded";
type PanelEntry = "main" | "connect";
type ThemeMode = "dark" | "light" | "system";

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];
/** Mid-compress duration (original `E`) */
const COMPRESS_MS = 0.1;
/** Item stagger base delay after compress start (original `E + N`) */
const ITEM_DELAY_BASE = 0.2;
/** Stagger step (original `W`) */
const ITEM_STAGGER = 0.02;
/** Item spring duration/bounce (original `m` / `F`) */
const ITEM_SPRING_DURATION = 0.4;
const ITEM_SPRING_BOUNCE = 0.3;
/** Shell spring duration (original `T`) */
const SHELL_SPRING_DURATION = 0.4;
/** Expand bounce (original `G`) / collapse bounce (original `L`) */
const EXPAND_BOUNCE = 0.24;
const COLLAPSE_BOUNCE = 0.15;
/** Collapse fade duration (original `J`) / y (original `w`) */
const FADE_OUT_DURATION = 0.12;
const FADE_OUT_Y = 48;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readTheme(): ThemeMode {
  const stored = localStorage.getItem("theme");
  return stored === "dark" || stored === "light" ? stored : "system";
}

function applyTheme(mode: ThemeMode) {
  if (mode === "system") {
    localStorage.removeItem("theme");
    document.documentElement.removeAttribute("data-theme");
  } else {
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }
}

function isActivePath(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

function readDims(menu: HTMLElement) {
  const styles = getComputedStyle(menu);
  const num = (prop: string) =>
    Number.parseFloat(styles.getPropertyValue(prop));
  return {
    BAR_HEIGHT: num("--menu-bar-height"),
    BAR_WIDTH: num("--menu-bar-width"),
    MID_HEIGHT: num("--menu-compress-height"),
    MID_WIDTH: num("--menu-compress-width"),
    PANEL_WIDTH: num("--menu-panel-width"),
  };
}

function measurePanelHeight(
  menu: HTMLElement,
  panelEl: HTMLElement,
  mainView: HTMLElement,
  connectView: HTMLElement,
  backLi: HTMLElement | null,
  currentEntry: PanelEntry,
  entry: PanelEntry
) {
  const prevEntry = menu.dataset.panelEntry;
  const prevMain = mainView.getAttribute("aria-hidden");
  const prevConnect = connectView.getAttribute("aria-hidden");
  const prevDisplay = backLi?.style.display ?? "";

  menu.dataset.panelEntry = entry;
  mainView.setAttribute("aria-hidden", entry === "connect" ? "true" : "false");
  connectView.setAttribute(
    "aria-hidden",
    entry === "connect" ? "false" : "true"
  );
  if (backLi && currentEntry !== "connect") {
    backLi.style.display = "list-item";
  }

  const height = panelEl.offsetHeight;

  if (backLi) {
    backLi.style.display = prevDisplay;
  }
  if (prevEntry) {
    menu.dataset.panelEntry = prevEntry;
  }
  if (prevMain !== null) {
    mainView.setAttribute("aria-hidden", prevMain);
  }
  if (prevConnect !== null) {
    connectView.setAttribute("aria-hidden", prevConnect);
  }

  return height;
}

function collectMainItems(
  themeSwitcher: HTMLElement | null,
  mainView: HTMLElement | null
) {
  const items = mainView?.querySelectorAll(".menu-list-item");
  return [
    ...(themeSwitcher ? [themeSwitcher] : []),
    ...(items ? [...items] : []),
  ];
}

async function expandShell(
  shell: HTMLElement,
  bar: HTMLElement,
  items: Element[],
  dims: ReturnType<typeof readDims>,
  height: number
) {
  if (prefersReducedMotion()) {
    shell.style.width = `${dims.PANEL_WIDTH}px`;
    shell.style.height = `${height}px`;
    animate(bar, { opacity: 0 }, { duration: 0.15 });
    for (const item of items) {
      animate(
        item,
        { filter: "blur(0px)", opacity: 1, y: 0 },
        { duration: 0.15 }
      );
    }
    return;
  }

  shell.style.willChange = "width, height";

  // Bar fades out in parallel with the mid-compress (original: duration E+0.05)
  animate(
    bar,
    { filter: ["blur(0px)", "blur(8px)"], opacity: [1, 0], scale: [1, 0.8] },
    { duration: COMPRESS_MS + 0.05, ease: EASE }
  );

  // Stage 1: compress to mid size — do not block item entrance on the final spring
  const compress = animate(
    shell,
    { height: dims.MID_HEIGHT, width: dims.MID_WIDTH },
    { duration: COMPRESS_MS, ease: EASE }
  );

  // Items spring in with delay from compress start (original: delay E+N + i*W, spring)
  for (const [index, item] of items.entries()) {
    animate(
      item,
      { filter: "blur(0px)", opacity: 1, y: 0 },
      {
        bounce: ITEM_SPRING_BOUNCE,
        delay: ITEM_DELAY_BASE + index * ITEM_STAGGER,
        duration: ITEM_SPRING_DURATION,
        type: "spring",
      }
    );
  }

  await compress.finished;
  await animate(
    shell,
    { height, width: dims.PANEL_WIDTH },
    { bounce: EXPAND_BOUNCE, duration: SHELL_SPRING_DURATION, type: "spring" }
  ).finished;
  shell.style.willChange = "";
}

async function collapseShell(
  shell: HTMLElement,
  bar: HTMLElement,
  themeSwitcher: Element | null,
  mainItems: NodeListOf<Element> | undefined,
  connectItems: NodeListOf<Element> | undefined,
  dims: ReturnType<typeof readDims>
) {
  if (prefersReducedMotion()) {
    shell.style.width = `${dims.BAR_WIDTH}px`;
    shell.style.height = `${dims.BAR_HEIGHT}px`;
    animate(
      bar,
      { filter: "blur(0px)", opacity: 1, scale: 1 },
      { duration: 0.15 }
    );
    const reducedTargets = [
      ...(themeSwitcher ? [themeSwitcher] : []),
      ...(mainItems ? [...mainItems] : []),
    ];
    for (const item of reducedTargets) {
      animate(
        item,
        { filter: "blur(4px)", opacity: 0, y: FADE_OUT_Y },
        { duration: 0.15 }
      );
    }
    return;
  }

  shell.style.willChange = "width, height";

  // Fade panel contents immediately (original: duration J, y=48 / connect y=16)
  const fadeOut = (el: Element, y: number, filter: string) => {
    animate(
      el,
      { filter, opacity: 0, y },
      { duration: FADE_OUT_DURATION, ease: EASE }
    );
  };
  if (themeSwitcher) {
    fadeOut(themeSwitcher, FADE_OUT_Y, "blur(4px)");
  }
  if (mainItems) {
    for (const item of mainItems) {
      fadeOut(item, FADE_OUT_Y, "blur(4px)");
    }
  }
  if (connectItems) {
    for (const item of connectItems) {
      fadeOut(item, 16, "blur(2px)");
    }
  }

  // Shell compress → bar size (chained), bar fades in in parallel with second spring (delay E)
  animate(
    bar,
    { filter: ["blur(8px)", "blur(0px)"], opacity: [0, 1], scale: [0.8, 1] },
    {
      bounce: COLLAPSE_BOUNCE,
      delay: COMPRESS_MS,
      duration: SHELL_SPRING_DURATION,
      type: "spring",
    }
  );

  await animate(
    shell,
    { height: dims.MID_HEIGHT, width: dims.MID_WIDTH },
    { duration: COMPRESS_MS, ease: EASE }
  ).finished;
  await animate(
    shell,
    { height: dims.BAR_HEIGHT, width: dims.BAR_WIDTH },
    { bounce: COLLAPSE_BOUNCE, duration: SHELL_SPRING_DURATION, type: "spring" }
  ).finished;
  shell.style.willChange = "";
}

function animatePanelSwitch(
  next: PanelEntry,
  mainItems: NodeListOf<Element> | undefined,
  connectItems: NodeListOf<Element> | undefined,
  instant: boolean
) {
  const toConnect = next === "connect";
  // Original: fade-out duration ne=0.15, fade-in duration te=0.25 + stagger ee=0.025
  const fadeOut = instant ? { duration: 0 } : { duration: 0.15 };
  const fadeIn = (index: number) =>
    instant ? { duration: 0 } : { delay: index * 0.025, duration: 0.25 };

  if (mainItems) {
    for (const [index, item] of mainItems.entries()) {
      animate(
        item,
        {
          filter: toConnect ? "blur(2px)" : "blur(0px)",
          opacity: toConnect ? 0 : 1,
          y: toConnect ? 8 : 0,
        },
        toConnect ? fadeOut : fadeIn(index)
      );
    }
  }
  if (connectItems) {
    for (const [index, item] of connectItems.entries()) {
      animate(
        item,
        {
          filter: toConnect ? "blur(0px)" : "blur(2px)",
          opacity: toConnect ? 1 : 0,
          y: toConnect ? 0 : 16,
        },
        toConnect ? fadeIn(index) : fadeOut
      );
    }
  }
}

export function SiteMenu() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const panelLayerRef = useRef<HTMLDivElement>(null);
  const themeSwitcherRef = useRef<HTMLFieldSetElement>(null);
  const mainViewRef = useRef<HTMLUListElement>(null);
  const connectViewRef = useRef<HTMLUListElement>(null);
  const expandBtnRef = useRef<HTMLButtonElement>(null);
  const backLiRef = useRef<HTMLLIElement>(null);

  const stateRef = useRef<MenuState>("active");
  /** How the menu was opened — maps to `data-panel-entry` (original `P`) */
  const entryRef = useRef<PanelEntry>("main");
  /** Which list is on screen (original `Y`) */
  const viewRef = useRef<PanelEntry>("main");

  const [state, setState] = useState<MenuState>("active");
  const [panelEntry, setPanelEntry] = useState<PanelEntry>("main");
  const [view, setView] = useState<PanelEntry>("main");
  const [theme, setTheme] = useState<ThemeMode>("system");

  const syncViewDom = useCallback((nextView: PanelEntry) => {
    mainViewRef.current?.setAttribute(
      "aria-hidden",
      String(nextView === "connect")
    );
    connectViewRef.current?.setAttribute(
      "aria-hidden",
      String(nextView !== "connect")
    );
  }, []);

  const getHeight = useCallback((measureAs: PanelEntry = viewRef.current) => {
    const menu = menuRef.current;
    const panelEl = panelLayerRef.current;
    const mainView = mainViewRef.current;
    const connectView = connectViewRef.current;
    if (!(menu && panelEl && mainView && connectView)) {
      return 480;
    }
    return measurePanelHeight(
      menu,
      panelEl,
      mainView,
      connectView,
      backLiRef.current,
      entryRef.current,
      measureAs
    );
  }, []);

  const setMenuState = useCallback(
    async (next: MenuState) => {
      if (stateRef.current === next) {
        return;
      }
      stateRef.current = next;
      setState(next);

      const menu = menuRef.current;
      const shell = shellRef.current;
      const bar = barRef.current;
      const panelEl = panelLayerRef.current;
      if (!(menu && shell && bar && panelEl)) {
        return;
      }

      panelEl.setAttribute("aria-hidden", String(next !== "expanded"));
      const dims = readDims(menu);
      const themeEl = themeSwitcherRef.current;
      const mainItems =
        mainViewRef.current?.querySelectorAll(".menu-list-item");
      const connectItems =
        connectViewRef.current?.querySelectorAll(".menu-list-item");

      if (next === "expanded") {
        const entry = entryRef.current;
        // Keep data-panel-entry in sync before measuring (React state may lag)
        menu.dataset.panelEntry = entry;
        syncViewDom(viewRef.current);

        const expandItems =
          viewRef.current === "main"
            ? collectMainItems(themeEl, mainViewRef.current)
            : [
                ...(themeEl ? [themeEl] : []),
                ...[...(connectItems ?? [])].slice(entry === "connect" ? 1 : 0),
              ];
        await expandShell(
          shell,
          bar,
          expandItems,
          dims,
          getHeight(viewRef.current)
        );
        return;
      }

      await collapseShell(shell, bar, themeEl, mainItems, connectItems, dims);
      entryRef.current = "main";
      viewRef.current = "main";
      setPanelEntry("main");
      setView("main");
      menu.dataset.panelEntry = "main";
      syncViewDom("main");
    },
    [getHeight, syncViewDom]
  );

  const switchPanel = useCallback(
    (nextView: PanelEntry, instant = false) => {
      if (viewRef.current === nextView && !instant) {
        return;
      }
      viewRef.current = nextView;
      setView(nextView);
      syncViewDom(nextView);

      const shell = shellRef.current;
      if (!instant && stateRef.current === "expanded" && shell) {
        animate(
          shell,
          { height: getHeight(nextView) },
          { bounce: 0.1, duration: 0.25, type: "spring" }
        );
      }

      animatePanelSwitch(
        nextView,
        mainViewRef.current?.querySelectorAll(".menu-list-item"),
        connectViewRef.current?.querySelectorAll(".menu-list-item"),
        instant
      );
    },
    [getHeight, syncViewDom]
  );

  const openExpanded = useCallback(
    (entry: PanelEntry) => {
      entryRef.current = entry;
      viewRef.current = entry;
      setPanelEntry(entry);
      setView(entry);

      const menu = menuRef.current;
      if (menu) {
        menu.dataset.panelEntry = entry;
      }
      if (backLiRef.current) {
        backLiRef.current.style.display = "";
      }
      syncViewDom(entry);
      setMenuState("expanded");
    },
    [setMenuState, syncViewDom]
  );

  const collapse = useCallback(() => {
    setMenuState("active");
  }, [setMenuState]);

  const openMain = useCallback(() => openExpanded("main"), [openExpanded]);
  const openConnect = useCallback(
    () => openExpanded("connect"),
    [openExpanded]
  );
  const showConnectPanel = useCallback(
    () => switchPanel("connect"),
    [switchPanel]
  );
  const showMainPanel = useCallback(() => switchPanel("main"), [switchPanel]);
  const setDark = useCallback(() => {
    applyTheme("dark");
    setTheme("dark");
  }, []);
  const setLight = useCallback(() => {
    applyTheme("light");
    setTheme("light");
  }, []);
  const setSystem = useCallback(() => {
    applyTheme("system");
    setTheme("system");
  }, []);

  useLayoutEffect(() => {
    setTheme(readTheme());
    requestAnimationFrame(() => {
      getHeight("main");
    });
  }, [getHeight]);

  useEffect(() => {
    if (pathname === "/") {
      document.documentElement.dataset.homeVisited = "true";
    } else {
      document.documentElement.dataset.homeMenuSettled = "true";
    }
  }, [pathname]);

  useEffect(() => {
    if (stateRef.current === "expanded") {
      setMenuState("active");
    }
    // pathname intentionally triggers collapse on navigation
  }, [pathname, setMenuState]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }
      if (
        stateRef.current === "expanded" &&
        viewRef.current === "connect" &&
        entryRef.current === "main"
      ) {
        switchPanel("main");
        return;
      }
      if (stateRef.current === "expanded") {
        setMenuState("active");
        expandBtnRef.current?.focus();
      }
    };

    const onDocClick = (event: MouseEvent) => {
      if (stateRef.current !== "expanded") {
        return;
      }
      if (menuRef.current?.contains(event.target as Node)) {
        return;
      }
      setMenuState("active");
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onDocClick);
    };
  }, [setMenuState, switchPanel]);

  return (
    <div
      data-panel-entry={panelEntry}
      data-state={state}
      id="menu"
      ref={menuRef}
    >
      <button
        aria-label="Dismiss menu"
        id="menu-scrim"
        onClick={collapse}
        onTouchMove={collapse}
        type="button"
      />
      <div id="menu-bar-pos">
        <div id="menu-shell" ref={shellRef}>
          <nav aria-label="Site navigation" id="menu-bar-layer" ref={barRef}>
            <NavIconLink
              active={isActivePath(pathname, "/")}
              href="/"
              label="Home"
            >
              <HomeIconOutline />
              <HomeIconSolid />
            </NavIconLink>
            <NavIconLink
              active={isActivePath(pathname, "/about")}
              href="/about"
              label="About"
            >
              <AboutIconOutline />
              <AboutIconSolid />
            </NavIconLink>
            <button
              aria-disabled="true"
              aria-label="Playground (coming soon)"
              className="is-disabled"
              disabled
              type="button"
            >
              <PlaygroundIconOutline />
            </button>
            <button aria-label="Contact" onClick={openConnect} type="button">
              <ContactIcon />
            </button>
            <button
              aria-label="Expand menu"
              onClick={openMain}
              ref={expandBtnRef}
              type="button"
            >
              <ExpandIcon />
            </button>
          </nav>

          <div
            aria-hidden={state !== "expanded"}
            id="menu-panel-layer"
            ref={panelLayerRef}
          >
            <fieldset className="theme-switcher" ref={themeSwitcherRef}>
              <legend className="sr-only">Theme</legend>
              <button
                aria-label="Dark theme"
                aria-pressed={theme === "dark"}
                onClick={setDark}
                type="button"
              >
                <DarkIcon />
                <span>Dark</span>
              </button>
              <button
                aria-label="Light theme"
                aria-pressed={theme === "light"}
                onClick={setLight}
                type="button"
              >
                <LightIcon />
                <span>Light</span>
              </button>
              <button
                aria-label="Auto theme"
                aria-pressed={theme === "system"}
                onClick={setSystem}
                type="button"
              >
                <SystemIcon />
                <span>Auto</span>
              </button>
            </fieldset>

            <div className="menu-views">
              <ul
                aria-hidden={view === "connect"}
                className="menu-list menu-view"
                id="menu-view-main"
                ref={mainViewRef}
              >
                <li>
                  <MenuLink active={isActivePath(pathname, "/")} href="/">
                    <HomeIconOutline />
                    <HomeIconSolid />
                    <span>Home</span>
                  </MenuLink>
                </li>
                <li>
                  <MenuLink
                    active={isActivePath(pathname, "/about")}
                    href="/about"
                  >
                    <AboutIconOutline />
                    <AboutIconSolid />
                    <span>About</span>
                  </MenuLink>
                </li>
                <li>
                  <button
                    aria-disabled="true"
                    className="menu-list-item is-disabled"
                    disabled
                    type="button"
                  >
                    <PlaygroundIconOutline />
                    <span>Playground</span>
                  </button>
                </li>
                <li>
                  <button
                    className="menu-list-item"
                    onClick={showConnectPanel}
                    type="button"
                  >
                    <ContactIcon />
                    <span>Connect</span>
                    <ChevronIcon />
                  </button>
                </li>
              </ul>

              <ul
                aria-hidden={view !== "connect"}
                className="menu-list menu-view"
                id="menu-view-connect"
                ref={connectViewRef}
              >
                <li id="menu-back-li" ref={backLiRef}>
                  <button
                    className="menu-list-item"
                    onClick={showMainPanel}
                    type="button"
                  >
                    <BackIcon />
                    <span>Back</span>
                  </button>
                </li>
                <li>
                  <a
                    className="menu-list-item"
                    href="https://x.com/axyl1410"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <XIcon />
                    <span>Twitter / X</span>
                  </a>
                </li>
                <li>
                  <a
                    className="menu-list-item"
                    href="https://github.com/axyl1410"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GitHubIcon />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    className="menu-list-item"
                    href="https://www.linkedin.com/in/axyl1410/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    className="menu-list-item"
                    href="mailto:truonggiang.axyl@gmail.com"
                  >
                    <EmailIcon />
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavIconLink({
  href,
  label,
  active,
  children,
}: {
  href: string;
  label: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      aria-label={label}
      className={active ? "is-active" : undefined}
      href={href}
    >
      {children}
    </Link>
  );
}

function MenuLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={active ? "menu-list-item is-active" : "menu-list-item"}
      href={href}
    >
      {children}
    </Link>
  );
}
