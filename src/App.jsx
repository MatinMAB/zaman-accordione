//React
import { useState } from "react";

//Utils
import { modules } from "./utils/modules";

//CSS Styles
import "./App.css";

//Components
import ModuleComponent from "./components/ModuleComponent";


function App() {
 const [isOpen1, setIsOpen1] = useState(false);
 const [isOpen2, setIsOpen2] = useState(false);

 const toggleIsOpen1 = () => {
  setIsOpen1(!isOpen1);
 };
 const toggleIsOpen2 = () => {
  setIsOpen2(!isOpen2);
 };
 const collapse = () => {
  setIsOpen1(false);
  setIsOpen2(false);
 };
 const expand = () => {
  setIsOpen1(true);
  setIsOpen2(true);
 };

 return (
  <>
   <div className="accordioneBox">
    <div className="accordioneBox_header">
     <button onClick={expand}>EXPAND ALL</button>
     <button onClick={collapse}>COLLAPSE ALL</button>
    </div>
    <div className="accordioneBox_modulesList">
     <ul>
      {
       //  modules.map((module) => (
       //  <li key={module.id}>
       //   <ModuleComponent data={module} />
       //  </li>
       // ))
       <>
        <li>
         <ModuleComponent
          data={modules[0]}
          isOpen={isOpen1}
          toggleIsOpen={toggleIsOpen1}
         />
        </li>
        <li>
         <ModuleComponent
          data={modules[1]}
          isOpen={isOpen2}
          toggleIsOpen={toggleIsOpen2}
         />
        </li>
       </>
      }
     </ul>
    </div>
   </div>
  </>
 );
}

export default App;
