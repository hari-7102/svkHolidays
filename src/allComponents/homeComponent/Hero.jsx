
// import heroImg from "../assets/Hero.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-7">
      <div className="relative h-[80vh] sm:h-[90vh] lg:h-screen rounded-2xl overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.pexels.com/photos/12388203/pexels-photo-12388203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"></div>

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-900/40"></div>

        {/* TEXT CONTENT */}
        <motion.div 
          initial={{opacity:0 , y:30}}
          animate={{opacity:1 , y:0}}
          transition={{duration:0.6 , delay:0.4}}

          className="relative z-10 flex flex-col pt-24 sm:pt-32 md:pt-40 lg:pt-32 
                        mx-4 sm:mx-8 md:mx-16 lg:mx-24"
        >
          <p
            className="text-white font-audiowide font-semibold
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase
                        "
          >
            Luxury in Every journey,
          </p>

          <p
            className="text-white font-audiowide font-semibold
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            ONE{" "}
            <span className="hover:text-blue-500 transition uppercase">
             Vacation Trip
            </span>
          </p>

          <p
            className="text-white font-audiowide font-semibold
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            WITH SVK HOLIDAYS
          </p>

          <p
            className="text-gray-100 text-base sm:text-lg md:text-xl 
                        mt-6 sm:mt-8 md:mt-10 max-w-md sm:max-w-xl"
          >
            At SVK Travels, we believe that travel is more than just reaching a destination—it’s about the
             experience of getting there. As a premier travel partner, we specialize in providing seamless,
              luxury transportation solutions. From our meticulously maintained fleet to our dedicated concierge
               support, we ensure every mile of your journey is defined by comfort, safety, and sophistication.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/contact")}
            className="mt-6 sm:mt-8 md:mt-10 w-fit bg-white text-blue-900 
                             font-semibold px-6 sm:px-8 py-2.5 sm:py-3 
                             rounded-xl shadow-xl hover:bg-gray-200 transition"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;