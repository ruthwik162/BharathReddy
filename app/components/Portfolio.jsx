"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Portfolio = () => {
    const containerRef = useRef(null);
    const statsRef = useRef(null);

    const metrics = [
        { label: "Total Views", val: "50M+" },
        { label: "Avg. Retention", val: "65%" },
        { label: "Growth Rate", val: "300%" },
        { label: "Videos Published", val: "500+" },
    ];

    const caseStudies = [
        {
            category: "Case Study",
            title: "YouTube Channel Growth",
            description: "Grew from 0 to 102K+ subscribers organically through strategic content planning and SEO optimization.",
            stats: ["102K+ Subscribers", "50M+ Views", "65% Avg. Retention"],
            size: "md:col-span-2"
        },
        {
            category: "Content Strategy",
            title: "Viral Short-Form",
            description: "Repeatable framework for viral Shorts and Reels.",
            stats: ["10M+ Views", "3x Engagement"],
            size: "md:col-span-1"
        },
        {
            category: "Brand Building",
            title: "Instagram Tech Page",
            description: "Built a tech-focused brand reaching 9K+ followers with high-quality reel content.",
            stats: ["9K+ Followers", "8.5% Engagement"],
            size: "md:col-span-1"
        },
        {
            category: "Sponsored Content",
            title: "Brand Campaigns",
            description: "Executed multiple brand campaigns delivering measurable ROI and audience trust.",
            stats: ["15+ Brand Deals", "High Conversion"],
            size: "md:col-span-2"
        }
    ];

    useGSAP(() => {
        // Stats Counter/Entrance
        gsap.from(".stat-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
                trigger: statsRef.current,
                start: "top 90%",
            }
        });

        // Grid Reveal - Matching Hero ClipPath
        gsap.from(".portfolio-card", {
            clipPath: "inset(100% 0% 0% 0%)",
            y: 100,
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: ".portfolio-grid",
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full bg-[#f5f5f3] py-24 px-6 md:px-16 lg:px-24 overflow-hidden text-[#0a0a0a] font-Zeist_Medium">
            
            {/* WATERMARK */}
            <div className="absolute top-40 right-0 opacity-[0.03] select-none pointer-events-none">
                <h2 className="text-[20vw] font-bold uppercase tracking-tighter leading-none">Proof</h2>
            </div>

            {/* HEADER: Results That Speak */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <div>
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 opacity-40">Section 03 / Portfolio</p>
                    <h2 className="text-[12vw] md:text-[8vw] font-bold uppercase tracking-tighter leading-[0.8]">
                        RESULTS THAT<br />
                        <span className="outline-text text-transparent italic">SPEAK</span>
                    </h2>
                </div>
                <div className="max-w-[300px] text-right">
                    <p className="text-xs font-semibold uppercase tracking-widest leading-relaxed opacity-60">
                        Quantifiable impact through <br />data-driven creative direction.
                    </p>
                </div>
            </div>

            {/* QUICK METRICS BAR */}
            <div ref={statsRef} className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-black/10 py-12 mb-20">
                {metrics.map((m, i) => (
                    <div key={i} className="stat-item">
                        <p className="text-[10px] font-bold uppercase opacity-40 mb-2 tracking-widest">{m.label}</p>
                        <p className="text-5xl md:text-6xl font-bold tracking-tighter italic">{m.val}</p>
                    </div>
                ))}
            </div>

            {/* PORTFOLIO GRID */}
            <div className="portfolio-grid grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                {caseStudies.map((item, index) => (
                    <div 
                        key={index} 
                        className={`portfolio-card group relative bg-white border border-black/5 p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:bg-black hover:text-white ${item.size}`}
                    >
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-black/10 group-hover:border-white/20">
                                {item.category}
                            </span>
                            <span className="text-xl font-light opacity-20 group-hover:opacity-100 italic">/0{index + 1}</span>
                        </div>

                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                {item.title}
                            </h3>
                            <p className="text-sm font-medium opacity-60 group-hover:opacity-80 max-w-md mb-8">
                                {item.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6 border-t border-black/5 group-hover:border-white/10">
                                {item.stats.map((s, si) => (
                                    <span key={si} className="text-[10px] font-bold uppercase tracking-widest">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* HOVER ACCENT */}
                    </div>
                ))}
            </div>

            {/* GRAIN OVERLAY */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.3] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px #0a0a0a;
                }
                @media (min-width: 1024px) {
                    .outline-text { -webkit-text-stroke: 2px #0a0a0a; }
                }
            `}</style>
        </section>
    );
};

export default Portfolio;