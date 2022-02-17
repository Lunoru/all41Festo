import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "../../Pages/Profile";
import { Hello } from "../../Pages/Hello";
import "../../sass/Custom.scss"
import {Home} from "../../Pages/Home";
import {Start} from "../../Pages/Start";
import {useMsal} from "@azure/msal-react";
import {Help} from "../../Pages/Help";
import {ClassroomManage} from "../../Pages/ClassroomManage";
import {NewRequest} from "../../Pages/NewRequest";
import {LearningHistory} from "../../Pages/LearningHistory";
import {ReqApprove} from "../../Pages/ReqApprove";
import {Denied} from "../../Pages/Denied";

const Pages = () => {

    const {accounts} = useMsal();
    const role = accounts[0] && accounts[0].idTokenClaims["roles"][0];

    if (role === "Coordinator"){

    return (
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/NewRequest" element={<NewRequest />}/>
            <Route path="/ClassroomManage" element={<ClassroomManage />}/>
            <Route path="/LearningHistory" element={<LearningHistory />}/>
            <Route path="/help" element={<Help />}/>
            <Route path="/" element={<Start />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/hello" element={ <Hello />}/>
            <Route path="/ReqApprove" element={ <ReqApprove />}/>

        </Routes>
    )}else if(role === "Requestor"){
        return  (<Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/NewRequest" element={<NewRequest />}/>
            <Route path="/LearningHistory" element={<LearningHistory />}/>
            <Route path="/help" element={<Help />}/>
            <Route path="/" element={<Start />}/>
        </Routes>)
    }else if (role === "Student" || "Teacher") {
        return (<Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/help" element={<Help />}/>
            <Route path="/LearningHistory" element={<LearningHistory />}/>
            <Route path="/" element={<Start />}/>
            </Routes>)

    }else{
        return (<Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/" element={<Start />}/>
        </Routes>)
    }

}

const Main = () =>{
        return(<main className="mainPage">
                <Pages/>
            </main>
        )
    
}
export default Main
