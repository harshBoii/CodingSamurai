'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import Card from './Cards';

export default function Certifications() {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  // GSAP Animations
useGSAP(() => {
   
    gsap.to(['.move-liine'], {
      height: "100vh", 
      opacity:0,
      ease:'none',
      scrollTrigger: {
        scroller:window,
        trigger: '.parent-Saahib',
        start: "top 6.7%", 
        end: "=100vh",   
        scrub: 10,
        pin:true  
          
              
      }
    });
  }, [])

    useGSAP(() => {
   
    gsap.to(['.parent-Saahib'], {
      height: "100vh", 
      opacity:0,
      ease:'none',
      scrollTrigger: {
        scroller:window,
        trigger: '.parent-Saahib',
        start: "top top", 
        end: "=100vh",   
        scrub: 10,
        pin:true  
          
              
      }
    });
  }, [])


  return (
    <>
    <div className='flex flex-row'>
    <div className="min-h-screen py-16 px-8 bg-[#111] bg-[url('/textures/parchment.png')] bg-blend-overlay ">
      <h1
        ref={titleRef}
        className="mx-auto mb-12 w-max text-5xl font-['Sawarabi_Gothic'] text-white tracking-wider
                   border-b-4 border-red-700 pb-2 drop-shadow-lg ml-[42%]"
      >
        IIT Certifications
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-12 ">
        {/* Graduates Section */}
        <section>
          <h2 className="mb-6 text-3xl font-bold font-['Sawarabi_Gothic'] text-red-600 tracking-tight ">
            For Graduates
          </h2>
            <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-5 w-[100vw]">
                <Card
                title="Modern Web Design"
                description="Professional website development with responsive layouts and modern features."
                imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36"
                className="pl-20"
                />
                <Card
                title="UI/UX Solutions"
                description="User-centered design approaches for optimal digital experiences."
                imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                className="pl-20"
                />

        </div>          
        </section>

        {/* Non-Graduates Section */}
        <section>
          <h2 className="mb-6 text-3xl font-bold font-['Sawarabi_Gothic'] text-red-600 tracking-tight">
            For Non-Graduates
          </h2>
            <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-5 w-[100vw]">
                
                <Card
                title="UI/UX Solutions"
                description="User-centered design approaches for optimal digital experiences."
                imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                className="pl-20"
                />
                <Card
                title="Cloud Integration"
                description="Seamless cloud services implementation and management."
                imageUrl="https://images.unsplash.com/photo-1502920514313-52581002a659"
                />
        </div>          
        </section>
      </div>
    </div>
    <div className=' bg-[#111] bg-blend-overlay  w-full'>
    <div className='w-full h-ft parent-Saahib'>

            <div
                className="move-liine w-0.5 bg-white relative left-41 h-0 "
            />
            <div className=" text-xl rotate-180">
            <p className="text-white text-9xl "><svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 32 32" id="kunai">
  <path fill="#7dbdff" d="m17.393 16.021 2.829-2.829a1 1 0 0 0-1.414-1.414l-2.829 2.829a1 1 0 0 0 1.414 1.414Z"></path>
  <path fill="#6685a6" d="m14.565 13.192-7.984 7.985a.999.999 0 1 0 1.414 1.414l7.984-7.984a1 1 0 0 0-1.414-1.415zm-3.742 12.227 7.985-7.984a1 1 0 0 0-1.415-1.414l-7.984 7.984a1 1 0 0 0 1.414 1.414z"></path>
  <path fill="#feb450" d="M28.936 4.351a1 1 0 0 0-1.287-1.287L16.335 7.306a1.002 1.002 0 0 0-.619.694l-1.414 5.657c-.085.341.015.701.263.95l2.828 2.828c.249.248.609.348.95.263L24 16.284c.319-.08.578-.311.694-.619l4.242-11.314Zm-2.645 1.358-3.286 8.762-4.598 1.149-2.027-2.027 1.149-4.598 8.762-3.286Z"></path>
  <path fill="#7dbdff" d="M9.95 22.05a4.002 4.002 0 0 0-5.657 0 4.002 4.002 0 0 0 0 5.657 4.002 4.002 0 0 0 5.657 0 4.002 4.002 0 0 0 0-5.657Zm-1.414 1.414c.78.781.78 2.048 0 2.829-.781.78-2.048.78-2.829 0a2.003 2.003 0 0 1 0-2.829 2.003 2.003 0 0 1 2.829 0Z"></path>
</svg></p>
            </div>

    </div>
    </div>
    </div>
    </>
  );
}
