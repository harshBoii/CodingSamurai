import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scrolley = () => {
    const footerRef = useRef(null);
    const paragraphs = useRef([]);
    const dividers = useRef([]);

    useEffect(() => {
        const footer = footerRef.current;
        
        // Initial footer animation
        gsap.fromTo(footer, 
            { y: 100, opacity: 0 },
            { 
                y: 0, 
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                end:'400vh',
                scrollTrigger: {
                    trigger: footer,
                    start: "top bottom",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate each paragraph and divider sequentially
        paragraphs.current.forEach((p, index) => {
            gsap.fromTo(p,
                { 
                    opacity: 0.1,
                    scale: 0.5,
                    textShadow: "0 0 0px rgba(0, 0, 0, 0)"
                },
                {
                    opacity: 1,
                    scale: 1,
                    textShadow: "0 0 25px rgba(126, 100, 100, 0.9)",
                    ease: "none",
                    end:'400vh',
                    scrollTrigger: {
                        trigger: p,
                        start: "top bottom-=100",
                        end: "top center",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Animate dividers if they exist
            if (dividers.current[index]) {
                gsap.fromTo(dividers.current[index],
                    { 
                        scaleY: 0,
                        opacity: 0.2
                    },
                    {
                        scaleY: 1,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: p,
                            start: "top bottom-=100",
                            end: "top center",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <footer ref={footerRef} className="w-full bg-black text-white py-12">
            <div className="flex flex-col items-center justify-center space-y-12 h-[400vh]">
                <p ref={el => paragraphs.current[0] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Welcome to Coding Ninjas
                </p>
                <div ref={el => dividers.current[0] = el} className="h-32 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent transform origin-top"></div>
                
                <p ref={el => paragraphs.current[1] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                    Learn Programming
                </p>
                <div ref={el => dividers.current[1] = el} className="h-32 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent transform origin-top"></div>
                
                <p ref={el => paragraphs.current[2] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Master Your Skills
                </p>
                <div ref={el => dividers.current[2] = el} className="h-32 w-1 bg-gradient-to-b from-transparent via-green-500 to-transparent transform origin-top"></div>
                
                <p ref={el => paragraphs.current[3] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Build Projects
                </p>
                <div ref={el => dividers.current[3] = el} className="h-32 w-1 bg-gradient-to-b from-transparent via-yellow-500 to-transparent transform origin-top"></div>
                
                <p ref={el => paragraphs.current[4] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Join Community
                </p>
                <div ref={el => dividers.current[4] = el} className="h-32 w-1 bg-gradient-to-b from-transparent via-indigo-500 to-transparent transform origin-top"></div>
                
                <p ref={el => paragraphs.current[5] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Get Certified
                </p>
                <div ref={el => dividers.current[5] = el} className="h-32 w-1 bg-gradient-to-b from-transparent via-red-500 to-transparent transform origin-top"></div>
                
                <p ref={el => paragraphs.current[6] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    Start Your Journey
                </p>
                <div ref={el => dividers.current[6] = el} className="h-32 w-1 bg-gradient-to-b from-transparent via-cyan-500 to-transparent transform origin-top"></div>
                
                <p ref={el => paragraphs.current[7] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent">
                    Code Everyday
                </p>
                <div ref={el => dividers.current[7] = el} className="h-32 w-1 bg-gradient-to-b from-transparent via-emerald-500 to-transparent transform origin-top"></div>
                
                <p ref={el => paragraphs.current[8] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    Grow Together
                </p>
                <div ref={el => dividers.current[8] = el} className="h-32 w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent transform origin-top"></div>
                
                <p ref={el => paragraphs.current[9] = el} className="text-6xl font-extrabold tracking-wider transition-all duration-300 font-mono bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Be a Ninja
                </p>
            </div>
        </footer>
    );
};

export default Scrolley;