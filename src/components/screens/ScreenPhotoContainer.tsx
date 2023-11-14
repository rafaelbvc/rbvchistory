import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../types/screensPropsType";

const ScreenPhotoContainer = (props: TScreensPropsTypes) => {

    const { className, href, src, alt } = props
    return (
        <a href={href} target="_blank" className={twMerge("h-content w-contet", className)}>
            <img src={src} alt={alt} className="rounded h-content w-contet" />
        </a>
    );
};

export default ScreenPhotoContainer