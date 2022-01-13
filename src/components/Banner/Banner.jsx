import React from "react";
import { useStyletron } from "baseui";

function Banner() {
    const [css, theme] = useStyletron();


    return (
        <div className={css({
            maxWidth: "100%",
            height: "25rem",
            display: "flex",
            placeItems: "center",
        })}>
            <img className={css({
            maxWidth: "100%",
            height: "25rem",
            filter: "grayscale(0.80)",
        })}  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" alt="dog pic" />
        </div>
    );

}

export default Banner;