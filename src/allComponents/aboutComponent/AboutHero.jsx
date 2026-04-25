// import React from 'react'
// const About = () => {
//     return (
//         <>
//         <main id='about' className='py-4 mx-4 mt-2 space-y-4 border-t border-slate-300'>
//                <section className='flex items-center justify-between w-full pt-4'>
            
//             <h2
//               className="  text-left text-balance text-3xl md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] ">
//         About Us
//             </h2>
//             </section>

//             <section className='w-full overflow-x-hidden overflow-y-hidden '>
//                 <div className='w-full  bg-cover bg-right  rounded-3xl min-h-[400px] relative'> 
//                 <div className='absolute inset-0 bg-black opacity-30 rounded-3xl'></div>
//                     <div className='px-10 py-10 space-y-4 relative md:left-[40%] top-7 rounded-3xl overflow-x-hidden'>

//                      <h2 className='text-xl font-semibold md:text-4xl text-slate-50'>
//                     Yaanee Fashion
//                     </h2> 
//                     {/* <img src={yaaneelogo} alt="" className='w-32 h-20' /> */}
//                     <h5 className='max-w-2xl text-base font-medium text-justify md:text-lg text-slate-100'>
//                     Yaanee Fashions is one of the most popular manufacturer and exporters of wide range of fashion garments for international brands. We witnessed our inception with the vision to redefine fashion trends and to set unparallel attributes in the fashion industry for companies to benchmark our standards.
//                     </h5>
//                     <h5 className='max-w-2xl text-base font-medium text-justify md:text-lg text-slate-100'>
//                     Offering an array of options to the clients, we bring you garments in exceptional colours, patterns, sizes & designs.
//                     </h5>
//                     </div>
                    
//                 </div>

//             </section>


//         </main>
//             <AboutFeatures />
//         </>
//   )
// }

// export default About




// const AboutFeatures = () => {
//     const aboutFeatures = [
//         {
//             name: 'Readymade Shirts',
//             desc: 'Stylish shirts available for men and kids.Premium fabrics, soft and durable stitching.Multiple sizes available ',
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><path d="M200,40H179.31L165.66,26.34h0A8,8,0,0,0,160,24H96a8,8,0,0,0-5.66,2.34h0L76.69,40H56A16,16,0,0,0,40,56V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM128,65.58,111,40h34.1Zm33.24-21L168,51.31V104L138.57,78.56ZM88,51.31l6.76-6.75,22.67,34L88,104ZM56,56H72v48a15.85,15.85,0,0,0,9.21,14.49A16.1,16.1,0,0,0,88,120a15.89,15.89,0,0,0,10.2-3.73.52.52,0,0,0,.11-.1L120,97.48V208H56ZM200,208H136V97.48l21.65,18.7a.52.52,0,0,0,.11.1A15.89,15.89,0,0,0,168,120a16.1,16.1,0,0,0,6.83-1.54A15.85,15.85,0,0,0,184,104V56h16Z"></path></svg>),
//         },
//         {
//             name: 'Boxer & Bermuda',
//             desc: 'Comfortable everyday wear with breathable fabric.Perfect blend of comfort and style for men and kids.',
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><path d="M223.88,214l-22-176A16,16,0,0,0,186,24H70A16,16,0,0,0,54.12,38l-22,176A16,16,0,0,0,48,232H88.69a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232H208a16,16,0,0,0,15.88-18ZM192.9,95.2A32.13,32.13,0,0,1,169,72h21ZM186,40l2,16H68l2-16ZM66,72H87A32.13,32.13,0,0,1,63.1,95.2ZM88.69,216H48L61,111.73A48.08,48.08,0,0,0,103.32,72H120V95Zm78.6-.06L136,95V72h16.68A48.08,48.08,0,0,0,195,111.73L208,216Z"></path></svg>
//             ),
//         },
//         {
//             name: 'Denim Shirts',
//             desc: 'Denim shirts offer a timeless blend of style and comfort. Perfect for both casual outings and everyday wear.',
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"  fill="currentColor" viewBox="0 0 256 256"><path d="M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112ZM184,208H72V48h16.8a40,40,0,0,0,78.38,0H184Zm36.75-96.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z"></path></svg>
            
//             ),
//         }
//     ];

//     return (
// <div className="grid w-full h-full gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
//   {aboutFeatures?.map((card, index) => (
//     <div
//       key={index}
//       className="p-4 space-y-4 text-center transition rounded-lg hover:shadow-lg"
//     >
//       {/* Icon */}
//       <span className="inline-block p-4 text-white bg-black rounded-full">
//         {card.icon}
//       </span>

//       {/* Title */}
//       <h2 className="text-xl font-semibold md:text-2xl">{card.name}</h2>

//       {/* Description */}
//       <p className="text-sm text-gray-700 md:text-base">{card.desc}</p>
//     </div>
//   ))}
// </div>

//     );
// };


  

import React from "react";
// import yaaneelogo from "../../public/assets/Yaaneefulllogo.png";
import About from '../../assets/logo.png'


const AboutUs = () => {
  return (
    <section className="bg-slate-100 py-[100px] px-5 font-['Segoe_UI',Roboto,sans-serif]">
      <div className="max-w-[1100px] mx-auto flex flex-wrap items-center gap-[60px]">
        
        {/* Left Side: Visual */}
        <div className="relative flex-1 min-w-[350px]">
          <img
            src={About}
            alt="Factory Interior"
            className="w-full h-[520px] object-cover rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]"
          />

          <div className="absolute -bottom-[30px] -right-[10px] bg-[#4ea4da] text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-[2.5rem] leading-none font-bold">24+</h3>
            <p className="mt-1 text-xs font-semibold uppercase">
              Years Experience
            </p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 min-w-[350px]">
          <span className="inline-block text-[#4ea4da] font-bold uppercase tracking-widest text-sm mb-4">
            Since 2008
          </span>

          <h2 className="  text-3xl md:text-[2.8rem] leading-tight text-[#0a2540] mb-6 font-bold">
            Our Mission Manufacturing
          </h2>

          <p className="text-[1.1rem] text-slate-600 mb-8">
           Welcome to SVK Holidays, your premier partner in world-class travel experiences. We specialize in crafting seamless, memorable journeys that cater to your unique desires. Whether you are looking for a quiet getaway or a grand family adventure, our team is dedicated to providing excellence in every mile. With a commitment to safety, comfort, and personalized service, we handle the details so you can focus on making memories. At SVK Holidays, we don't just book trips—we curate life-changing experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="border-l-4 border-[#4ea4da] pl-4">
              <h4 className="text-[#0a2540] text-lg font-semibold">
                Certified Quality
              </h4>
              <p className="mt-1 text-sm text-slate-600">
                ISO 9001:2015 compliant processes.
              </p>
            </div>

            <div className="border-l-4 border-[#4ea4da] pl-4">
              <h4 className="text-[#0a2540] text-lg font-semibold">
                Eco-Friendly
              </h4>
              <p className="mt-1 text-sm text-slate-600">
                30% reduction in carbon footprint.
              </p>
            </div>
          </div>
        </div>

      </div>
      {/* <img src={About} alt="" /> */}
    </section>
  );
};

export default AboutUs;