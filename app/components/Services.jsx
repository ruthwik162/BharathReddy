"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { hero } from '@/public/assets/assets';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextY from './TextY';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
    const sectionRef = useRef(null);
    const rightSideRef = useRef(null);
    const progressRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            title: "End-to-End Content Creation",
            desc: "A comprehensive workflow spanning from initial conceptualization to final publishing. I manage the entire pipeline including strategic scripting, professional cinematography, high-end post-production, and platform-specific metadata optimization to ensure maximum reach and professional standards.",
            tag: "FULL_PIPELINE",
            stats: ["4K RAW", "COLOUR GRADE", "DYNAMICS"]
        },
        {
            title: "Short & Long-Form Video",
            desc: "Expertly crafted visual narratives designed for high retention. Whether it's cinematic long-form storytelling for YouTube or high-impact vertical content for Reels/Shorts, the focus remains on psychological triggers that maintain viewer engagement and average view duration.",
            tag: "FORMAT_MAX",
            stats: ["9:16 & 16:9", "HOOK_LOGIC", "RETENTION"]
        },
        {
            title: "Brand Promotions",
            desc: "Developing authentic sponsored content that bridges the gap between brand objectives and audience trust. By creating value-first integrations, I ensure that promotional material feels organic to the viewer while delivering measurable results and professional brand representation.",
            tag: "PARTNERSHIPS",
            stats: ["ROI_DRIVEN", "INTEGRATION", "NATIVE"]
        },
        {
            title: "Reels & Shorts Strategy",
            desc: "A data-driven approach to short-form virality. By analyzing current trend cycles, audio triggers, and algorithmic patterns, I develop content strategies that prioritize organic discovery and rapid audience acquisition across TikTok, Reels, and YouTube Shorts.",
            tag: "VIRAL_OPS",
            stats: ["TREND_ANALYSIS", "SEO", "GROWTH"]
        },
        {
            title: "Content Consultation",
            desc: "Providing high-level strategic guidance for established brands and emerging creators. We dive into brand positioning, content pillars, and workflow efficiency to transform digital presences into authoritative industry leaders through structured organic growth.",
            tag: "STRATEGY_DECK",
            stats: ["POSITIONING", "AUDIT", "PLANNING"]
        },
        {
            title: "Scriptwriting & Hooks",
            desc: "The architecture of attention. I craft compelling scripts focused on the '3-second hook' rule. Every word is calculated to reduce bounce rates, establish narrative tension, and guide the viewer through a seamless flow from introduction to call-to-action.",
            tag: "NARRATIVE",
            stats: ["PSYCHOLOGY", "COPY", "FLOW"]
        },
        {
            title: "Audience Growth",
            desc: "Focusing on sustainable community building rather than vanity metrics. Utilizing organic discovery techniques and engagement-driven storytelling to turn passive viewers into a loyal, active community that advocates for your brand's mission.",
            tag: "COMMUNITY_LOG",
            stats: ["ORGANIC", "LOYALTY", "ENGAGEMENT"]
        }
    ];

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: rightSideRef.current,
                pinSpacing: false,
            });

            services.forEach((_, i) => {
                ScrollTrigger.create({
                    trigger: `.service-block-${i}`,
                    start: "top 40%",
                    end: "bottom 40%",
                    onEnter: () => setActiveIndex(i),
                    onEnterBack: () => setActiveIndex(i),
                });
            });

            gsap.to(progressRef.current, {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true
                }
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative w-full text-black bg-[#f5f5f3] flex flex-col md:flex-row overflow-hidden border-t border-black/5">

            {/* LEFT SIDE: CONTENT */}
            <div className="w-full md:w-[50%] px-6 md:px-12 lg:px-20 relative z-10 py-20">
                {/* VERTICAL PROGRESS */}
                <div className="hidden md:block absolute left-6 lg:left-10 top-0 w-[1px] h-full bg-black/[0.03]">
                    <div ref={progressRef} className="w-full bg-black/40 origin-top" />
                </div>

                {/* Section Header */}
                <div className="mb-32">
                    <p className="text-[9px] font-bold tracking-[0.5em] uppercase text-black/40 mb-2">Capabilities / 01</p>
                    <h2 className="text-[12vw] md:text-[5vw] font-bold uppercase tracking-tighter leading-[0.85] text-[#0a0a0a]">
                        Service<br /><span className="italic font-light">Structure</span>
                    </h2>
                </div>

                {/* Service Blocks */}
                {services.map((service, index) => (
                    <div key={index} className={`service-block-${index} min-h-[60vh] flex flex-col justify-start mb-20 border-t border-black/[0.05] pt-10`}>
                        <div className="flex items-baseline gap-4 mb-4">
                            <span className="text-[10px] font-mono opacity-30">0{index + 1}</span>
                            <h3 className={`text-3xl md:text-4xl font-bold uppercase tracking-tighter transition-all duration-700
                                ${activeIndex === index ? 'text-black translate-x-2' : 'text-black/20 translate-x-0'}`}>
                                {service.title}
                            </h3>
                        </div>

                        <div className={`transition-all duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-20 '}`}>
                            <TextY>
                                <p className="text-[15px] font-semibold leading-tight text-black/70 max-w-sm mb-6 ">
                                    {service.desc}
                                </p>
                            </TextY>

                            <div className="flex flex-wrap gap-1.5">
                                {service.stats.map((s, i) => (
                                    <span key={i} className="text-[8px] font-mono border border-black/10 px-2 py-0.5 rounded-full opacity-60">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* RIGHT SIDE: THE VIEWFINDER */}
            <div ref={rightSideRef} className="hidden md:block w-[50%] h-screen relative bg-[#0e0e0e]">
                {/* HUD SYSTEM */}
                <div className="absolute inset-0 z-20 pointer-events-none p-8 flex flex-col justify-between font-mono text-[9px] text-white/40">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-white opacity-100">● SYSTEM_ACTIVE</span>
                            <span>BUFF_MODE: ON</span>
                            <span>MEM_STABLE</span>
                        </div>
                        <div className="text-right flex flex-col">
                            <span className="text-white opacity-100 uppercase tracking-widest">{services[activeIndex].tag}</span>
                            <span>INDEX_REF: 00{activeIndex + 1}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="w-24">
                            <div className="h-[1px] w-full bg-white/10 mb-1">
                                <div className="h-full bg-white transition-all duration-500" style={{ width: `${(activeIndex + 1) * 14.28}%` }} />
                            </div>
                            <span className="opacity-50 uppercase text-[7px]">Data Scan</span>
                        </div>
                        <span className="rotate-90 origin-bottom-right opacity-30 tracking-[0.3em]">SRG_AVA_SYSTEMS</span>
                    </div>
                </div>

                {/* IMAGE MASK */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="relative w-full h-full overflow-hidden grayscale contrast-125 brightness-50">
                        <Image
                            src={hero.herogray}
                            fill
                            alt="Visual"
                            className="object-cover scale-110"
                        />
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .outline-text { -webkit-text-stroke: 1px #0a0a0a; }
                @media (min-width: 1024px) { .outline-text { -webkit-text-stroke: 1.5px #0a0a0a; } }
            `}</style>
        </section>
    );
};

export default Services;