// // import React from "react";
// // import machinary from "/assets/machinery.png";
// import partners from "/assets/partners.png";
// // import sweingWorkers from "/assets/sweingWorkers.png";
// import highProduction from "/assets/highProduction.png";
// import quality from "/assets/QualityImg.png";
// import Delivery from "/assets/DeliveryImg.jpg";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import img1 from "../assets/machine1.png";
// import img2 from "../assets/machine2.png";
// import img3 from "../assets/machine3.png";


// import image1 from "../assets/workforce1.png";
// import image2 from "../assets/workforce2.png";
// import image3 from "../assets/workforce3.png";

// const WhyFromUs = () => {

//   const images = [img1, img2, img3];

//   const image = [image1, image2, image3];

//    const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [images.length]);
  
//   return (
//     <>
//       <main
//         id="quality"
//         className="py-4 mx-4 mt-2 space-y-4 border-t border-slate-300"
//       >
//         <section className="pt-4 ">
//           <h2 className="  text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] ">
//             Why you should
//             <br />
//             buy from us
//           </h2>
//         </section>

//         <motion.section 
          
          
//         >
//           <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:pt-8 lg:pb-16">
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//                   <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
//                     {images.map((image, index) => (
//                       <img
//                         key={index}
//                         alt=""
//                         src={image}
//                         className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
//                           index === currentIndex ? 'opacity-100' : 'opacity-0'
//                         }`}
//                       />
//                     ))}
//                   </div>

//               <div className="lg:py-24">
//                 <h2 className="text-xl font-bold md:text-3xl">
//                   {" "}
//                   Branded Machineries
//                 </h2>

//                 <p className="mt-4 text-lg font-semibold text-gray-600 md:text-xl">
//                   We proudly incorporate over 250 brand new imported machines,
//                   each selected for their cutting-edge technology and
//                   exceptional performance.
//                 </p>

//                 {/* <a
//           href="#"
//           className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
//         >
          
//         </a> */}
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         <motion.section
          
//         >
//           <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//               <div className="lg:py-24">
//                 <h2 className="text-xl font-bold sm:text-4xl">
//                   {" "}
//                   Skilled work force
//                 </h2>

//                 <p className="mt-4 text-lg font-semibold text-gray-600 md:text-xl">
//                   Our operations are powered by a performance-driven workforce
//                   of 300 highly skilled employees. Each team member brings a
//                   wealth of expertise and dedication, ensuring that we
//                   consistently deliver high-quality results.
//                 </p>

//                 {/* <a
//           href="#"
//           className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
//         >
//           Get Started Today
//         </a> */}
//               </div>

//                   <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
//                     {image.map((img, index) => (
//                       <img
//                         key={index}
//                         alt=""
//                         src={img}
//                         className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ${
//                           index === currentIndex ? 'opacity-100' : 'opacity-0'
//                         }`}
//                       />
//                     ))}

//                     {/* Dot Navigation */}
//                     {/* <div className="absolute z-10 flex gap-3 -translate-x-1/2 bottom-6 left-1/2">
//                       {image.map((_, index) => (
//                         <button
//                           key={index}
//                           onClick={() => setCurrentIndex(index)}
//                           className={`transition-all duration-300 rounded-full ${
//                             index === currentIndex
//                               ? 'w-8 h-3 bg-purple-500'
//                               : 'w-3 h-3 bg-white/50 hover:bg-white/80'
//                           }`}
//                         />
//                       ))}
//                     </div> */}
//                   </div>
//             </div>
//           </div>
//         </motion.section>

//         <motion.section
          
//         >
//           <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//               <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
//                 <img
//                   alt=""
//                   src={highProduction}
//                   className="absolute inset-0 object-cover w-full h-full"
//                 />
//               </div>

//               <div className="lg:py-24">
//                 <h2 className="text-xl font-bold sm:text-4xl">
//                   {" "}
//                   High Production Capacity
//                 </h2>

//                 <p className="mt-4 text-lg font-semibold text-gray-600 md:text-xl">
//                   We excel in delivering a diverse range of stitching styles,
//                   enabling us to manufacture up to 2,000 pieces per day. Our
//                   high production capacity is supported by state-of-the-art
//                   machinery and a streamlined workflow, allowing us to meet
//                   varying demands efficiently.
//                 </p>

