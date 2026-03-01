"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Expertise = () => {
    const containerRef = useRef(null);
    const gridRef = useRef(null);

    // Color to be used for all SVG lines
    const lineColor = "#252525";

    const IconIdeation = () => (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#0a0a0a] group-hover:stroke-white transition-colors duration-700 opacity-20 group-hover:opacity-100">
            {/* Central Core */}
            <circle cx="50" cy="50" r="15" fill="none" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="8" fill="none" strokeWidth="1" />
            {/* Orbital Paths */}
            <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" strokeWidth="0.2" transform="rotate(45 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" strokeWidth="0.2" transform="rotate(-45 50 50)" />
            {/* Technical Markers */}
            <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.1" />
            <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.1" />
        </svg>
    );

    const IconStorytelling = () => (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#0a0a0a] group-hover:stroke-white transition-colors duration-700 opacity-20 group-hover:opacity-100">
            {/* The "Arc" of the story */}
            <path d="M10 80 Q 50 10 90 80" fill="none" strokeWidth="1" strokeDasharray="100" className="draw-path" />
            {/* Horizontal timeline */}
            <line x1="10" y1="80" x2="90" y2="80" strokeWidth="0.5" />
            {/* Plot Points */}
            <rect x="48" y="25" width="4" height="4" fill="currentColor" stroke="none" />
            <circle cx="10" cy="80" r="2" fill="currentColor" />
            <circle cx="90" cy="80" r="2" fill="currentColor" />
            {/* Data Spikes */}
            <line x1="30" y1="80" x2="30" y2="60" strokeWidth="0.5" />
            <line x1="70" y1="80" x2="70" y2="55" strokeWidth="0.5" />
        </svg>
    );

    const IconEditing = () => (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#0a0a0a] group-hover:stroke-white transition-colors duration-700 opacity-20 group-hover:opacity-100">
            {/* Frame corners */}
            <path d="M10 30 V 10 H 30" fill="none" strokeWidth="1" />
            <path d="M70 10 H 90 V 30" fill="none" strokeWidth="1" />
            <path d="M10 70 V 90 H 30" fill="none" strokeWidth="1" />
            <path d="M70 90 H 90 V 70" fill="none" strokeWidth="1" />
            {/* Cut marks */}
            <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.5" strokeDasharray="4 4" />
            {/* Playhead symbol */}
            <polygon points="45,40 60,50 45,60" fill="none" strokeWidth="1" />
        </svg>
    );

    const IconSEO = () => (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#0a0a0a] group-hover:stroke-white transition-colors duration-700 opacity-20 group-hover:opacity-100">
            {/* Concentric Search Rings */}
            <circle cx="50" cy="50" r="40" fill="none" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="30" fill="none" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="20" fill="none" strokeWidth="0.5" />
            {/* Scanning Line */}
            <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.5" className="scan-line" />
            {/* Vectors */}
            <line x1="50" y1="50" x2="85" y2="15" strokeWidth="1" />
            <circle cx="85" cy="15" r="2" fill="currentColor" />
        </svg>
    );

    const IconTrend = () => (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#0a0a0a] group-hover:stroke-white transition-colors duration-700 opacity-20 group-hover:opacity-100">
            {/* Rising Trend Wave */}
            <path d="M0 80 L20 70 L40 75 L60 40 L80 45 L100 10" fill="none" strokeWidth="1" />
            {/* Background Grid */}
            <line x1="0" y1="20" x2="100" y2="20" strokeWidth="0.05" />
            <line x1="0" y1="40" x2="100" y2="40" strokeWidth="0.05" />
            <line x1="0" y1="60" x2="100" y2="60" strokeWidth="0.05" />
            {/* Target Marker */}
            <circle cx="100" cy="10" r="5" fill="none" strokeWidth="0.5" strokeDasharray="1 1" />
        </svg>
    );
    const skills = [
        {
            title: "Content Ideation",
            desc: "Creative concepts that capture attention and drive views",
            icon: <IconIdeation />,
            tag: "Creative",
            size: "md:col-span-2 md:h-[450px]",
            // Abstract Diagonal Grid
        },
        {
            title: "Storytelling",
            desc: "Narrative techniques that boost retention",
            tag: "Psychology",
            icon: <IconStorytelling />,
            size: "md:col-span-1 md:h-[450px]",
            // Minimalist Square Grid
        },
        {
            title: "Video Editing",
            desc: "Professional short and long-form editing",
            tag: "VFX",
            size: "md:col-span-1 md:h-[550px]",
            // Vertical Rhythm Lines
            icon: <IconEditing />
        },
        {
            title: "SEO Strategy",
            desc: "Strategic optimization for discoverability",
            tag: "Algorithm",
            size: "md:col-span-1 md:h-[550px]",
            // Concentric Circles fragment
            icon: <IconSEO />,
        },
        {
            title: "Trend Research",
            desc: "Identifying viral trends before they peak",
            tag: "Data",
            size: "md:col-span-1 md:h-[550px]",
            // Abstract Wireframe Triangle
            icon: <IconTrend />
        },
    ];



    useGSAP(() => {
        let mm = gsap.matchMedia();

        // DESKTOP & TABLET: Full Cinematic Reveals
        mm.add("(min-width: 768px)", () => {
            // Title Reveal
            gsap.from(".expertise-label", {
                y: 100,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });

            // Heavy Clip-Path Reveal
            gsap.from(".skill-card", {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 100,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 70%",
                }
            });
        });

        // MOBILE: Light Performance-First Reveals
        mm.add("(max-width: 767px)", () => {
            gsap.from(".expertise-label", {
                y: 30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                }
            });

            // Simpler Y-axis fade instead of clip-path to save GPU
            gsap.from(".skill-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1, // Faster stagger for shorter screens
                ease: "power2.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                }
            });
        });

        // Optional: Clean up media queries automatically handled by useGSAP
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full bg-[#f5f5f3] py-32 px-6 md:px-16 lg:px-24 overflow-hidden text-[#0a0a0a] font-Zeist_Medium">

            {/* BACKGROUND WATERMARK */}
            <div className="absolute top-20 left-10 opacity-[0.02] select-none pointer-events-none">
                <h2 className="text-[25vw] font-black uppercase tracking-tighter leading-none">Capabilities</h2>
            </div>

            {/* HEADER SECTION */}
            <div className="relative z-10 flex flex-col mb-32 border-b border-black/10 pb-16">
                <div className="overflow-hidden">
                    <p className="expertise-label text-[10px] font-bold tracking-[0.4em] uppercase mb-8 opacity-40">
                        Expertise / Section 02
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                    <h2 className="text-[14vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8]">
                        CORE<br />
                        <span className="outline-text text-transparent">SKILLS</span>
                    </h2>
                    <div className="max-w-xs text-right">
                        <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed opacity-60">
                            Engineering attention through <br />asymmetric design & narrative logic.
                        </p>
                    </div>
                </div>
            </div>

            {/* EDITORIAL GRID */}
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`skill-card group relative bg-white border border-black/5 p-10 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:bg-black hover:text-white ${skill.size}`}

                    >
                        {/* THE CONTINUOUS ICON BACKGROUND */}
                        <div className="absolute top-20 right-20 w-64 h-64 -translate-y-12 translate-x-12 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                            {skill.icon}
                        </div>
                        {/* Z-10 added to ensure content stays above the bg image */}
                        <div className="flex justify-between items-start relative z-10">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:text-white/60">
                                {skill.tag}
                            </span>
                            <span className="text-xl font-light opacity-20 group-hover:opacity-100 italic">
                                /0{index + 1}
                            </span>
                        </div>

                        <div className="mt-auto relative z-10">
                            <h3 className="text-4xl md:text-5xl font-semibold uppercase tracking-tighter leading-none mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                {skill.title}
                            </h3>
                            <p className="text-xs font-medium  tracking-tight leading-relaxed opacity-40 group-hover:opacity-80 max-w-[200px]">
                                {skill.desc}
                            </p>
                        </div>

                        {/* HOVER ACCENT LINE */}
                        <div className="absolute top-0 right-0 w-1 h-0 bg-black group-hover:h-full group-hover:bg-white transition-all duration-700" />
                    </div>
                ))}
            </div>

            {/* FOOTER TAG */}
            <div className="mt-24 flex justify-between items-center border-t border-black/10 pt-12">
                <div className="flex gap-10">
                    <span className="text-[10px] font-black uppercase tracking-widest">Precision</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Impact</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Growth</span>
                </div>
                <div className="w-20 h-[1px] bg-black opacity-20" />
            </div>

            {/* GRAIN OVERLAY (Consistency with Hero) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.3] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px #0a0a0a;
                }
                @media (min-width: 1024px) {
                    .outline-text { -webkit-text-stroke: 2px #0a0a0a; }
                }
                .skill-card {
                    transition: background-color 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                    /* Ensure SVG doesn't disappear on hover, 
                       though it may invert color depending on blending */
                    background-blend-mode: normal; 
                }
            `}</style>
        </section>
    );
};

export default Expertise;