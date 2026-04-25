import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { locationData  }  from "../locationData"


const Indonesia = () => {

 const { city } = useParams();

const data = locationData.find(
  (loc) => loc.city.toLowerCase() === city.toLowerCase()
);

if (!data) {
  return <h1>Location not found</h1>;
}

console.log("details" , data?.images)
  
  const pic = [
    "https://images.pexels.com/photos/29833372/pexels-photo-29833372/free-photo-of-interior-of-istiqlal-mosque-during-prayer-time.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2573543/pexels-photo-2573543.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3780665/pexels-photo-3780665.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10686258/pexels-photo-10686258.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4913546/pexels-photo-4913546.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10403974/pexels-photo-10403974.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/11977546/pexels-photo-11977546.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/12895223/pexels-photo-12895223.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7606391/pexels-photo-7606391.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/12636165/pexels-photo-12636165.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6226703/pexels-photo-6226703.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10207529/pexels-photo-10207529.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const css = [
    "row-span-1 md:row-span-2",
    "h-72",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-1",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-1",
    "row-span-1 md:row-span-3",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-1",
  ];

  return (
    <div>
      <Navbar />
      <div className="px-8 py-14">
        <p className="text-6xl font-serif  ">{data?.city}</p>
        <div className="grid md:grid-cols-3 px-2 grid-cols-1  grid-rows-12  md:grid-rows-7  gap-2 mt-5 ">
          {data?.images.map((i, index) => (
            <p
              key={index}
              className={`bg-bottom  rounded-2xl  col-span-1   ${data?.css[index]}`}
              style={{ backgroundImage: `url(${i})` }}
            ></p>
          ))}






          {/* <p className='bg-[url("https://images.pexels.com/photos/29833372/pexels-photo-29833372/free-photo-of-interior-of-istiqlal-mosque-during-prayer-time.jpeg?auto=compress&cs=tinysrgb&w=600")] bg-bottom  rounded-2xl col-span-1  row-span-2 '></p>
          <p className="bg-[url('https://images.pexels.com/photos/2573543/pexels-photo-2573543.jpeg?auto=compress&cs=tinysrgb&w=600')]  bg-bottom    rounded-2xl col-span-1  h-72"></p>
          <p className="bg-[url('https://images.pexels.com/photos/3780665/pexels-photo-3780665.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-2xl col-span-1 row-span-2  "></p>
          <p  className="bg-[url('https://images.pexels.com/photos/10686258/pexels-photo-10686258.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/4913546/pexels-photo-4913546.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-1"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/10403974/pexels-photo-10403974.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/11977546/pexels-photo-11977546.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/12895223/pexels-photo-12895223.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-1"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/7606391/pexels-photo-7606391.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-3"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/12636165/pexels-photo-12636165.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/6226703/pexels-photo-6226703.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/10207529/pexels-photo-10207529.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-1"></p> */}


          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Indonesia;