//                 {/* <a
//           href="#"
//           className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
//         >
//           Get Started Today
//         </a> */}
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         <motion.section
          
//         >
//           <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-12">
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//               <div className="lg:py-24">
//                 <h2 className="text-xl font-bold sm:text-4xl">
//                   {" "}
//                   Qualified ancillary Partners
//                 </h2>

//                 <p className="mt-4 text-lg font-semibold text-gray-600 md:text-xl">
//                   We have established strategic partnerships with
//                   high-productivity ancillary units, including modern weaving,
//                   dyeing, washing, and printing plants.
//                 </p>

//                 {/* <a
//           href="#"
//           className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
//         >
//           Get Started Today
//         </a> */}
//               </div>

//               <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
//                 <img
//                   alt=""
//                   src={partners}
//                   className="absolute inset-0 object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         <motion.section
         
//         >
//           <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//               <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
//                 <img
//                   alt=""
//                   src={quality}
//                   className="absolute inset-0 object-cover w-full h-full"
//                 />
//               </div>

//               <div className="lg:py-24">
//                 <h2 className="text-xl font-bold sm:text-4xl">
//                   Quality is our precedence
//                 </h2>

//                 <p className="mt-4 text-lg font-semibold text-gray-600 md:text-xl">
//                   Ever since our commencement, quality has been the primary
//                   attribute driving us towards excellence in design and
//                   manufacturing of top class garments.
//                 </p>

//                 {/* <a
//           href="#"
//           className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
//         >
//           Get Started Today
//         </a> */}
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         <motion.section
        
//         >
//           <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-12">
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//               <div className="lg:py-24">
//                 <h2 className="text-xl font-bold sm:text-4xl">
//                   On-time delivery
//                 </h2>

//                 <p className="mt-4 text-lg font-semibold text-gray-600 md:text-xl">
//                   We adhere to a well designed protocol and adopt stringent
//                   measures to ensure superior quality of products fabricated by
//                   us in conjunction with customer delight and on-time delivery
//                   of products.
//                 </p>

//                 {/* <a
//           href="#"
//           className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
//         >
//           Get Started Today
//         </a> */}
//               </div>

//               <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
//                 <img
//                   alt=""
//                   src={Delivery}
//                   className="absolute inset-0 object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* <section className='w-full pt-8 space-y-8'> */}
//         {/* <div className='flex items-start justify-center w-full gap-4'>
//         <div className='w-1/2'>
//             <img src={machinary} alt="" className='rounded-3xl w-full max-h-[300px] object-cover' />
//         </div>
//         <div className='w-1/2 space-y-2'>
//             <h1 className='text-3xl font-semibold text-right'>
//             Branded Machineries
//             </h1>
//             <p className='text-xl font-semibold text-right '>
//             Incorporated over 250 brand
//             <br />
//              new imported machines.
//             </p>
//         </div>
//     </div> */}

//         {/* <div className='flex items-start justify-center w-full gap-4'>
      
//         <div className='w-1/2 space-y-2'>
//             <h1 className='text-3xl font-semibold text-left'>
//             Skilled work force
//             </h1>
//             <p className='text-xl font-semibold text-left '>
//             Powered by performance driven work force of 300 skilled employees.
//             </p>
//         </div>

//         <div className='w-1/2'>
//             <img src={sweingWorkers} alt="" className='rounded-3xl w-full max-h-[300px] object-cover' />
//         </div>
//     </div> */}

//         {/* <div className='flex items-start justify-center w-full gap-4'>
//         <div className='w-1/2 '>
//             <img src={highProduction} alt="" className='rounded-3xl w-full max-h-[300px] object-cover' />
//         </div>
//         <div className='w-1/2 space-y-2'>
//             <h1 className='text-3xl font-semibold text-right'>
//             High Production Capacity
//             </h1>
//             <p className='text-xl font-semibold text-right '>
//             We accomplish all styles of stitches,<br /> manufacturing 2000 pieces per day
//             </p>
//         </div>
//     </div> */}

//         {/* <div className='flex items-start justify-center w-full gap-4'>
      
//       <div className='w-1/2 space-y-2'>
//           <h1 className='text-3xl font-semibold text-left'>
//           Qualified ancillary Partners
//           </h1>
//           <p className='text-xl font-semibold text-left '>
//           Tie-up with high productivity ancillary units like <br /> Modern Weaving, Dying, Washing & Printing plants
//           </p>
//       </div>

//       <div className='w-1/2'>
//           <img src={partners} alt="" className='rounded-3xl w-full max-h-[300px] object-cover' />
//       </div>
//   </div> */}

//         {/* </section> */}
//       </main>
//     </>
//   );
// };

// export default WhyFromUs;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Asset Imports
// import img1 from "../assets/machine1.png";
// import img2 from "../assets/machine2.png";
// import img3 from "../assets/machine3.png";
// import image1 from "../assets/workforce1.png";
// import image2 from "../assets/workforce2.png";
// import image3 from "../assets/workforce3.png";
// import productionImage from "../assets/workforce1.png";
// import Delivery from "../assets/Delivery.png";
// import Quality from "../assets/quailty.png";

const WhyFromUs = () => {
//   const machineryImages = [img1, img2, img3];
//   const workforceImages = [image1, image2, image3];
  
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % machineryImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [machineryImages.length]);

  // Reusable Image Slider Component for clean code
  const ImageSlider = ({ images, index }) => (
    <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl bg-slate-200">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 object-cover w-full h-full"
          alt="Factory facility"
        />
      </AnimatePresence>
      {/* Subtle overlay for professional look */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
    </div>
  );

  return (
    <main id="quality" className="px-6 py-16 bg-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <header className="pl-6 mb-16 border-l-4 border-orange-600">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl text-slate-900">
            Why People are <br />
            <span className="text-orange-600 ">Choose Us For Travelling ...</span>
          </h2>
          <p className="max-w-xl mt-4 text-lg text-slate-500">
            We combine high-capacity infrastructure with a legacy of technical excellence.
          </p>
        </header>

        <div className="space-y-16">
          
          {/* Section 1: Machineries */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-2">
              <img src="https://images.pexels.com/photos/31627609/pexels-photo-31627609/free-photo-of-businessman-driving-car-on-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
" alt="High Production Capacity" className="object-cover w-full h-[300px] md:h-[450px] rounded-xl" />
            </div>
            
            <div className="order-1 space-y-6 lg:order-1">
              <div className="inline-block px-4 py-1 text-sm font-bold tracking-widest text-orange-700 uppercase bg-orange-100 rounded-full">
                Experience Driver
              </div>
              <h3 className="text-2xl font-bold md:text-4xl text-slate-800">
                Mastery Behind the Machine
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                Our facility is powered by a team of elite operators with decades of collective experience. While our technology is world-class, it’s the human intuition and expert handling of our drivers that ensure every project meets our rigorous quality benchmarks.
              </p>
              <ul className="grid grid-cols-2 gap-4 pt-4 font-medium text-slate-700">
                <li className="flex items-center gap-2">✓ Expert Oversight</li>
                <li className="flex items-center gap-2">✓ Precision Handling</li>
                <li className="flex items-center gap-2">✓ Safety First</li>
                <li className="flex items-center gap-2">✓ Veteran Operators</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 2: Workforce */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-1">
 <img src="https://images.pexels.com/photos/31627609/pexels-photo-31627609/free-photo-of-businessman-driving-car-on-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
" alt="High Production Capacity" className="object-cover w-full h-[300px] md:h-[450px] rounded-xl" />            </div>
            
            <div className="order-1 space-y-6 lg:order-2">
              <div className="inline-block px-4 py-1 text-sm font-bold tracking-widest text-blue-700 uppercase bg-blue-100 rounded-full">
                Nest and Clean Vehicles
              </div>
              <h3 className="text-2xl font-bold md:text-4xl text-slate-800">
                Pristine Fleet Maintenance
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                We take immense pride in our presentation. Every vehicle in our fleet undergoes rigorous daily detailing and sanitization to ensure a spotless, professional environment for every journey.
              </p>
              <ul className="grid grid-cols-2 gap-4 pt-4 font-medium text-slate-700">
                <li className="flex items-center gap-2">✓ Showroom Condition</li>
                <li className="flex items-center gap-2">✓ Sanitized Interiors</li>
                <li className="flex items-center gap-2">✓ Daily Inspections</li>
                <li className="flex items-center gap-2">✓ Odor-Free Cabins</li>
              </ul>
            </div>
          </motion.section>
          
          {/* Section 3: High Production (Reused) */}
           <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-2">
              <img src="https://images.pexels.com/photos/31627609/pexels-photo-31627609/free-photo-of-businessman-driving-car-on-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
" alt="High Production Capacity" className="object-cover w-full h-[300px] md:h-[450px] rounded-xl" />
            </div>
            
            <div className="order-1 space-y-6 lg:order-1">
              <div className="inline-block px-4 py-1 text-sm font-bold tracking-widest text-orange-700 uppercase bg-orange-100 rounded-full">
                Many Categories of Vehicles
              </div>
              <h3 className="text-2xl font-bold md:text-4xl text-slate-800">
                Comprehensive Fleet Diversity
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
From agile compacts to heavy-duty transporters, our extensive range covers every logistical need. We maintain a versatile fleet categorized to provide the perfect match for your specific requirements.              </p>
              <ul className="grid grid-cols-2 gap-4 pt-4 font-medium text-slate-700">
                <li className="flex items-center gap-2">✓ Multi-Purpose Units</li>
                <li className="flex items-center gap-2">✓ Tailored Selections</li>
                <li className="flex items-center gap-2">✓ Scalable Options</li>
                <li className="flex items-center gap-2">✓ All-Terrain Capability</li>
              </ul>
            </div>
          </motion.section>
          
          {/* Section 4: Quality Assurance */}
           <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-1">
               <img src="https://images.pexels.com/photos/31627609/pexels-photo-31627609/free-photo-of-businessman-driving-car-on-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
+" alt="High Production Capacity" className="object-cover w-full h-[300px] md:h-[450px] rounded-xl" />
            </div>
            
            <div className="order-1 space-y-6 lg:order-2">
              <div className="inline-block px-4 py-1 text-sm font-bold tracking-widest text-blue-700 uppercase bg-blue-100 rounded-full">
                On Time Pickup
              </div>
              <h3 className="text-2xl font-bold md:text-4xl text-slate-800">
Punctual Arrival Guarantee              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                Time is your most valuable asset. Our logistics network is synchronized to ensure that every pickup happens exactly when scheduled, eliminating wait times and keeping your schedule on track.
              </p>
              <ul className="grid grid-cols-2 gap-4 pt-4 font-medium text-slate-700">
                <li className="flex items-center gap-2">✓ Precision Timing</li>
                <li className="flex items-center gap-2">✓ Real-Time Tracking</li>
                <li className="flex items-center gap-2">✓ Zero Latency</li>
                <li className="flex items-center gap-2">✓ </li>
              </ul>
            </div>
          </motion.section>


            {/* <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-2">
              <img src="https://images.pexels.com/photos/31627609/pexels-photo-31627609/free-photo-of-businessman-driving-car-on-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
+" alt="High Production Capacity" className="object-cover w-full h-[300px] md:h-[450px] rounded-xl" />
            </div>
            
            <div className="order-1 space-y-6 lg:order-1">
              <div className="inline-block px-4 py-1 text-sm font-bold tracking-widest text-orange-700 uppercase bg-orange-100 rounded-full">
                Safe Journey
              </div>
              <h3 className="text-2xl font-bold md:text-4xl text-slate-800">
                On-time delivery
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                We adhere to a well designed protocol and adopt stringent measures to ensure superior quality of products fabricated by us in conjunction with customer delight and on-time delivery of products.
              </p>
              <ul className="grid grid-cols-2 gap-4 pt-4 font-medium text-slate-700">
                <li className="flex items-center gap-2">✓ Global Standards</li>
                <li className="flex items-center gap-2">✓ Zero Downtime</li>
                <li className="flex items-center gap-2">✓ Smart Automation</li>
                <li className="flex items-center gap-2">✓ High Precision</li>
              </ul>
            </div>
          </motion.section> */}
        </div>
      </div>
    </main>
  );
};

export default WhyFromUs;