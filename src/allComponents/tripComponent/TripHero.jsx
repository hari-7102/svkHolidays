import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const destination = () => {
  const navigate = useNavigate();

  


  
  return (
    <div className="md:px-16 px-7 md:py-10 py-5 ">
      <p className="text-5xl w-full  md:text-7xl font-serif">
        Explore the Popular Destination
      </p>
      <p className="text-4xl  md:text-6xl mt-2 font-serif  ">
        With <span className="text-blue-600">SVK Travels</span>
      </p>

      {/* <p className='text-6xl font-semibold mt-6'>Italy Tourism</p> */}

      <div className="flex flex-col items-center justify-center">
        <motion.div
              initial={{opacity:0 , y:30}}
              animate={{opacity: 1 , y:1}}
              transition={{duration:0.4 }}
              
          onClick={() => navigate("/trip/chennai")} 
          className=' md:my-24 my-5  bg-[url("https://images.pexels.com/photos/5124396/pexels-photo-5124396.jpeg")] md:w-4/5 w-full  h-[31rem] bg-cover relative rounded-2xl '
        >
          <p className='bg-[url("https://images.pexels.com/photos/14520365/pexels-photo-14520365.jpeg?auto=compress&cs=tinysrgb&w=600")] md:flex hidden bg-cover w-80 h-64 rounded-xl absolute -bottom-24 -right-24  '></p>
          <div className="flex items-center gap-2 absolute p-4  ">
            <MapPin size={26} />
            <p className="text-2xl text-black">Chennai</p>
          </div>
        </motion.div>
        <motion.div

              initial={{opacity:0 , y:30}}
              whileInView={{opacity: 1 , y:1}}
              transition={{duration:0.5 ,}}
              viewport={{once: true , amount:0.5}}

          onClick={() => navigate("/trip/bangalore")}
          className='bg-[url("https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock601341215huge-1675509836757.jpg")] bg-cover h-[31rem] items-center w-full md:w-4/5 md:my-24 my-5 relative rounded-2xl '
        >
          <p className=' bg-[url("https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/1522535639-1675509976639.jpg")] md:flex hidden bg-cover w-80 h-64 rounded-xl absolute -bottom-24 -right-24'></p>
          <div className="flex items-center gap-2 absolute p-4  ">
            <MapPin size={26} />
            <p className="text-2xl text-black">Bangalore</p>
          </div>
          {/* <p className='bg-[url("https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/1522535639-1675509976639.jpg")]  bg-cover w-full col-span-1  rounded-2xl   '></p>
            <p className='bg-[url("https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock785268670huge-1675509901512.jpg")]  bg-cover   h-64 w-full col-span-1  rounded-2xl   '></p>
            <p className='bg-amber-600  w-full col-span-1  rounded-2xl   '></p>
            <p className='bg-amber-600  w-full col-span-2 row-span-2  rounded-2xl   '></p>
            <p className='bg-amber-600  w-full col-span-1  rounded-2xl   '></p> */}
          {/* <p className='bg-amber-600  w-full col-span-1  rounded-2xl   '></p> */}
        </motion.div>

        {/* <p className='flex text-xl max-w-3xl text-gray-600 mx-36 mt-8 items-start'>Get the best Value fro Your trips with exclusive discounts, seasonal promotions and deals to save whole exploring the World</p> */}

        <motion.div 
              initial={{opacity:0 , y:30}}
              whileInView={{opacity: 1 , y:1}}
              transition={{duration:0.5 ,}}
              viewport={{once: true , amount:0.5}}
          onClick={() => navigate("/trip/hyderabad")}
          className=' md:my-24 my-5  bg-[url("https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_rome_destination_main_1_l_667_1000.jpg")] md:w-4/5 w-full  h-[31rem] bg-cover relative rounded-2xl '
        >
          <p className='bg-[url("https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_Florence_destination_landscape_1_l_538_717.jpg")] md:flex hidden bg-cover w-80 h-64 rounded-xl absolute -bottom-24 -right-24  '></p>
          <div className="flex items-center gap-2 absolute p-4  ">
            <MapPin size={26} />
            <p className="text-2xl text-black">Hyderabad</p>
          </div>
        </motion.div>

        <motion.div   
                initial={{opacity:0 , y:30}}
              whileInView={{opacity: 1 , y:1}}
              transition={{duration:0.5 ,}}
              viewport={{once: true , amount:0.5}}
          onClick={() => navigate("/trip/Kanyakumari")}
          className=' md:my-24 my-5 bg-[url("https://images.pexels.com/photos/28518047/pexels-photo-28518047/free-photo-of-majestic-prambanan-temple-complex-in-java.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] md:w-4/5 w-full h-[31rem] bg-cover relative rounded-2xl '
        >
          <p className='bg-[url("https://images.pexels.com/photos/2278543/pexels-photo-2278543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]  bg-cover w-80 h-64 rounded-xl absolute -bottom-24 -right-24  md:flex hidden'></p>
          <div className="flex items-center gap-2 absolute p-4  ">
            <MapPin size={26} className="text-white" />
            <p className="text-2xl text-white">Kanyakumari</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default destination;