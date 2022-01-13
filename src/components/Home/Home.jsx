import "./Home.css"
import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import { useStyletron } from "baseui";
import Banner from "../Banner/Banner";


function Home() {
    const [css, theme] = useStyletron();
    const [address, setAddress] = useState("")
    return (
<>
        <div className={css({
            display: "flex",
            placeContent: "center",
        })}>
            <Banner />
        </div>
        <div className={css({
            color: theme.colors.primary,
            textAlign: "center",
            paddingTop: "2rem",
        })}>
            Enter your address to find Trucks near you
        </div>
        </>
    );
}


export default Home;