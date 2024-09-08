import FondFifthScreen from "../Components/Screens/Fond/FondFifthScreen";
import FondFirstScreen from "../Components/Screens/Fond/FondFirstScreen";
import FondSecondScreen from "../Components/Screens/Fond/FondSecondScreen";
import FondSeventhScreen from "../Components/Screens/Fond/FondSeventhScreen";
import FondSixthScreen from "../Components/Screens/Fond/FondSixthScreen";
import FondNineScreen from "../Components/Screens/Fond/FondNineScreen";
import FondEightScreen from "../Components/Screens/Fond/FondEightScreen";
function Fond() {
    return ( 
        <div id="availability" className="main_section">
            <FondFirstScreen/>
            <FondSecondScreen/> 
            <FondFifthScreen/>
            <FondSixthScreen/>
            <FondEightScreen />
            <FondNineScreen/>
        </div>
     );
}

export default Fond;