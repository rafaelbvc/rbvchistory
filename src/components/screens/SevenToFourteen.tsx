import ScreenPhotoContainer from './ScreenPhotoContainer';
import ImgPath from "../../assets/2.jpg"

const SevenToFourteen = () => {


    return (
        <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap" >
            <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
                <h4 className="mb-2 text-right text-bold bounceTitles">
                    Seven To Fourteen
                </h4>
                <ScreenPhotoContainer className="mb-[2rem] lg:mb-0 " src={ImgPath} alt="Seven To Fourteen" />
            </section>
            <section className="flex flex-col p-2 items-left">
                <p className="text-center whitespace-normal text-bold">
                    The project was a sample for a freelance!
                </p>
                <br /><br /><br />
                <p>Project design provided by customer
                    <br /><br />
                    •	React<br />
                    •	TypeScript<br />
                    •	Tailwindcss<br /><br />
                    • Responsive Layout<br />
                </p>
            </section>
        </section>
    );
};

export default SevenToFourteen