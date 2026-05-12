"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const metrics = [
  { label: "Total Views",       val: "50M+",  suffix: "views"     },
  { label: "Avg. Retention",    val: "65%",   suffix: "retained"  },
  { label: "Growth Rate",       val: "300%",  suffix: "increase"  },
  { label: "Videos Published",  val: "500+",  suffix: "published" },
];

const caseStudies = [
  {
    category: "Case Study",
    title: "YouTube Channel Growth",
    description:
      "Grew from 0 to 102K+ subscribers organically through strategic content planning and SEO optimization.",
    stats: ["102K+ Subscribers", "50M+ Views", "65% Avg. Retention"],
    size: "md:col-span-2",
    index: "01",
  },
  {
    category: "Content Strategy",
    title: "Viral Short-Form",
    description: "Repeatable framework for viral Shorts and Reels.",
    stats: ["10M+ Views", "3x Engagement"],
    size: "md:col-span-1",
    index: "02",
  },
  {
    category: "Brand Building",
    title: "Instagram Tech Page",
    description:
      "Built a tech-focused brand reaching 9K+ followers with high-quality reel content.",
    stats: ["14K+ Followers", "8.5% Engagement"],
    size: "md:col-span-1",
    index: "03",
  },
  {
    category: "Sponsored Content",
    title: "Brand Campaigns",
    description:
      "Executed multiple brand campaigns delivering measurable ROI and audience trust.",
    stats: ["15+ Brand Deals", "High Conversion"],
    size: "md:col-span-2",
    index: "04",
  },
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const headingRef   = useRef(null);
  const sublineRef   = useRef(null);
  const dividerRef   = useRef(null);

  useGSAP(() => {

    /* ── Heading SplitText reveal ──────────────────────────── */
    const splitH = new SplitText(headingRef.current, { type: "lines,chars" });
    const splitS = new SplitText(sublineRef.current, { type: "lines,chars" });

    gsap.set(splitH.chars, { yPercent: 110, rotation: 5, opacity: 0 });
    gsap.set(splitS.chars, { yPercent: 110, rotation: 3, opacity: 0 });

    const headTl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 88%",
        once: true,
      },
    });

    headTl
      .to(splitH.chars, {
        yPercent: 0, rotation: 0, opacity: 1,
        duration: 1.0,
        stagger: { amount: 0.4 },
        ease: "expo.out",
      })
      .to(splitS.chars, {
        yPercent: 0, rotation: 0, opacity: 1,
        duration: 0.9,
        stagger: { amount: 0.3 },
        ease: "expo.out",
      }, "-=0.65");

    /* ── Section label + divider ───────────────────────────── */
    gsap.from(".section-label", {
      y: 16, opacity: 0, duration: 0.9, ease: "expo.out",
      scrollTrigger: { trigger: headingRef.current, start: "top 88%", once: true },
    });

    gsap.from(dividerRef.current, {
      scaleX: 0, transformOrigin: "left center",
      duration: 1.2, ease: "expo.inOut",
      scrollTrigger: { trigger: dividerRef.current, start: "top 92%", once: true },
    });

    /* ── Metric counters ───────────────────────────────────── */
    gsap.from(".stat-value", {
      yPercent: 80, opacity: 0,
      duration: 1.1, ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: { trigger: ".metrics-row", start: "top 85%", once: true },
    });
    gsap.from(".stat-label", {
      y: 10, opacity: 0,
      duration: 0.8, ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: { trigger: ".metrics-row", start: "top 85%", once: true },
    });

    /* ── Metrics bar line ──────────────────────────────────── */
    gsap.from(".metrics-line", {
      scaleX: 0, transformOrigin: "left center",
      duration: 1.0, ease: "expo.inOut",
      scrollTrigger: { trigger: ".metrics-row", start: "top 88%", once: true },
    });

    /* ── Portfolio cards — staggered clip-path reveal ──────── */
    gsap.from(".portfolio-card", {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 1.4,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 82%",
        once: true,
      },
    });

    /* ── Card inner content fade ───────────────────────────── */
    gsap.from(".card-inner", {
      y: 30, opacity: 0,
      duration: 1.0, ease: "expo.out",
      stagger: 0.12,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 82%",
        once: true,
      },
    });

    /* ── Horizontal line separators inside cards ───────────── */
    gsap.from(".card-divider", {
      scaleX: 0, transformOrigin: "left center",
      duration: 1.2, ease: "expo.inOut",
      stagger: 0.15,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 82%",
        once: true,
      },
    });

    /* ── Watermark parallax ────────────────────────────────── */
    gsap.to(".watermark-text", {
      xPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.6,
      },
    });

  }, { scope: containerRef });

  /* ── Card hover handlers ─────────────────────────────────── */
  const onCardEnter = (e) => {
    const card = e.currentTarget;
    gsap.to(card.querySelector(".card-hover-bg"), {
      scaleY: 1, duration: 0.55, ease: "expo.out",
    });
    gsap.to(card.querySelector(".card-title"), {
      x: 6, duration: 0.45, ease: "expo.out",
    });
    gsap.to(card.querySelector(".card-arrow"), {
      x: 5, y: -5, opacity: 1, duration: 0.4, ease: "expo.out",
    });
    gsap.to(card.querySelectorAll(".card-stat-text"), {
      color: "#ffffff", duration: 0.3, stagger: 0.04,
    });
    gsap.to(card.querySelector(".card-index"), {
      opacity: 1, duration: 0.35,
    });
  };

  const onCardLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card.querySelector(".card-hover-bg"), {
      scaleY: 0, duration: 0.5, ease: "expo.in",
    });
    gsap.to(card.querySelector(".card-title"), {
      x: 0, duration: 0.4, ease: "expo.out",
    });
    gsap.to(card.querySelector(".card-arrow"), {
      x: 0, y: 0, opacity: 0, duration: 0.35, ease: "expo.out",
    });
    gsap.to(card.querySelectorAll(".card-stat-text"), {
      color: "inherit", duration: 0.3, stagger: 0.04,
    });
    gsap.to(card.querySelector(".card-index"), {
      opacity: 0.15, duration: 0.35,
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#f5f5f3] py-24 md:py-32 px-5 sm:px-10 md:px-14 lg:px-20 overflow-hidden text-[#0D0D0C] font-body"
    >

      {/* ── Grain overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-50 opacity-[0.28] mix-blend-overlay"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── Watermark ── */}
      <div className="absolute top-1/3 left-0 pointer-events-none select-none opacity-[0.032] z-0 overflow-hidden w-full">
        <span className="watermark-text font-display text-[22vw] uppercase leading-none whitespace-nowrap block">
          Portfolio
        </span>
      </div>

      {/* ── Section header ─────────────────────────────────── */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 md:mb-20">

        <div>
          <p className="section-label font-mono text-[10px] uppercase text-[#8A877F] mb-5" style={{ letterSpacing: "0.09em" }}>
            Section 03 &nbsp;/&nbsp; Portfolio
          </p>

          {/* heading overflow clips */}
          <div className="overflow-hidden">
            <h2
              ref={headingRef}
              className="font-display text-[14vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.5vw] leading-[0.86] uppercase text-[#0D0D0C]"
            >
              Results That
            </h2>
          </div>
          <div className="overflow-hidden ml-[5vw] md:ml-[3vw]">
            <h2
              ref={sublineRef}
              className="font-display text-[14vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.5vw] leading-[0.86] uppercase text-outline"
            >
              Speak
            </h2>
          </div>
        </div>

        <p className="font-mono text-[11px] text-[#8A877F] max-w-[220px] leading-relaxed md:text-right" style={{ letterSpacing: "0.05em" }}>
          Quantifiable impact through data-driven creative direction.
        </p>
      </div>

      {/* ── Divider ── */}
      <div ref={dividerRef} className="relative z-10 w-full h-px bg-[#0D0D0C]/10 mb-14 md:mb-16" />

      {/* ── Metrics row ────────────────────────────────────── */}
      <div className="metrics-row relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20">
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col gap-2">
            <p className="stat-label font-mono text-[10px] uppercase text-[#8A877F]" style={{ letterSpacing: "0.09em" }}>
              {m.label}
            </p>
            <div className="overflow-hidden">
              <p className="stat-value font-display text-[12vw] sm:text-[7vw] md:text-[4.5vw] lg:text-[3.8vw] leading-none text-[#0D0D0C]">
                {m.val}
              </p>
            </div>
          </div>
        ))}
        {/* bottom rule */}
        <div className="metrics-line col-span-2 lg:col-span-4 h-px bg-[#0D0D0C]/10 mt-4" />
      </div>

      {/* ── Portfolio grid ──────────────────────────────────── */}
      <div className="portfolio-grid relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3">
        {caseStudies.map((item, i) => (
          <div
            key={i}
            className={`portfolio-card relative overflow-hidden bg-white  ${item.size}`}

          >
            {/* hover fill — scales up from bottom */}
            <div
              className="card-hover-bg absolute inset-0 bg-[#0D0D0C] pointer-events-none"
              style={{ transform: "scaleY(0)", transformOrigin: "bottom center" }}
            />

            <div className="card-inner relative z-10 p-8 md:p-10 flex flex-col justify-between h-full min-h-[300px] md:min-h-[340px]">

              {/* top row */}
              <div className="flex justify-between items-start">
                <span
                  className="font-mono text-[10px] uppercase text-[#8A877F] border border-[#0D0D0C]/10 px-3 py-1.5 rounded-sm"
                  style={{ letterSpacing: "0.08em" }}
                >
                  {item.category}
                </span>
                <span
                  className="card-index font-mono text-[11px] text-[#0D0D0C] italic"
                  style={{ opacity: 0.15 }}
                >
                  /{item.index}
                </span>
              </div>

              {/* bottom block */}
              <div>
                <div className="flex items-end justify-between mb-3">
                  <h3 className="card-title font-display text-[8vw] sm:text-[5vw] md:text-[3.2vw] lg:text-[2.6vw] leading-[0.9] uppercase text-[#0D0D0C]">
                    {item.title}
                  </h3>
                  <span className="card-arrow font-mono text-xl text-[#0D0D0C] opacity-0 mb-1 flex-shrink-0 ml-4">
                    ↗
                  </span>
                </div>

                <p className="font-body text-[12px] text-[#8A877F] leading-relaxed max-w-sm mb-7">
                  {item.description}
                </p>

                <div
                  className="card-divider w-full h-px bg-[#0D0D0C]/08 mb-5"
                  style={{ transformOrigin: "left center" }}
                />

                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {item.stats.map((s, si) => (
                    <span
                      key={si}
                      className="card-stat-text font-mono text-[10px] uppercase text-[#0D0D0C]"
                      style={{ letterSpacing: "0.07em" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
        .font-mono    { font-family: 'DM Mono', monospace; }

        .text-outline {
          -webkit-text-stroke: 2px #0D0D0C;
          color: transparent;
        }
        @media (min-width: 768px) {
          .text-outline { -webkit-text-stroke: 2.5px #0D0D0C; }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;