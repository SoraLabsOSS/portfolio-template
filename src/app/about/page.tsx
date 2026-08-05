import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { PageFade } from "@/components/page-fade";

export const metadata: Metadata = {
  description:
    "Product designer based in Halifax. Investing at Wealthsimple. Previously Stripe and Shopify.",
  title: "About — Danny Williams",
};

const skills = [
  {
    delay: "1520ms",
    href: "https://www.skills.sh/dannyjpwilliams/ui-sound-design-skill/ui-sound-design",
    label: "UI Sound Design",
  },
  {
    delay: "1565ms",
    href: "https://github.com/dannyjpwilliams/design-engineer-skill",
    label: "Design Engineering",
  },
  {
    delay: "1610ms",
    href: "https://github.com/dannyjpwilliams/pressure-test-plan",
    label: "Pressure Test Plan",
  },
  {
    delay: "1655ms",
    href: "https://github.com/dannyjpwilliams/code-crit",
    label: "Code Crit",
  },
] as const;

const experience = [
  {
    delay: "1800ms",
    name: "Wealthsimple",
    roles: [
      { range: "Jun 2026 → Present", title: "Sr. Staff product designer" },
      { range: "Dec 2024 → Jun 2026", title: "Staff product designer" },
    ],
  },
  {
    delay: "1845ms",
    name: "Stripe",
    roles: [
      { range: "Jan 2024 → Dec 2024", title: "Staff product designer" },
      { range: "Mar 2022 → Jan 2024", title: "Senior product designer" },
    ],
  },
  {
    delay: "1890ms",
    name: "Shopify",
    roles: [
      { range: "Jan 2020 → Feb 2022", title: "Senior product designer" },
      { range: "Jan 2018 → Jan 2020", title: "Product designer" },
    ],
  },
  {
    delay: "1935ms",
    name: "Misc.",
    roles: [{ range: "Jan 2016 → Aug 2018", title: "Freelance designer" }],
  },
  {
    delay: "1980ms",
    name: "Code + Mortar",
    roles: [{ range: "Apr 2015 → Jul 2016", title: "Product manager" }],
  },
  {
    delay: "2025ms",
    name: "BioMer",
    roles: [{ range: "Sep 2013 → Apr 2015", title: "Co-founder" }],
  },
] as const;

const teaching = [
  {
    delay: "2115ms",
    name: "York University",
    roles: [{ range: "Jan 2021 → Jul 2022", title: "Instructor" }],
  },
  {
    delay: "2160ms",
    name: "General Assembly",
    roles: [{ range: "Apr 2019 → Jun 2020", title: "Instructor" }],
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
            alt="Danny Williams"
            className="about-reveal rounded-full"
            height={32}
            priority
            src="/avatar.jpeg"
            style={{ "--reveal-delay": "160ms" } as CSSProperties}
            width={32}
          />
        </header>

        <div className="about-body mt-[45px] space-y-4 text-muted">
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "460ms" } as CSSProperties}
          >
            Hey, I&apos;m Danny.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "560ms" } as CSSProperties}
          >
            I&apos;m a product designer based in Halifax, Canada.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "660ms" } as CSSProperties}
          >
            Today, I work on investing at Wealthsimple — helping make markets,
            money, and long-term investing a bit more… well, simple.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "760ms" } as CSSProperties}
          >
            Previously, I&apos;ve designed products at Stripe and Shopify,
            worked with early-stage startups, taught design, and co-founded a
            biotech company.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "860ms" } as CSSProperties}
          >
            Much of my work has centered around systems that help people build —
            from commerce and payments infrastructure to investing platforms.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "960ms" } as CSSProperties}
          >
            I&apos;m drawn to products that create leverage — the kinds that
            enable people to move faster, think differently, or build things
            they otherwise couldn&apos;t.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "1060ms" } as CSSProperties}
          >
            Lately, I&apos;ve been spending a lot of time thinking about
            AI-native tools for building software.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "1160ms" } as CSSProperties}
          >
            Outside of work, I&apos;m usually surfing, running, building side
            projects, or collecting ideas I&apos;ll probably never use.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "1260ms" } as CSSProperties}
          >
            If you&apos;re working on something ambitious or unusually
            thoughtful… I&apos;d love to hear about it.
          </p>
          <p
            className="about-reveal"
            style={{ "--reveal-delay": "1360ms" } as CSSProperties}
          >
            Feel free to reach out on{" "}
            <a
              href="https://x.com/dannyjpwilliams"
              rel="noopener noreferrer"
              target="_blank"
            >
              X
            </a>{" "}
            or via <a href="mailto:danieljpwilliams@gmail.com">email</a>.
          </p>
        </div>

        <section className="mt-[45px]">
          <h2
            className="about-meta about-reveal text-muted"
            style={{ "--reveal-delay": "1420ms" } as CSSProperties}
          >
            Skills
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {skills.map((skill) => (
              <a
                className="about-reveal about-skill flex items-center gap-2"
                href={skill.href}
                key={skill.href}
                rel="noopener noreferrer"
                style={{ "--reveal-delay": skill.delay } as CSSProperties}
                target="_blank"
              >
                <p className="about-label">{skill.label}</p>
                <span aria-hidden="true" className="about-divider" />
                <SkillArrow />
              </a>
            ))}
          </div>
        </section>

        <section className="mt-[45px]">
          <h2
            className="about-meta about-reveal text-muted"
            style={{ "--reveal-delay": "1700ms" } as CSSProperties}
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
            style={{ "--reveal-delay": "2070ms" } as CSSProperties}
          >
            Teaching
          </h2>
          <div className="mt-4 flex flex-col gap-7">
            {teaching.map((job) => (
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
