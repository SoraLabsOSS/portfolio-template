import { PageFade } from "@/components/page-fade";

export default function Home() {
  return (
    <PageFade>
      <h1 className="sr-only">Alexsandr Senaviev</h1>
      <main className="relative flex min-h-dvh items-center justify-center">
        <div className="home-lockup text-center uppercase tracking-[0.02em]">
          <p className="home-lockup-line home-lockup-name font-bold text-foreground">
            Alexsandr Senaviev
          </p>
          <p className="home-lockup-line home-lockup-role font-medium text-foreground/60">
            Creative Developer
          </p>
        </div>
      </main>
    </PageFade>
  );
}
