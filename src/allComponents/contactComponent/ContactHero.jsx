
import { PhoneOutgoing } from "lucide-react";
import { MapPinHouse } from "lucide-react";
import { motion } from "framer-motion";
import { MailPlus } from 'lucide-react';
import { useState } from "react";
// import { button } from "framer-motion/client";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" , message : "" });

const handleChange = (
e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};



  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");




  // Handle form submit
const handleSubmit = async (
  e
) => {
  e.preventDefault();
  setLoading(true);
  setSuccess("");

  const data = new FormData();
//   data.append("access_key", "49a35bcd-03fb-4492-bc9e-c5deb280d720");
  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("message", formData.message);

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: data,
      }
    );

    const result= await response.json();

    if (response.ok) {
      setSuccess("✅ Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert(result.message ?? "Something went wrong");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};




  return (
    <div className="md:px-20 px-5  py-4  md:py-16 flex flex-wrap lg:flex-nowrap">
      <motion.div 
        initial={{opacity : 0 , x:-30}}
        whileInView={{opacity : 1 , x:0}}
      transition={{duration : 0.5}}
      viewport={{amount : 0.4 , once:true}}
      className="md:w-1/2  w-full  ">
        <p className="md:text-5xl  text-4xl  font-audiowide font-semibold  text-black ">
          Book a luxurious journey{" "}
        </p>
        <p className=" text-3xl   md:text-3xl text-black mt-2 font-audiowide font-semibold   ">
          with <span className="text-blue-600">SVK Holidays</span>{" "}
        </p>

        <div className="md:flex-row flex flex-col items-center gap-5 mx-3.5 mt-12">
          <PhoneOutgoing
            size={45}
            className="rounded-lg bg-blue-600 text-white p-2"
          />
          <div className="text-lg flex-col justify-center pt-1">
            <p className="text-xl items-center text-black   md:text-start text-center">Call Us :</p>
            <p className="text-lg items-center text-gray-600  font-stretch-expanded "> 98xxx xxxx | 99xxx xxxxx</p>
            {/* <p className="text-gray-500">Available on 9 am to 8 pm</p> */}
          </div>
        </div>

        <div className="md:flex-row flex flex-col items-center gap-5 mx-3.5 mt-12">
          <MailPlus
            size={45}
            className="rounded-lg bg-blue-600 text-white p-2"
          />
          <div className="text-lg flex-col  justify-center pt-1">
            <p className="text-xl items-center md:text-start text-center text-black">Email :</p>
            <p className="text-gray-500">svkholidays@gmail.com</p>
          </div>
        </div>

        <div className="md:flex-row flex flex-col  items-center gap-5 mx-3.5 mt-12">
          <MapPinHouse
            size={48}
            className="rounded-lg bg-blue-600 text-white p-2 "
          />
          <div className="text-lg flex-col  justify-center items-center  pt-5 md:px-0  ">
            <p className="text-xl text-black text-center  md:text-start">Address :</p>
            <p className="text-gray-500">12/253 , Devapuram 1 St Road, </p>
            <p className="text-gray-500">Devapuram Park Road , Bhavani , Erode, Tamil Nadu 641603</p>
          </div>
        </div>
      </motion.div>

      <motion.div    
            initial={{opacity : 0 , x:30}}
             whileInView={{opacity : 1 , x:0}}
            transition={{duration : 0.5}}
            viewport={{amount : 0.4 , once:true}}
      className="md:w-1/2 md:px-14     w-full md:py-0 py-16 ">
        <div className="border focus:border-gray-700        border-gray-300 rounded-2xl p-7">
          <p className="text-blue-600 text-4xl font-audiowide font-semibold ">Get In Touch</p>
          <input
            type="text"
            name="name"
          
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 rounded-md mt-6 w-full px-5 py-2 pe- placeholder:text-gray-500"
          />
          <input
            type="email"
            name="email"
            id=""
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded-md mt-6 w-full px-5 py-2 pe- placeholder:text-gray-500"
          />
          <input
            type="phone"
            name="phone"
            id=""
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md mt-6 w-full px-5 py-2 pe- placeholder:text-gray-500"
          />
          <textarea
            name="message"
            id=""
            value={formData.message}
            onChange={handleChange}
            placeholder="How i Can help you ?"
            className="w-full h-44 p-3.5 mt-6 rounded-md border border-gray-300  placeholder:"
          ></textarea>
          {loading ? <button  className="text-center w-full py-2 bg-blue-600 text-white rounded-lg mt-5" >Loading ....</button>
:
          
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="text-center w-full py-2 bg-blue-600 text-white rounded-lg mt-5"
            >
              Send Message
            </button>
          </form>

          }
          <span className="text-center flex items-center justify-center mt-3">{success}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;