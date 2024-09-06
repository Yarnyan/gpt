import BotFirstScreen from "../Components/Screens/Bot/BotFirstScreen";
import BotFourthScreen from "../Components/Screens/Bot/BotFourthScreen";
import BotSecondScreen from "../Components/Screens/Bot/BotSecondScreen";
import BotThirdScreen from "../Components/Screens/Bot/BotThirdScreen";

function Bot() {

    return ( 
        <div id="bot" className="main_section">
            <BotFirstScreen/>
            <BotSecondScreen/>
            <BotThirdScreen/>
            <BotFourthScreen/>
        </div>
     );
}

export default Bot;
