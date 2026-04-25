import  { useState , useEffect} from "react";
import { Link, useLocation , useNavigate } from "react-router-dom";

// import { Building2 } from 'lucide-react';
import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/bgremove_cross.png"

const Navbar = () => {
    const [Isopen, Setiopen] = useState(false);
      


  useEffect(() => {
    if (Isopen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [Isopen]);
    const navigate = useNavigate();

  const NavbarItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "TRIPS DESTINATION", link: "/trip" },
    { name: "REVIEWS", link: "/review" },
    // { name: "GALLERY", link: "/gallery" },
    // { name: "REVIEWS", link: "/reviews" },
    // { name: "CONTACT", link: "/contact" },
  ];

    const IsopenNavbarItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "GALLERY", link: "/gallery" },
    
    { name: "CONTACT", link: "/contact" },
  ];

  const location = useLocation();

  return (
    <div
      className="w-full mb-2 bg-cover bg-center"
      //   style={{ backgroundImage: `url(${Image3})` }}
    >
      <div className="hidden md:flex w-full justify-between  items-end   md:items-center gap-4 py-3 p-6 px-8 text-black shadow-2xs">
        {/* Logo Section */}
        <div className="flex  items-center text-black gap-1 ">
          <img src={logo} alt=""  className="w-auto h-14"/>
          <p   onClick={() => navigate('/')}  className="font-semibold font-audiowide text-4xl text-black cursor-pointer">SVK Holidays</p>
        </div>

        {/* Navbar Links */}
        <div className=" -ml-40 hidden  text-black  md:flex gap-7 text-sm font-medium ">
          {NavbarItems.map((item, index) => (
            <p key={index}>
              <a
                href={item.link}
                className={`${
                  location.pathname === item.link
                    ? "text-black"
                    : "text-gray-400 hover:text-blue-300"
                }`}
              >
                {item.name}
              </a>
            </p>
          ))}
        </div>

        {/* Contact Button */}
        <div className="md:flex  text-black  hidden">
          <Link
            to="/contact"
            className="font-medium bg-black text-white rounded-lg px-5 py-2"
          >
            Contact Us   
          </Link>
        </div>
      </div>
      <div className="md:hidden  justify-between  text-white flex  p-6 px-5">
        <div className="flex items-center gap-0.5">
          {/* <Building2 size={24} className="text-black" /> */}
          <img src={logo} alt=""  className="w-auto md:h-11 h-9"/>
          <p onClick={() => navigate('/')} className="font-medium text-xl  md:text-2xl text-black">Sri Sakthi  Builders</p>
        </div>

        <button onClick={() => Setiopen(!Isopen)}>
          {Isopen ? (
            <X size={23} className="text-black  cursor-pointer" />
          ) : (
            <AlignJustify size={23} className="text-black    cursor-pointer" />
          )}
        </button>
      </div>

      {Isopen && (
        <div
          // initial={{opacity:0 , y:30}}
          // whileInView={{opacity:1 , y:0}}
          // transition={{duration:300 , delay:index*0.3}}
          // viewport={{amount:50 , once:true}}
          className="flex md:hidden h-screen flex-col justify-start mt-28 gap items-center text-black font-medium gap-8"
        >
          {/* <div className="flex items-center gap-0.5">
                    <ChartColumnDecreasing size={28} className="text-violet-300" />
                    <p className="font-medium text-3xl text-white">Nexus</p>
                </div> */}

          {IsopenNavbarItems.map((item, index) => (

            <motion.p
            
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              viewport={{ amount: 0.5, once: true }}

              className="hover:scale-105  duration-75"
            >
            <p  className={`${location.pathname === item.link ? 'text-blue-600' : ''}`} onClick={() => Setiopen(false)}   ><Link to={item.link}>{item.name}</Link></p>

            </motion.p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar