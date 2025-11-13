import { motion } from "motion/react"
import game1 from '../assets/krishi-img5.png'
import game2 from '../assets/krishi-img6.png'
import game3 from '../assets/krishi-img.png'
import { useState } from "react"




const Banner = () => {

    const [current, setCurrent] = useState(1)

    const images = [ game2, game1,game3];

    const fadeZoom = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeInOut" } },
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>



            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <motion.img
                        key={current}
                        src={images[current]}
                        className="w-full object-cover"
                        variants={fadeZoom} initial="hidden"
                        animate="visible" />

                    <div className="absolute inset-0 flex justify-between items-center px-5">
                        <button onClick={handlePrev} className="btn btn-circle">
                            ❮
                        </button>
                        <button onClick={handleNext} className="btn btn-circle">
                            ❯
                        </button>
                    </div>

                </div>

            </div>





        </div>
    )
}

export default Banner