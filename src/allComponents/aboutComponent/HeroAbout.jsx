
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Client from '../../assets/logo.png'
const AboutHero = () => {

  const navigate = useNavigate();
  return (
    <div className="md:px-16 px-5    py-7 md:py-24 flex flex-wrap lg:flex-nowrap">
      <motion.div 
            initial={{opacity:0 , x:-40}}
            whileInView={{opacity : 1 , x:1}}
            transition={{duration: 0.5 }}
            viewport={{once: true }}


      className="md:w-1/2 w-full">
        <p className=" text-4xl mt-4 md:text-6xl font-audiowide font-semibold text-black max-w-2xl">
          Grand Welcome to 
        </p>
        <p className=" text-4xl mt-1 md:text-5xl font-audiowide font-semibold text-black">
          <span className="text-blue-600">SVK Holidays </span>
          <p className="text-gray-800 text-2xl">With <span className="text-blue-600 font-semibold"> 24 Years </span> of Driving Experience </p>
         </p>
        <p className="max-w-2xl text-gray-900  py-8 text-lg">
          Welcome to SVK Holidays, your premier partner in world-class travel experiences. We specialize in crafting seamless, memorable journeys that cater to your unique desires. Whether you are looking for a quiet getaway or a grand family adventure, our team is dedicated to providing excellence in every mile.

With a commitment to safety, comfort, and personalized service, we handle the details so you can focus on making memories. At SVK Holidays, we don't just book trips—we curate life-changing experiences.
        </p>
        {/* <p className="max-w-2xl text-gray-600  ">
          Founded with a passion for exploration and a love for the planet, our
          mission is to make travel planning simple, smart, and inspiring.
          Whether you're a solo traveler seeking hidden gems or a family
          planning your next vacation, we bring the world to your fingertips.
        </p> */}
        {/* <div className="flex gap-6">
          <img
            className="w-72 h-auto rounded-xl"
            src="https://images.pexels.com/photos/19758089/pexels-photo-19758089/free-photo-of-a-church-on-top-of-a-mountain-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="w-72 h-auto rounded-xl"
            src="https://images.pexels.com/photos/19758091/pexels-photo-19758091/free-photo-of-a-bridge-over-a-stream.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div> */}
        <button 
          onClick={() => navigate("/services")}
        className="   px-5 py-2 rounded-3xl bg-black text-white hover:border border-gray-700 cursor-pointer mt-6 font-medium">
          Explore More →{" "}
        </button>
      </motion.div>

      <motion.div   
            initial={{opacity:0 , x:40}}
            whileInView={{opacity : 1 , x:1}}
            transition={{duration: 0.5 }}
            viewport={{once: true }}
      className="md:w-1/2 w-full py-4">
        <img
          src={Client}


          className="rounded-2xl w-full md:h-[29rem] bg-cover"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default AboutHero;