import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Slider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 5000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (

        <div ref={sliderRef} className="keen-slider mb-10">
            <div className="keen-slider__slide number-slide1 relative">
                <div className='h-full w-full bg-slide1-bg py-56 bg-no-repeat bg-center bg-cover brightness-75'>
                </div>
                <div className='absolute top-[20%] left-[6%]'>
                    <h1 className='text-7xl font-bold text-white'>New Knowledge</h1>
                    <p className='text-white text-xl my-8'>Ready to learn have fun? <br /> Find a perfect course and join us today. </p>
                    <div className='flex gap-8'>
                        <button type="submit" className="cursor-pointer text-white border border-white hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                            Read More
                        </button>
                        <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide2 relative">
                <div className='h-full w-full bg-slide2-bg py-56 bg-no-repeat bg-center bg-cover brightness-75'>
                </div>
                <div className='absolute top-[20%] left-[6%]'>
                    <h1 className='text-7xl font-bold text-white'>Learn & Discover</h1>
                    <p className='text-white text-xl my-8'>Ready to learn have fun? <br /> Find a perfect course and join us today. </p>
                    <div className='flex gap-8'>
                        <button type="submit" className="cursor-pointer text-white border border-white hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                            Read More
                        </button>
                        <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide3 relative">
                <div className='h-full w-full bg-slide3-bg py-56 bg-no-repeat bg-center bg-cover brightness-75'>
                </div>
                <div className='absolute top-[20%] left-[6%]'>
                    <h1 className='text-7xl font-bold text-white'>Improve Skills</h1>
                    <p className='text-white text-xl my-8'>Ready to learn have fun? <br /> Find a perfect course and join us today. </p>
                    <div className='flex gap-8'>
                        <button type="submit" className="cursor-pointer text-white border border-white hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                            Read More
                        </button>
                        <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;