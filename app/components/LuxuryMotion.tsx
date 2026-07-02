"use client";

import { useEffect } from "react";

export function LuxuryMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches || window.innerWidth < 1024) {
      return;
    }

    const cleanups: Array<() => void> = [];
    let revertContext = () => {};

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

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
            y: 44,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
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
    })();

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      revertContext();
    };
  }, []);

  return null;
}
