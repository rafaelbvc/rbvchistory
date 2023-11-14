import { useState } from 'react';
import ArrowRight from '../svg/ArrowRight';
import ArrowLeft from '../svg/ArrowLeft';
import { RxDotFilled } from "react-icons/rx"
import OneToSeven from './OneToSeven';
import SevenToFourteen from './SevenToFourteen';
import FourteenToTwentyOne from './FourteenToTwentyOne';
import TwentyOneToTwentyEight from './TwentyOneToTwentyEight';
import TwentyEightToThirtyFive from './TwentyEightToThirtyFive';

const projectComponent = [
    {
        component: <OneToSeven />
    },
    {
        component: <SevenToFourteen />
    },
    {
        component: <FourteenToTwentyOne />
    },
    {
        component: <TwentyOneToTwentyEight />
    },
    {
        component: <TwentyEightToThirtyFive />
    }
]


const ScreenContainer = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projectComponent.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === projectComponent.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (photoPath: number) => {
        setCurrentIndex(photoPath);
    };


    return (
        <article className="w-[100%] h-[100%] flex flex-col ">

            <section className='flex flex-col justify-center h-screen'>
                <menu className="flex justify-center my-[2rem] mx-auto max-w-[80rem] ">
                    <button onClick={prevSlide}>
                        <ArrowRight width="14" className="cursor-pointer" />
                    </button>
                    <menu className='flex justify-center py-2 mx-10 top-4'>
                        {projectComponent.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className="text-2xl cursor-pointer"
                            >
                                <RxDotFilled className='text-gray' />
                            </div>
                        ))}
                    </menu>
                    <button onClick={nextSlide}>
                        <ArrowLeft width="14" className="cursor-pointer" />
                    </button>
                </menu>
                <div className="overflow-auto h-[80vh] flex justify-center items-center">
                    <section className="flex justify-center mx-auto max-w-[80rem] flex-wrap lg:flex-nowrap " >
                        {projectComponent[currentIndex].component}
                    </section >
                </div>
            </section>
        </article>
    )
}

export default ScreenContainer