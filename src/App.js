
import './App.css';
import Main from './HospitalManagement/Components/Main'
import Passwordreset from './HospitalManagement/Components/Passwordreset';
import Admin from './HospitalManagement/Components/Admin';
import { SharedContextProvider } from './HospitalManagement/Components/SharedContext';
function App() {
  return (
    <div>
   <SharedContextProvider><Main/></SharedContextProvider>
    
    
      
    </div>
  );
}

export default App;
