import { useEffect } from "react";
import MainFirstScreen from "../Components/Screens/Main/MainFirstScreen";
import MainSecondScreen from "../Components/Screens/Main/MainSecondScreen";

function Main() {
    return (
        <div id="main" className="main_section">
            <MainFirstScreen />
            <MainSecondScreen />
        </div>
    );
}

export default Main;