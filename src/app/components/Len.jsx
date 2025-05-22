import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import 'react' 
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import Card from './Cards.jsx'
import Butt from "./Button.jsx";
import ThreeModel from './ThreeModel.jsx';
import Link from "next/link";


//Setup Lenis

export default function Len(){
const containerRef = useRef(null)
const lineRef = useRef(null)

gsap.registerPlugin(ScrollTrigger) 

useEffect(()=>{
    
    const lenis = new Lenis({
    autoRaf: true,
    syncTouch:true,

});

    lenis.on('scroll', (e) => {
    console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf)
})
//Lenis Setup Done

//GoingToUseGSAP

useGSAP(()=>{
gsap.to('.animate-item', {
      rotation: 1080,
      scale: 0,
      opacity:0,
      duration:30,
      ease:"power1.inOut",
      scrollTrigger: {
        scroller: window, 
        trigger:   '.animate-item',    
        start:     'top top',       
        end:       'bottom 60%',          
        scrub:     true,              
      },
    })
,[]})

//Another GSAP For Line Animation

useGSAP(() => {
   
    gsap.to(['.move-line'], {
      height: "115vh", 
      opacity:0,
      ease:'none',
      scrollTrigger: {
        scroller:window,
        trigger: '.parent-Saahab',
        start: "top 6.7%", 
        end: "=100vh",   
        scrub: 10,
        pin:true  
          
              
      }
    });
  }, [])

  useGSAP(() => {
   
    gsap.to(['.parent-Saahab'], {
      height: "100vh", 
      opacity:0,
      ease:'none',
      scrollTrigger: {
        scroller:window,
        trigger: '.parent-Saahab',
        start: "top top", 
        end: "=100vh",   
        scrub: 10,
        pin:true  
          
              
      }
    });
  }, [])


  useGSAP(() => {
   
    gsap.fromTo('.nin', 
     {
      rotation:0
     },
      {
        rotation: 45,
        opacity: 0,
        duration:1,
        visibility:0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: '.nin',
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play pause reverse pause"
        }
      });
  }, [])





return <div className="w-full h-[250vh] bg-zinc-100">
    <section ref={containerRef} className=" pt-[7vh]  w-full h-[300vh] bg-[url('https://pplx-res.cloudinary.com/image/upload/v1747750582/gpt4o_images/u10hwtrxih2jpg1v5bj9.png')]  overflow-hidden">
      <div
    className="
      animate-item
      h-screen
      flex
      items-center
      justify-center
      px-4
      text-center
      overflow-hidden

    "
  >
    <div className="z-30">
    <h1 className="text-6xl md:text-9xl font-bold leading-tight text-zinc-400">

      WelCome To 
      <div className="text-red-400">
      Samurai <span className="Coding text-emerald-600">Coding</span> School
      <div className="nin absolute inset-0 z-50 pl-140 pt-90">
        <ThreeModel />
      </div>

      </div>
    </h1>
  </div>
  </div>

  {/* Panel 2 */}
  <div className="z-0 bg-zinc-50 flex flex-row" >
        <div className="h-[115vh] relative overflow-none  left-0 parent-Saahab w-[20vw]">
            <div
                ref={lineRef}
                className="move-line w-0.5 bg-black relative left-10 h-0 "
            />
            <div className="ninja relative left-[2.1vh] w-20 h-32 z-10 flex overflow-none text-7xl rotate-180">
            <p className="text-white text-9xl">🥷</p>
            </div>
        </div>

        <div className="flex flex-col gap-10 pl-4">
            <div className="text-9xl text-zinc-200 font-semibold from-stone-800 p-10 pt-32 w-fit font-sans">OUR OFFERINGS</div>
            <div className="p-2 w-full l-0 text-5xl font-light text-zinc-600 font-mono">Job Bootcamp</div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-[70vw]">

                <Link href="/cards/ModernWebDev" className="block hover:cursor-pointer">
                    <Card
                      title="Modern Web Design"
                      description="Professional website development with responsive layouts and modern features."
                      imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36"
                      className="pl-20"
                    />
                </Link>

                <Link href="/cards/UI" className="block hover:cursor-pointer">
      
                            <Card
                            title="UI/UX Solutions"
                            description="User-centered design approaches for optimal digital experiences."
                            imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                            className="pl-20"
                            />
                </Link>


                <Link href="/cards/CloudIntegration" className="block hover:cursor-pointer">
                

                          <Card
                          title="Cloud Integration"
                          description="Seamless cloud services implementation and management."
                          imageUrl="https://images.unsplash.com/photo-1502920514313-52581002a659"
                          />

              </Link>


                
                
        </div>          

            <div className=" p-2 w-[70vw] text-3xl font-extralight" style={{ fontFamily: 'Italiana' }}>
                 
                    We don't just teach code—we engineer career velocity. Enroll here to transform lines of logic into lines of offer letters.
        
        </div>
        <div className="pl-100 z-0 relative">
         <Butt/>
        </div>




    </div>
  </div>


</section>
</div>
}