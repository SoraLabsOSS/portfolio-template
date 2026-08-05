import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { PageFade } from "@/components/page-fade";

export const metadata: Metadata = {
  description:
    "Truong Giang (Axyl) — full-stack developer building Sora UI and other side projects, based in Ho Chi Minh City.",
  title: "About",
};

const links = [
  {
    delay: "1220ms",
    href: "https://ui.soralabs.io.vn",
    label: "Sora UI",
  },
  {
    delay: "1265ms",
    href: "https://type.soralabs.io.vn",
    label: "Sora Type",
  },
  {
    delay: "1310ms",
    href: "https://lattice.soralabs.io.vn",
    label: "Sora Lattice",
  },
  {
    delay: "1355ms",
    href: "https://github.com/axyl1410",
    label: "GitHub",
  },
  {
    delay: "1400ms",
    href: "https://x.com/axyl1410",
    label: "X",
  },
] as const;

const skills = [
  {
    delay: "1480ms",
    href: "https://skills.soralabs.io.vn/animating-icons/",
    label: "Animating Icons",
  },
  {
    delay: "1525ms",
    href: "https://skills.soralabs.io.vn/motion-meaning/",
    label: "Motion Meaning",
  },
] as const;

const experience = [
  {
    delay: "1800ms",
    name: "TERAX SOLUTIONS",
    roles: [{ range: "Mar 2026 → May 2026", title: "Junior Developer" }],
  },
  {
    delay: "1845ms",
    name: "IMES Pro",
    roles: [{ range: "Sep 2025 → Dec 2025", title: "Intern Developer" }],
  },
  {
    delay: "1890ms",
    name: "Vietta Company",
    roles: [{ range: "Dec 2024 → Apr 2025", title: "Intern Developer" }],
  },
] as const;

const works = [
  {
    delay: "1980ms",
    name: "Sora UI",
    roles: [{ range: "Open source", title: "Creator" }],
  },
  {
    delay: "2025ms",
    name: "Sora Type",
    roles: [{ range: "Side project", title: "Creator" }],
  },
  {
    delay: "2070ms",
    name: "Sora Lattice",
    roles: [{ range: "Side project", title: "Creator" }],
  },
] as const;

function SkillArrow() {
  return (
    <svg
      aria-hidden="true"
      className="about-skill__arrow"
      fill="none"
      height="12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="12"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function RoleRow({ title, range }: { title: string; range: string }) {
  return (
    <div className="flex items-center gap-2">
      <p className="about-meta shrink-0 whitespace-nowrap text-right text-muted">
        {title}
      </p>
      <span aria-hidden="true" className="about-divider" />
      <p className="about-meta min-w-0 text-right text-muted sm:text-left">
        {range}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageFade>
      <main className="mx-auto max-w-[421px] px-6 pt-32 pb-32 sm:pt-[clamp(200px,33vh,320px)]">
        <header className="flex flex-col items-start">
          <Image
            alt="Truong Giang"
            className="about-reveal rounded-full"
            height={32}
            priority
            src="/avatar.jpg"
            style={{ "--reveal-delay": "160ms" } as CSSProperties}
            width={32}
          />
        </header>

        <div className="about-body mt-[45px] space-y-4 text-muted">
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "460ms" } as CSSProperties}
          >
            Hey, I&apos;m Truong Giang — Axyl.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "560ms" } as CSSProperties}
          >
            I&apos;m a full-stack developer based in Ho Chi Minh City, Vietnam.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "660ms" } as CSSProperties}
          >
            Creative developer bridging the gap between design and technology —
            interactive frontend, creative coding, UI animation, and web
            performance.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "760ms" } as CSSProperties}
          >
            Building a motion-first React registry — not a library. Copy, tweak,
            ship. That&apos;s{" "}
            <a
              href="https://ui.soralabs.io.vn"
              rel="noopener noreferrer"
              target="_blank"
            >
              Sora UI
            </a>
            .
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "860ms" } as CSSProperties}
          >
            Full-stack by trade, front-end at heart — source and experiments
            live here.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "960ms" } as CSSProperties}
          >
            WIPs, thoughts, and the small details that make an interface feel
            alive.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "1060ms" } as CSSProperties}
          >
            If you&apos;re building something cool, weird, or fun — always down
            to talk.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "1160ms" } as CSSProperties}
          >
            Feel free to reach out on{" "}
            <a
              href="https://x.com/axyl1410"
              rel="noopener noreferrer"
              target="_blank"
            >
              X
            </a>{" "}
            or via <a href="mailto:truonggiang.axyl@gmail.com">email</a>.
          </p>
        </div>

        <section className="mt-[45px]">
          <h2
            className="about-meta about-reveal text-muted"
            style={{ "--reveal-delay": "1160ms" } as CSSProperties}
          >
            Links
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {links.map((item) => (
              <a
                className="about-reveal about-skill flex items-center gap-2"
                href={item.href}
                key={item.href}
                rel="noopener noreferrer"
                style={{ "--reveal-delay": item.delay } as CSSProperties}
                target="_blank"
              >
                <p className="about-label">{item.label}</p>
                <span aria-hidden="true" className="about-divider" />
                <SkillArrow />
              </a>
            ))}
          </div>
        </section>

        <section className="mt-[45px]">
          <h2
            className="about-meta about-reveal text-muted"
            style={{ "--reveal-delay": "1400ms" } as CSSProperties}
          >
            Skills
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {skills.map((item) => (
              <a
                className="about-reveal about-skill flex items-center gap-2"
                href={item.href}
                key={item.href}
                rel="noopener noreferrer"
                style={{ "--reveal-delay": item.delay } as CSSProperties}
                target="_blank"
              >
                <p className="about-label">{item.label}</p>
                <span aria-hidden="true" className="about-divider" />
                <SkillArrow />
              </a>
            ))}
          </div>
        </section>

        <section className="mt-[45px]">
          <h2
            className="about-meta about-reveal text-muted"
            style={{ "--reveal-delay": "1520ms" } as CSSProperties}
          >
            Experience
          </h2>
          <div className="mt-4 flex flex-col gap-7">
            {experience.map((job) => (
              <div
                className="about-reveal flex flex-col gap-3"
                key={job.name}
                style={{ "--reveal-delay": job.delay } as CSSProperties}
              >
                <p className="about-label">{job.name}</p>
                <div className="flex flex-col gap-2">
                  {job.roles.map((role) => (
                    <RoleRow
                      key={`${job.name}-${role.title}-${role.range}`}
                      range={role.range}
                      title={role.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-[45px]">
          <h2
            className="about-meta about-reveal text-muted"
            style={{ "--reveal-delay": "1935ms" } as CSSProperties}
          >
            Works
          </h2>
          <div className="mt-4 flex flex-col gap-7">
            {works.map((job) => (
              <div
                className="about-reveal flex flex-col gap-3"
                key={job.name}
                style={{ "--reveal-delay": job.delay } as CSSProperties}
              >
                <p className="about-label">{job.name}</p>
                <div className="flex flex-col gap-2">
                  {job.roles.map((role) => (
                    <RoleRow
                      key={`${job.name}-${role.title}-${role.range}`}
                      range={role.range}
                      title={role.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageFade>
  );
}
