"use client";

import { useEffect, useRef } from "react";

export function LuxuryMotion() {
  const cursorDot = useRef<HTMLSpanElement>(null);
  const cursorRing = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const supportsCursor =
      window.innerWidth >= 1024 &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (reduceMotion.matches) return;

    let cancelled = false;
    const cleanups: Array<() => void> = [];
    let revertContext = () => {};
    const root = document.documentElement;

    if (supportsCursor) root.classList.add("has-lux-cursor");

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);

      // React intentionally mounts, cleans up, and mounts effects again in
      // development. Do not attach GSAP listeners after the first effect has
      // already been cleaned up.
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      if (supportsCursor) {
        const dotX = cursorDot.current ? gsap.quickSetter(cursorDot.current, "x", "px") : null;
        const dotY = cursorDot.current ? gsap.quickSetter(cursorDot.current, "y", "px") : null;
        const ringX = cursorRing.current ? gsap.quickTo(cursorRing.current, "x", { duration: 0.22, ease: "power3.out", unit: "px" }) : null;
        const ringY = cursorRing.current ? gsap.quickTo(cursorRing.current, "y", { duration: 0.22, ease: "power3.out", unit: "px" }) : null;

        const onPointerMove = (event: PointerEvent) => {
          dotX?.(event.clientX);
          dotY?.(event.clientY);
          ringX?.(event.clientX);
          ringY?.(event.clientY);
          root.classList.add("lux-cursor-visible");
        };

        const onPointerOver = (event: PointerEvent) => {
          const target = event.target instanceof Element ? event.target.closest("a, button, input, textarea, select, label") : null;
          root.classList.toggle("lux-cursor-active", Boolean(target));
        };

        const onPointerLeave = () => root.classList.remove("lux-cursor-visible", "lux-cursor-active");

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        document.addEventListener("pointerover", onPointerOver, { passive: true });
        document.documentElement.addEventListener("pointerleave", onPointerLeave);
        cleanups.push(() => {
          window.removeEventListener("pointermove", onPointerMove);
          document.removeEventListener("pointerover", onPointerOver);
          document.documentElement.removeEventListener("pointerleave", onPointerLeave);
        });
      }

      const lenis = supportsCursor
        ? new Lenis({
            anchors: true,
            duration: 1.15,
            easing: (progress: number) => 1 - Math.pow(1 - progress, 4),
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1,
          })
        : null;

      if (lenis) {
        const updateScrollTrigger = () => ScrollTrigger.update();
        const updateLenis = (time: number) => lenis.raf(time * 1000);

        lenis.on("scroll", updateScrollTrigger);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);
        cleanups.push(() => {
          lenis.off("scroll", updateScrollTrigger);
          gsap.ticker.remove(updateLenis);
          lenis.destroy();
        });
      }

      const ctx = gsap.context(() => {
        const heroTimeline = gsap.timeline({
          defaults: { ease: "power3.out", duration: 1.1 },
        });

        heroTimeline
          .from("[data-hero-media]", {
            autoAlpha: 0,
            scale: 1.08,
            filter: "blur(10px)",
            duration: 1.45,
            ease: "power2.out",
          })
          .from(
            "[data-hero-reveal]",
            {
              autoAlpha: 0,
              y: 34,
              stagger: 0.11,
            },
            "-=1.05",
          );

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            autoAlpha: 0,
            y: 32,
            scale: 0.985,
            filter: "blur(5px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("main > section:not(#hero)").forEach((section) => {
          const heading = section.querySelector<HTMLElement>("h2");
          if (!heading) return;

          gsap.from(heading, {
            clipPath: "inset(0 0 100% 0)",
            y: 20,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-lux-media]").forEach((element) => {
          gsap.fromTo(
            element,
            { yPercent: -3, scale: 1.025 },
            {
              yPercent: 3,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        });

        gsap.utils
          .toArray<HTMLElement>("[data-lux-button], [data-lux-tag]")
          .forEach((element) => {
            const moveX = gsap.quickTo(element, "x", {
              duration: 0.45,
              ease: "power3.out",
            });
            const moveY = gsap.quickTo(element, "y", {
              duration: 0.45,
              ease: "power3.out",
            });

            const onPointerMove = (event: PointerEvent) => {
              const rect = element.getBoundingClientRect();
              const relX = (event.clientX - rect.left) / rect.width - 0.5;
              const relY = (event.clientY - rect.top) / rect.height - 0.5;

              moveX(relX * 7);
              moveY(relY * 5);
            };

            const onPointerEnter = () => {
              gsap.to(element, {
                scale: 1.018,
                boxShadow: "0 18px 42px rgba(196, 169, 98, 0.13)",
                duration: 0.45,
                ease: "power3.out",
              });
            };

            const onPointerLeave = () => {
              moveX(0);
              moveY(0);
              gsap.to(element, {
                scale: 1,
                boxShadow: "0 0 0 rgba(196, 169, 98, 0)",
                duration: 0.55,
                ease: "power3.out",
              });
            };

            element.addEventListener("pointermove", onPointerMove);
            element.addEventListener("pointerenter", onPointerEnter);
            element.addEventListener("pointerleave", onPointerLeave);

            cleanups.push(() => {
              element.removeEventListener("pointermove", onPointerMove);
              element.removeEventListener("pointerenter", onPointerEnter);
              element.removeEventListener("pointerleave", onPointerLeave);
            });
          });
      });

      revertContext = () => ctx.revert();
      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      cleanups.forEach((cleanup) => cleanup());
      revertContext();
      root.classList.remove("has-lux-cursor", "lux-cursor-visible", "lux-cursor-active");
    };
  }, []);

  return (
    <div className="lux-cursor" aria-hidden="true">
      <span ref={cursorRing} className="lux-cursor-ring" />
      <span ref={cursorDot} className="lux-cursor-dot" />
    </div>
  );
}
