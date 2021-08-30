import Navbar from "./components/nav";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import Welcome from "./components/welcomepage";

function App(){
     return(
       <>
        <BrowserRouter>
        <Switch>
           <>
           <Navbar />
           <Welcome />
           </>
       </Switch>
       </BrowserRouter>
       </>
     )
}

export default App;
