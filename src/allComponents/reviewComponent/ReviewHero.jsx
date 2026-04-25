import React from "react";
import { motion } from "framer-motion";
const Review = () => {
  const review = [
    {
      no: 1,
      img: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
      re_name: "Hariharan",
      job: "Bhavani , Erode",
      dec: "SVK Holidays made our family trip to Kodaikanal absolutely seamless. The luxury suite they booked for us had the best valley views. Highly recommend!",
    },
    {
      no: 1,
      img: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
      re_name: "Sangeetha",
      job: "Thanjavur",
      dec: "We booked our honeymoon package through SVK Holidays. From the airport pickup to the surprise candle-light dinner, everything was perfect. Truly a luxury journey!",
    },
    {
      no: 1,
      img: "https://cdn-icons-png.flaticon.com/128/6997/6997674.png",
      re_name: "Vignesh",
      job: "Chennai",
      dec: "SVK Holidays redefined professionalism for us. Their meticulous attention to detail during our bespoke Rajasthan expedition was nothing short of extraordinary. From heritage stays to seamless transitions, every moment felt curated. Truly a gold standard in travel—10/10 service!",
    },
  ];
  return (
    <div className="lg:px-40 lg:py-12  px-8  py-2   ">
      <div className="flex justify-center items-center ">
        <p className="lg:text-5xl  text-4xl  font-audiowide text-blue-600">
          Our Happy Client Say About Us{" "}
        </p>
      </div>

      <motion.div 
            initial={{  opacity: 0 , scale : 0.9}}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, scale : 1}}
            viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center items-center gap-3 lg:py-24  py-8  flex-wrap lg:flex-nowrap   ">
        {review.map((item) => (
          <div className="flex flex-col justify-start items-start gap-8 bg-gray-100  lg:px-8 lg:py-6  px-3 py-4   rounded-2xl w-80 h-80 shadow-[0px_4px_55px_0px_rgba(59,_130,_246,_0.5)]">
            <div className="flex justify-center items-center gap-1">
              <img
                src={item.img}
                alt=""
                className="lg:w-11 lg:h-11   w-9 h-9    "
              />
              <div className="flex flex-col justify-center items-start ">
                <p className="text-base font-semibold">{item.re_name}</p>
                <p className="text-base font-semibold">{item.job}</p>
              </div>
            </div>

            <p className="text-sm">{item.dec}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Review;