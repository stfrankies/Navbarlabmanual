import React, {useState} from 'react';
import video from "../../videos/video.mp4";
import {Button} from "../ButtonElements";
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRright} from "./HeroElements";

const HeroSection = () => {
const[hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <HeroContainer>
           <HeroBg>
               <VideoBg autoPlay loop muted src={video} type="video/mp4" />
            </HeroBg> 
            <HeroContent>
                <HeroH1>LabManual Made Easy To Use</HeroH1>
                <HeroP> Register your name first and read all the information carefully.</HeroP>
                <HeroBtnWrapper>
                    <Button to="register" onMouseEnter={onHover} onMouseLeave={onHover}>
                  Press Start {hover ? <ArrowForward /> : <ArrowRright />}
                  </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection 
