"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
    const containerRef = useRef(null);
    const formRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });

        tl.from(".contact-header", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "expo.out"
        })
        .from(".contact-card", {
            clipPath: "inset(0% 0% 100% 0%)",
            y: 50,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.inOut"
        }, "-=0.5")
        .from(".input-line", {
            scaleX: 0,
            transformOrigin: "left",
            duration: 1,
            stagger: 0.1,
            ease: "expo.inOut"
        }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full bg-[#f5f5f3] py-24 px-6 md:px-16 lg:px-24 overflow-hidden text-[#0a0a0a] font-Zeist_Medium">
            
            {/* BACKGROUND WATERMARK */}
            <div className="absolute -bottom-10 -left-10 opacity-[0.03] select-none pointer-events-none">
                <h2 className="text-[25vw] font-bold uppercase tracking-tighter leading-none">Connect</h2>
            </div>

            {/* HEADER */}
            <div className="contact-header relative z-10 mb-24 border-b border-black/10 pb-16">
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 opacity-40">
                    Section 04 / Contact
                </p>
                <h2 className="text-[12vw] md:text-[9vw] font-bold uppercase tracking-tighter leading-[0.8]">
                    LET'S GROW<br />
                    <span className="outline-text text-transparent italic">ORGANICALLY</span>
                </h2>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* LEFT: TECHNICAL DATA */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="contact-card group">
                        <p className="text-[10px] font-bold uppercase opacity-40 mb-2 tracking-widest">Digital Mail</p>
                        <a href="mailto:mulibharathkumarreddy324@gmail.com" className="text-lg md:text-xl font-semibold hover:italic transition-all duration-300 block">
                            mulibharathkumarreddy324@gmail.com
                        </a>
                    </div>

                    <div className="contact-card">
                        <p className="text-[10px] font-bold uppercase opacity-40 mb-2 tracking-widest">Direct Line</p>
                        <p className="text-xl font-semibold italic">9381791507</p>
                    </div>

                    <div className="contact-card">
                        <p className="text-[10px] font-bold uppercase opacity-40 mb-2 tracking-widest">Base Operations</p>
                        <p className="text-xl font-semibold">Hyderabad, India</p>
                    </div>

                    <div className="pt-12 border-t border-black/5 flex gap-8">
                        {['Instagram', 'Twitter', 'LinkedIn'].map((link) => (
                            <a key={link} href="#" className="text-[10px] font-bold uppercase tracking-widest hover:line-through">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* RIGHT: MESSAGE ENGINE */}
                <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-sm border border-black/5">
                    <form ref={formRef} className="space-y-10">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="YOUR NAME" 
                                className="w-full bg-transparent border-none py-4 text-xs font-bold tracking-widest focus:outline-none placeholder:text-black/20"
                            />
                            <div className="input-line w-full h-[1px] bg-black/10 origin-left" />
                        </div>

                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="EMAIL ADDRESS" 
                                className="w-full bg-transparent border-none py-4 text-xs font-bold tracking-widest focus:outline-none placeholder:text-black/20"
                            />
                            <div className="input-line w-full h-[1px] bg-black/10 origin-left" />
                        </div>

                        <div className="relative">
                            <textarea 
                                rows="4" 
                                placeholder="HOW CAN WE SCALE?" 
                                className="w-full bg-transparent border-none py-4 text-xs font-bold tracking-widest focus:outline-none placeholder:text-black/20 resize-none"
                            ></textarea>
                            <div className="input-line w-full h-[1px] bg-black/10 origin-left" />
                        </div>

                        <button className="group relative w-full md:w-auto px-12 py-5 bg-black text-white overflow-hidden transition-all duration-500 hover:pr-16">
                            <span className="relative z-10 text-xs font-bold uppercase tracking-widest">Send Message</span>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                →
                            </div>
                        </button>
                    </form>
                </div>
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

export default Contact;