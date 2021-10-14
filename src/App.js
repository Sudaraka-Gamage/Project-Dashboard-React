import Sidebar from "./components/sidebar/Sidebar";
import"./app.css"
import Topbar from "./components/topbar/Topbar";
import Members from "./pages/members/Members";


function App() {
  return (

    <div className="container">

    
     <Sidebar/> 
     

     <div className="container2">
       <Topbar/>
       <Members/>
       </div>
    </div>

  );
}

export default App;
