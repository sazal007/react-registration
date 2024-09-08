import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PersonalDetails from "./pages/PersonalDetails";
import Address from "./pages/Address";
import Picture from "./pages/Picture";
import Review from "./pages/Review";
import MyDetail from "./pages/MyDetail";
import logo from "./assets/logo.svg";
import { FormProvider } from "./context/FormContext";

function App() {
  const location = useLocation();
  const nodeRef = React.useRef(null);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={500}
        classNames="page"
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<PersonalDetails />} />
            <Route path="/address-details" element={<Address />} />
            <Route path="/profile-picture" element={<Picture />} />
            <Route path="/review" element={<Review />} />
            <Route path="/my-details" element={<MyDetail />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function Root() {
  return (
    <>
      <img src={logo} alt="Logo" className="app-logo" />
      <Router>
        <FormProvider>
          <App />
        </FormProvider>
      </Router>
    </>
  );
}

export default Root;
