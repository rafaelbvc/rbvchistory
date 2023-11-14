import { twMerge } from "tailwind-merge";
import { TScreensPropsTypes } from "../../types/screensPropsType";

const ScreenPhotoContainer = (props: TScreensPropsTypes) => {

    const { className, href, src, alt } = props
    return (
        <a href={href} target="_blank" className={twMerge(" ", className)}>
            <img src={src} alt={alt} className="rounded" />
        </a>
    );
};

export default ScreenPhotoContainer