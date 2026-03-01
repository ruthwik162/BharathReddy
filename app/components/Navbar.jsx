"use client";
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useGSAP(() => {
        if (isOpen) {
            // Slide down using yPercent
            gsap.to(menuRef.current, {
                yPercent: 100,
                duration: 1,
                ease: "expo.inOut",
            });
            
            // Staggered reveal of nav links
            gsap.fromTo(".nav-link-item", 
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, delay: 0.3, ease: "power4.out", duration: 1 }
            );
        } else {
            // Slide back up
            gsap.to(menuRef.current, {
                yPercent: 0,
                duration: 0.8,
                ease: "expo.inOut",
            });
        }
    }, [isOpen]);

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 w-full z-[100] px-6 py-8 md:px-16 flex justify-between items-center bg-transparent">
                <div className="text-[#0a0a0a] font-semibold text-2xl tracking-tighter group cursor-pointer">
                    Bharath <span className="text-red-600">.</span>
                </div>

                <button 
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-3 group"
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest">Menu</span>
                    <div className="flex flex-col gap-1">
                        <span className="h-[1.5px] w-6 bg-black" />
                        <span className="h-[1.5px] w-4 bg-black ml-auto" />
                    </div>
                </button>
            </nav>

            {/* 50% WIDTH OVERLAY - Sliding from Top */}
            <div 
                ref={menuRef}
                className="fixed top-[-100%] right-0 w-full md:w-1/2 h-screen bg-[#0e0e0e] z-[120] flex flex-col shadow-2xl"
            >
                {/* Close Button Header */}
                <div className="flex justify-end p-8 md:p-12">
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                    >
                        <span className="text-[10px] uppercase tracking-widest font-bold">Close</span>
                        <div className="relative w-8 h-8 flex items-center justify-center border border-white/10 rounded-full group-hover:rotate-90 transition-transform duration-500">
                            <span className="absolute h-[1px] w-4 bg-white rotate-45" />
                            <span className="absolute h-[1px] w-4 bg-white -rotate-45" />
                        </div>
                    </button>
                </div>

                {/* Vertical Links */}
                <div className="flex-1 flex flex-col justify-center px-12 md:px-20">
                    {['Projects', 'Services', 'About', 'Contact'].map((item, index) => (
                        <div key={item} className="overflow-hidden mb-6">
                            <a 
                                href="#" 
                                onClick={() => setIsOpen(false)}
                                className="nav-link-item block group"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-red-600 font-mono text-xs">0{index + 1}</span>
                                    <h2 className="text-5xl md:text-6xl font-bold text-white transition-transform duration-500 group-hover:translate-x-4">
                                        {item}
                                    </h2>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Minimal Footer */}
                <div className="p-12 md:p-20 border-t border-white/5 flex justify-between items-center text-white/30 text-[10px] tracking-widest uppercase">
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-red-600 transition-colors">TW</a>
                        <a href="#" className="hover:text-red-600 transition-colors">BE</a>
                        <a href="#" className="hover:text-red-600 transition-colors">IN</a>
                    </div>
                    <span>© 2024</span>
                </div>
            </div>

            {/* Backdrop (Optional: clicks outside to close) */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[110]"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;