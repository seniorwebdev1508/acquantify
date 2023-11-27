import './App.css';
import { Routes, Route } from "react-router-dom";

import ImportSheet from './pages/importSheet';
import PersonalizationPreferences from './pages/personalizationPreferences';
import AcquantifyCustom from './pages/acquantifyCustom';
import PersonalizationDetails from './pages/personalizationDetails';
import Success from './pages/success';
import PreviousAcquanitifications from './pages/previous';
import BuyCredits from './pages/buyCredits';
import Login from './pages/login';
import ForgotPwd from './pages/forgotPwd';
import SignUp from './pages/signup';
import useWindowDimensions from './pages/useWindowDimensions';

function App() {
  const {width, height} = useWindowDimensions();
  return (
    <div className='w-full h-full'>
      {/* <ImportSheet scaleFactor={Math.min(width/1440, height/960)}/> */}
      {/* <PersonalizationPreferences scaleFactor={Math.min(width/1440, height/960)}/> */}
      {/* <AcquantifyCustom scaleFactor={Math.min(width/1440, height/960)}/> */}
      {/* <PersonalizationDetails scaleFactor={Math.min(width/1440, height/960)}/> */}
      {/* <Success scaleFactor={Math.min(width/1440, height/960)}/> */}
      {/* <PreviousAcquanitifications scaleFactor={Math.min(width/1440, height/960)}/> */}
      <BuyCredits scaleFactor={Math.min(width/1440, height/960)}/>
      {/* <Routes>
        <Route path="/" element={<Login scaleFactor={Math.min(width/1440, height/960)}/>}></Route>
        <Route path="/fpwd" element={<ForgotPwd scaleFactor={Math.min(width/1440, height/960)}/>}></Route>
        <Route path="/signup" element={<SignUp scaleFactor={Math.min(width/1440, height/960)}/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
