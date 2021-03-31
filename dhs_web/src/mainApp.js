import React,{useEffect,useState} from "react";
import Layout from "./Layout"
import { Switch, Route,BrowserRouter } from "react-router-dom";
import Auth from "./Pages/Login/Admin";
import useGlobal  from "./store/store";
import { createBrowserHistory } from "history";
export  const history = createBrowserHistory()

export default function NextApp(props) {
  const [globalState] = useGlobal();
  const { adminData, lng } = globalState;
  const [userData, setUserData] = useState(adminData)


useEffect(() => {
    setUserData(adminData)
}, [adminData])
  return (
    <BrowserRouter history={history}>
        {console.log(adminData,"adminData")}
      {userData ? (
          <Switch>{<Route to="/" component={Layout} {...props} ></Route>}</Switch>
      ) : (
        <Switch>
          <Route to="/" component={Auth} {...props}  />
        </Switch>
      )}
    </BrowserRouter>
  );
}
