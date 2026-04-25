import React from 'react'
import { MapPin } from 'lucide-react';
const Experience = () => {

  const picture = [
    {name : 'Madurai Meenakshi Amman' , 
      img : <MapPin/> ,
      place : "Madurai"
    },
    {name : 'Pazhamudhir Solai' , 
      img : <MapPin/> ,
      place : "Madurai"
    },
    {name : 'Koodal Azhagar Temple ' , 
      img : <MapPin/> ,
      place : "Madurai"
    },
    {name : 'Thirumalai Nayakar Mahal' , 
      img : <MapPin/> ,
      place : "Madurai"
    },
    {name : 'Gandhi Memorial Museum' , 
      img : <MapPin/> ,
      place : "Madurai"
    },
  ]


  const span = ["md:col-span-2 col-span-3 bg-center" ,
    "md:col-span-1  col-span-3 bg-center" ,
    "col-span-3 bg-center" ,
    "md:col-span-1  col-span-3    bg-bottom" ,
    "md:col-span-2   col-span-3    bg-left" ]

  const backgrd = ["https://static.toiimg.com/photo/107052734/Meenakshi-Amman-Temple.jpg?width=748&resize=4" ,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/be/21/83/pazhamudhir-solai.jpg?w=700&h=400&s=1",
    "https://india.muthu.co/images/image_koodal-azhagar-temple_hu_a6eb65a62da942f5.png" ,
    "http://www.hotelnambi.in/images/302.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/1a/30/ef/8b/the-view-of-the-gandhi.jpg"
  ]
  return (
    <div className='bg-gray-100 py-12 mx-auto  '>
        <div className="text-center text-5xl  font-audiowide    font-medium ">
            <p>Experience Our Destination</p>       
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mx-auto max-w-5xl mt-20'>
          {picture.map((item , index) => (
              <div
                key={index}
                className={`relative h-60 rounded-2xl bg-cover bg-center ${span[index]}`}
                style={{ backgroundImage: `url(${backgrd[index]})` }}
              >
            <div className='absolute  text-2xl text-white bottom-5 left-7'>
              <p>{item.name}</p>
              <div className='flex gap-1 items-center'>
                <MapPin  size={18}/>
                <p className='text-base'>{item.place}</p>
              </div>
            </div>
          </div>
          ))

          }
          {/* <div className='bg-[url("https://images.pexels.com/photos/19196727/pexels-photo-19196727/free-photo-of-a-mountain-range-with-trees-and-clouds-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-60 rounded-2xl col-span-2 relative'>
            <div className='absolute  text-2xl text-white bottom-5 left-7'>
              <p>Mountain Borowe</p>
              <div className='flex gap-1 items-center'>
                <MapPin  size={18}/>
                <p className='text-base'>Indonesia</p>
              </div>
            </div>
          </div> */}
          {/* <div className='bg-[url("https://images.pexels.com/photos/19161510/pexels-photo-19161510/free-photo-of-a-view-of-snow-covered-mountains-with-trees.jpeg?auto=compress&cs=tinysrgb&w=600")] relative h-60 rounded-2xl  col-span-1'>
            <div className='absolute  text-2xl text-white bottom-5 left-7'>
              <p>Mountain Borowe</p>
              <div className='flex gap-1 items-center'>
                <MapPin  size={18}/>
                <p className='text-base'>Indonesia</p>
              </div>
            </div>
          </div>
          <div className='bg-[url("https://images.pexels.com/photos/18077986/pexels-photo-18077986/free-photo-of-a-river-with-buildings-on-the-banks-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-60 rounded-2xl bg-left col-span-3 relative '>
            <div className='absolute  text-2xl text-white bottom-5 left-7'>
              <p>Mountain Borowe</p>
              <div className='flex gap-1 items-center'>
                <MapPin  size={18}/>
                <p className='text-base'>Indonesia</p>
              </div>
            </div>
          </div>
          <p className='bg-amber-900 h-60 rounded-2xl  col-span-1'></p>
          <p className='bg-amber-900 h-60 rounded-2xl  col-span-2'></p> */}

        </div>

        {/* <div className="grid grid-cols-2 gap-6 items-center mt-11 mx-auto max-w-4xl ">
          <div className='relative'>
          <img
            src="https://images.pexels.com/photos/1480807/pexels-photo-1480807.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-xl  w-[44rem] h-60"
          />
          <div className='flex-col gap-4 absolute bottom-3 left-3'>
          <p className=' text-black text-2xl font-semibold '>Mountain Brown</p>
          <div className='flex  gap-2 items-center '>
          <MapPin  size={15} className=' '/>
          <p className=''>Indonesia</p>
          </div>
          </div>
          </div>
          <div className='relative'>
          <img
            src="https://images.pexels.com/photos/1480807/pexels-photo-1480807.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-xl w-[2rem] h-60  "
          />
          <div className='flex-col gap-4 absolute bottom-3 left-3'>
          <p className=' text-black text-2xl font-semibold '>Mountain Brown</p>
          <div className='flex  gap-2 items-center '>
          <MapPin  size={15} className=' '/>
          <p className=''>Indonesia</p>
          </div>
          </div>
          </div>
        </div> */}

        {/* <div className='grid grid-cols-1 justify-center items-center max-w-4xl mt-3 mx-auto'>
          <div className='bg-[url("https://images.pexels.com/photos/15488513/pexels-photo-15488513/free-photo-of-the-building-is-lit-up-at-night-with-a-clock-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-center'>
          <p className='py-28'>Harihatana</p></div>
        </div> */}



        

    </div>
  )
}






export default Experience