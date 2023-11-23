import './App.css';

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

function App() {
  return (
    <div className='w-full h-[100vh]'>
      {/* <ImportSheet /> */}
      {/* <PersonalizationPreferences /> */}
      {/* <AcquantifyCustom/> */}
      {/* <PersonalizationDetails/> */}
      {/* <Success/> */}
      <PreviousAcquanitifications/>
      {/* <BuyCredits/> */}
      {/* <Login/> */}
      {/* <ForgotPwd/> */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
