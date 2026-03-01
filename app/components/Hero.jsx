"use client";
import { hero } from '@/public/assets/assets';
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import { ReactLenis } from '@studio-freight/react-lenis';
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
    const container = useRef();
    const imageWrapper = useRef();
    const textGroup = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        gsap.set(".char-reveal", { y: "150%", skewY: 10 });
        gsap.set(".ui-element", { opacity: 0, y: 20 });
        gsap.set(imageWrapper.current, { scale: 1.2, clipPath: "inset(100% 0% 0% 0%)" });

        tl.to(imageWrapper.current, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.8,
            ease: "power4.inOut"
        })
            .to(imageWrapper.current, {
                scale: 1,
                duration: 2,
                ease: "expo.out"
            }, "-=1")
            .to(".char-reveal", {
                y: 0,
                skewY: 0,
                stagger: 0.05,
                duration: 1.2,
            }, "-=1.5")
            .to(".ui-element", {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 1
            }, "-=1");

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

    }, { scope: container });

    return (
        <ReactLenis root>
            <section ref={container} className='relative min-h-[110vh] sm:min-h-[120vh] w-full bg-[#f5f5f3] overflow-hidden text-[#0a0a0a] font-Zeist_Medium'>
                <Navbar />

                {/* BACKGROUND WATERMARK - Scaled for 2xl */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
                    <h2 className="text-[35vw] 2xl:text-[25vw] font-black uppercase tracking-tighter">Creative Engine</h2>
                </div>

                {/* MAIN IMAGE CONTAINER - Asymmetric & Responsive Width */}
                <div className="absolute right-0 top-0 w-full md:w-[70%] lg:w-[60%] 2xl:w-[55%] h-[100vh] md:h-full z-0">
                    <div ref={imageWrapper} className="relative w-full h-full">
                        <Image
                            src={hero.herogray}
                            fill
                            priority
                            className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-1000"
                            alt="Hero"
                        />
                        <div className="absolute inset-0 bg-[#f5f5f3]/10 mix-blend-overlay" />
                    </div>
                </div>

                {/* CONTENT LAYER */}
                <div className="relative z-10 h-screen w-full flex  flex-col justify-between px-6 py-10 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-24 2xl:px-32">

                    {/* TOP BAR - Vertical alignment adjustments */}
                    <div className="flex justify-between items-start pt-12 sm:pt-16">
                        <div className="ui-element">
                            <span className="text-[8px] sm:text-[10px] 2xl:text-xs font-bold tracking-[0.3em] uppercase border-l-2 border-black pl-3">
                                Director Portfolio / 26
                            </span>
                        </div>
                        <div className="ui-element hidden sm:block text-right">
                            <p className="text-[8px] sm:text-[10px] font-medium leading-none mb-1">LOCAL TIME</p>
                            <p className="text-base sm:text-lg 2xl:text-xl font-light tracking-tighter">14:42 GMT+5</p>
                        </div>
                    </div>

                    {/* MAIN TITLE BLOCK - Fluid Typography */}
                    <div ref={textGroup} className="relative mt-auto  mb-8 sm:mb-12">
                        <div className="overflow-hidden ">
                            <h1 className="text-[16vw]  md:text-[14vw] lg:text-[11vw] 2xl:text-[9vw] font-black leading-[0.85] sm:leading-[0.8] uppercase tracking-tighter">
                                <span className="char-reveal  inline-block">BHARATH</span>
                            </h1>
                        </div>
                        <div className="overflow-hidden ml-[8vw] sm:ml-[5vw]">
                            <h1 className="text-[16vw] md:text-[14vw] lg:text-[11vw] 2xl:text-[9vw] font-black leading-[0.85] sm:leading-[0.8] uppercase tracking-tighter outline-text text-transparent">
                                <span className="char-reveal inline-block">REDDY</span>
                            </h1>
                        </div>

                        {/* Secondary Description - Dynamic positioning */}
                        <div className="ui-element  relative mt-6 sm:absolute sm:-bottom-4 sm:right-0 md:right-auto md:left-[55%] lg:left-[50%] w-full sm:max-w-[280px] lg:max-w-[320px] 2xl:max-w-[400px] bg-black text-white p-5 sm:p-6 lg:p-8 rounded-sm shadow-2xl">
                            <p className="text-[10px] sm:text-xs 2xl:text-sm leading-relaxed opacity-80 uppercase tracking-[0.15em] sm:tracking-widest">
                                Crafting visual identities for the next generation of digital media.
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM STATUS BAR - Grid to Flex transition */}
                    <div className="ui-element flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-black/10 pt-6 sm:pt-8">
                        <div className="flex gap-8 sm:gap-12">
                            <div>
                                <p className="text-[8px] sm:text-[9px] font-bold uppercase opacity-40 mb-2">Social</p>
                                <div className="flex gap-4 text-[10px] sm:text-xs font-medium uppercase tracking-tight">
                                    <a href="#" className="hover:line-through transition-all">Instagram</a>
                                    <a href="#" className="hover:line-through transition-all">Twitter</a>
                                </div>
                            </div>
                            <div>
                                <p className="text-[8px] sm:text-[9px] font-bold uppercase opacity-40 mb-2">Services</p>
                                <p className="text-[10px] sm:text-xs font-medium uppercase tracking-tight">Production / VFX</p>
                            </div>
                        </div>

                        <button className="group relative flex items-center gap-4 py-2 w-full md:w-auto justify-between md:justify-end">
                            <span className="text-xs sm:text-sm font-black uppercase tracking-tighter">Explore Archive</span>
                            <div className="w-10 sm:w-12 h-[1px] bg-black group-hover:w-16 sm:group-hover:w-20 transition-all duration-500" />
                        </button>
                    </div>
                </div>

                {/* GRAIN OVERLAY */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.3] sm:opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <style jsx>{`
                    .outline-text {
                        -webkit-text-stroke: 1px #0a0a0a;
                    }
                    @media (min-width: 640px) {
                        .outline-text { -webkit-text-stroke: 1.5px #0a0a0a; }
                    }
                    @media (min-width: 1024px) {
                        .outline-text { -webkit-text-stroke: 2.5px #0a0a0a; }
                    }
                `}</style>
            </section>
        </ReactLenis>
    );
};

export default Hero;