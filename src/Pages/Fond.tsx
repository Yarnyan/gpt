import FondFifthScreen from "../Components/Screens/Fond/FondFifthScreen";
import FondFirstScreen from "../Components/Screens/Fond/FondFirstScreen";
import FondFourthScreen from "../Components/Screens/Fond/FondFourthScreen";
import FondSecondScreen from "../Components/Screens/Fond/FondSecondScreen";
import FondSeventhScreen from "../Components/Screens/Fond/FondSeventhScreen";
import FondSixthScreen from "../Components/Screens/Fond/FondSixthScreen";
import FondThirdScreen from "../Components/Screens/Fond/FondThirdScreen";
import FondNineScreen from "../Components/Screens/Fond/FondNineScreen";
import FondEightScreen from "../Components/Screens/Fond/FondEightScreen";
function Fond() {
    return ( 
        <div id="fond" className="main_section">
            <FondFirstScreen/>
            <FondSecondScreen/> 
            <FondThirdScreen/>
            <FondFourthScreen/>
            <FondFifthScreen/>
            <FondSixthScreen/>
            <FondEightScreen />
            <FondNineScreen/>
            <FondSeventhScreen/>
        </div>
     );
}

export default Fond;