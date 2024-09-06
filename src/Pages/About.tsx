import AboutFifthScreen from "../Components/Screens/About/AboutFifthScreen";
import AboutFirstScreen from "../Components/Screens/About/AboutFirstScreen";
import AboutFourthScreen from "../Components/Screens/About/AboutFourthScreen";
import AboutSecondScreen from "../Components/Screens/About/AboutSecondScreen";
import AboutThirdScreen from "../Components/Screens/About/AboutThirdScreen";

function About() {
    return ( 
        <div id="about" className="main_section">
            <AboutFirstScreen/>
            <AboutSecondScreen/>
            <AboutThirdScreen/>
            <AboutFourthScreen/>
            <AboutFifthScreen/>
        </div>
     );
}

export default About