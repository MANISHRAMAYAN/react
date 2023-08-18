import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import img1 from "./Asstes/assher 2.png" 
import img2 from "./Asstes/fghjk 1.png" 
import img3 from "./Asstes/image 2.png" 
import img4 from "./Asstes/oval 2.png" 
import img5 from "./Asstes/oval.png" 
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import "./Middle.css"
import Slider from "react-slick"
import { useState } from "react";

function SampleNextArrow({onClick}) {

    return (
      <div className="arrow arrow-right" onClick={onClick}>
        <AiOutlineArrowRight />
      </div>
    );
  }
  
  function SamplePrevArrow({onClick}) {
   
    return (
        <div className="arrow arrow-left" onClick={onClick}>
            <AiOutlineArrowLeft />
            
        </div>
    );
  }
export default function Middle(){
    const img=[
        {
            img:img1,
            title:"Asscher",
            para:"every diamond in our collection"
        },
        {
            img:img2,
            title:"Asscher",
            para:"every diamond in our collection"
        },
        {
            img:img3,
            title:"Round",
            para:"every diamond in our collection"
        },
        {
            img:img4,
            title:"Emerald",
            para:"every diamond in our collection"
        },
        {
            img:img5,
            title:"oval",
            para:"every diamond in our collection"
        },
        {
          img:img3,
          title:"Round",
          para:"every diamond in our collection"
      },
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        beforeChange:(current,next)=>setSlideIndex(next),
        centerMode:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />      
      };
      const [slideIndex,setSlideIndex]=useState(0)


    return(
        <>
        <div className="container">
            <h1 className="header">this is header</h1>
            <div className="slider">
                <Slider {...settings} className='slider_main'>                    
                        {img.map((image,index)=>(
                            <div className={index === slideIndex ? "slide slide-active":"slide"} key={index}>
                              <div className='slider_img'>      
                                <img src={image.img} alt="jk" className='img_s' />
                                </div>
                                <div className='card-body' >
                                  <h3>{image.title}</h3>
                                  <p>{image.para}</p>
                               </div>
                                </div>
                              
                        ))}


                       
        
                </Slider>

            </div>

        </div>
      
        
        
        
        </>
    )

}