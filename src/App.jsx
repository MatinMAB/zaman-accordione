//React
import { useEffect, useState } from "react";

//Utils
import { modules } from "./utils/modules";

//CSS Styles
import "./App.css";

//Components
import ModuleComponent from "./components/ModuleComponent";

function App() {
 const [modulesState, setModulesState] = useState([]);

 useEffect(() => {
  //Fetching Data from Server and bring it in to moduleState
  setModulesState(modules.map((module) => ({ ...module, isExpanded: false })));
 }, []);

 const handleActive = (id) => {
  setModulesState(
   modulesState.map((item) => {
    if (item.id === id) {
     return { ...item, isExpanded: !item.isExpanded };
    } else {
     return item;
    }
   })
  );
 };
 const collapse = () => {
  setModulesState(modulesState.map((item) => ({ ...item, isExpanded: false })));
 };
 const expand = () => {
  setModulesState(modulesState.map((item) => ({ ...item, isExpanded: true })));
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
       modulesState.map((module) => (
        <li key={module.id}>
         <ModuleComponent data={module} handleActive={handleActive} />
        </li>
       ))
      }
     </ul>
    </div>
   </div>
  </>
 );
}

export default App;
