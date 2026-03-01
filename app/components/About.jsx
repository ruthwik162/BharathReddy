"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hero } from '@/public/assets/assets';
import TextY from './TextY';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
    const container = useRef();
    const imageRef = useRef();
    const marqueeRef = useRef();
    const textGroup = useRef();

    useGSAP(() => {
        // 1. Text Split Reveal (Simulating char-by-char)
        const textElements = gsap.utils.toArray(".reveal-text");
        textElements.forEach((text) => {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            });
        });

        // 2. Parallax Image & Mask Reveal
        gsap.fromTo(imageRef.current,
            { clipPath: "inset(100% 0% 0% 0%)", scale: 1.4 },
            {
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                duration: 2,
                ease: "expo.inOut",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                }
            }
        );

        // 3. Floating Background Marquee
        gsap.to(marqueeRef.current, {
            xPercent: -20,
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });
        gsap.to(textGroup.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: -150,
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)"
        });

        // 4. Stats Counter Animation
        gsap.from(".stat-number", {
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: ".stat-grid",
                start: "top 85%",
            }
        });

    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-screen w-full bg-[#f5f5f3] py-24 md:py-40 px-6 sm:px-7 md:px-6 lg:px-5 2xl:px-5 text-[#0a0a0a] overflow-hidden">

            {/* LARGE BACKGROUND TEXT - Awwwards Style */}
            <div ref={marqueeRef} className="absolute top-20 left-0 whitespace-nowrap opacity-[0.02] select-none pointer-events-none">
                <h2 className="text-[20vw] font-black uppercase leading-none">
                    Strategy • Vision • Design • Strategy • Vision
                </h2>
            </div>

            {/* Top Label */}
            <div className="relative z-10 flex items-center gap-4 mb-20 md:mb-32">
                <div className="w-12 h-[1px] bg-black" />
                <span className="text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.5em]">01 / Philosophy</span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                {/* Left Side: Content */}
                <div className="lg:col-span-7 relative">
                    <div className="overflow-hidden">
                        <TextY>
                            <h2 className="reveal-text text-5xl sm:text-7xl 2xl:text-[5vw] font-semibold uppercase tracking-tighter leading-[0.9] mb-12">
                                The Synergy of <br />
                                <span className="outline-text text-transparent italic font-light">Art & Data</span>
                            </h2>
                        </TextY>

                    </div>

                    <div className="max-w-xl 2xl:max-w-3xl space-y-8">
                        <TextY>
                            <p className=" text-xl sm:text-2xl 2xl:text-[1.5vw] 2xl:leading-[1.8vw] font-medium leading-tight">
                                Hi, I'm Bharath — a content creator who turned a passion for storytelling into a thriving digital presence. I'm currently pursuing my B.Tech at Mallareddy University (graduating 2026), while simultaneously growing my YouTube channel to 102K+ subscribers entirely through organic strategies.                            </p>

                        </TextY>
                        <TextY>

                            <p className=" text-sm sm:text-base 2xl:text-xl opacity-60 leading-relaxed max-w-lg">
                                I deeply understand platform algorithms, audience psychology, and what makes content go viral. My approach combines creative storytelling with data-driven decisions to maximize engagement and retention.                            </p>
                        </TextY>
                    </div>

                    <div ref={textGroup} className="left-1/2 z-10 absolute top-1/2 mt-auto lg:col-span-7 mb-8 sm:mb-12">
                        <div className="overflow-hidden ">
                            <h1 className="text-[16vw]  md:text-[14vw] lg:text-[11vw] 2xl:text-[9vw] font-black leading-[0.85] sm:leading-[0.8] uppercase tracking-tighter">
                                <span className="char-reveal  inline-block">Strategic</span>
                            </h1>
                        </div>
                        <div className="overflow-hidden ml-[8vw] sm:ml-[5vw]">
                            <h1 className="text-[16vw] md:text-[14vw] lg:text-[11vw] 2xl:text-[9vw] font-black leading-[0.85] sm:leading-[0.8] uppercase tracking-tighter outline-text text-transparent">
                                <span className="char-reveal inline-block">Signs</span>
                            </h1>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="stat-grid grid grid-cols-3 gap-8 border-t border-black/10 mt-20 pt-12">
                        {[
                            { label: "Audience", value: "102", suffix: "K+" },
                            { label: "Retention", value: "8", suffix: ".5%" },
                            { label: "Influence", value: "9", suffix: "K+" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <p className="text-[9px] 2xl:text-xs font-bold opacity-40 uppercase mb-3 tracking-widest">{stat.label}</p>
                                <h3 className="text-3xl sm:text-5xl 2xl:text-7xl font-black tracking-tighter">
                                    <span className="stat-number">{stat.value}</span>{stat.suffix}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>



                {/* Right Side: Visuals */}
                <div className="lg:col-span-5 sticky top-24">
                    <div className="relative group">
                        <div
                            ref={imageRef}
                            className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-200"
                        >
                            <Image
                                src={hero.heromobile}
                                alt="Bharath Reddy"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-expo"
                            />
                        </div>

                        {/* Floating Caption */}
                        <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 md:p-8 max-w-[200px] hidden md:block">
                            <p className="text-[10px] uppercase tracking-widest leading-relaxed opacity-80">
                                Specializing in viral visual architecture.
                            </p>
                        </div>
                    </div>

                    {/* Meta Tags */}
                    <div className="mt-12 flex flex-wrap gap-2">
                        {['VFX Production', 'Growth Strategy', 'Creative Direction'].map((tag) => (
                            <span key={tag} className="px-4 py-2 bg-white border border-black/5 text-[10px] 2xl:text-xs font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px #0a0a0a;
                }
                .ease-expo {
                    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
                }
                @media (min-width: 1024px) {
                    .outline-text { -webkit-text-stroke: 2px #0a0a0a; }
                }
            `}</style>
        </section>
    );
};

export default About;