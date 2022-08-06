import { Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import PrivateRoute from "./hoc/PrivateRoute"
import GuestRoute from "./hoc/GuestRoute"

import Home from "./pages/dashboard/Home";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import Receive from "./pages/dashboard/Receive";
import Sent from "./pages/dashboard/Sent";
import Compose from "./pages/dashboard/Compose";
import Trash from "./pages/dashboard/Trash";
import ResetPassword from "./pages/account/ResetPassword";
import Activate from "./pages/account/Activate";
import Chat from "./pages/dashboard/Chat";

function App() {
  
  return (
    <>
      <Layout>
        <PrivateRoute>
          <Route exact path='/' component={Home} />
          <Route exact path='/receive/' component={Receive} />
          <Route exact path='/sent/' component={Sent} />
          <Route exact path='/compose/' component={Compose} />
          <Route exact path='/trash/' component={Trash} />
          <Route exact path='/chats/:id/' component={Chat} />
        </PrivateRoute>
        <GuestRoute>
          <Route path='/login/' component={Login} />
          <Route path='/signup/' component={Signup} />
          <Route path='/reset-password/' component={ResetPassword} />
          <Route path='/activate/:uid/:token/' component={Activate} />
        </GuestRoute>
      </Layout>
    </>
  );
}

export default App;


