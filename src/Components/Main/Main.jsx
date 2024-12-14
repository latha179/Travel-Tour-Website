import React,{useEffect}from 'react'
import './main.css'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img9 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img3 from '../../assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1,
        imgsrc: img,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'An exotic tropical destination that flaunts scenic beaches and mountains, Bali is deep-rooted in culture and tradition, which adds to the charm of this scenic island.'
    },
    {
        id:2,
        imgsrc: img2,
        destTitle: 'Lakshadweep',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'Settled off the Kerala coast on Laccadive sea, Lakshadweep translates to ‘a hundred thousand islands’. A club of 36 atolls and coral reefs, the nature tourism destination is known for preserved ecology and water sports.'
    },
    {
        id:3,
        imgsrc: img3,
        destTitle: 'Barcelona',
        location: 'Spain',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'Founded as a Roman city, present day Barcelona is the capital of Spains Catalonia region. Standing as an embodiment of model architecture and classic art, the city is known for its many attractions designed by Antoni Gaudi.'
    },
    {
        id:4,
        imgsrc: img4,
        destTitle: 'Istanbul',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'With History dating back to Ancient Greeks and varied landscape, Istanbul is home to delightful cuisine, a rich culture, and sights that will take your breath away.'
    },
    {
        id:5,
        imgsrc: img5,
        destTitle: 'Havelock Island',
        location: 'Andaman and Nicobar',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.'
    },
    {
        id:6,
        imgsrc: img6,
        destTitle: 'Mykonos',
        location: 'Greece',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'An intrinsic part of the Cyclades Islands in the Aegean Sea, the Greek Island of Mykonos is all about age-old churches with stony white-washed façades, historical museums, exotic beaches, exciting bars and restaurants, dance clubs and luxury cruises.'
    },
    {
        id:7,
        imgsrc: img7,
        destTitle: 'Manali',
        location: 'Himachal Pradesh',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'Nestled on the banks of River Beas, Manali will take your breath away with its snow-kissed peaks, lush valleys and heart-pumping adventure experiences in the heart of Himalayas.'
    },
    {
        id:8,
        imgsrc: img8,
        destTitle: 'Varkala',
        location: 'Kerala',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'Flaunting one of the best cliff beaches in Kerala, Varkala is a lesser known yet absolutely paradisiacal destination that houses forts, pilgrimage sites, springs, natural fisheries and more.'
    },
    {
        id:9,
        imgsrc: img9,
        destTitle: 'Goa',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'Popularly known as India’s party capital, Goa seduces travellers from all around the globe with its boho beaches, ancient churches, majestic forts and unbeatable nightlife!'
    },
]

const Main = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid"> 
                {
                    Data.map(({id, imgsrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgsrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon"/>
                                    <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>    
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main 