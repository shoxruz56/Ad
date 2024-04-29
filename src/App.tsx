import { ReactElement } from "react";
import "./App.css";
import Account from "./components/Account/Account";
import Address from "./components/Address/Address";
import User from "./components/User/User";
import useForm from "./hooks/useForm";

function App() {
  const formElements: ReactElement[] = [<Account />, <Address />, <User />];
  const {
    currentIndex,
    isFirstPage,
    isLastPage,
    step,
    steps,
    prevPage,
    nextPage,
  } = useForm(formElements);

  console.log(isFirstPage);
  

  return (
    <>
      <div className="app">
        <div className="cont">
          <div className="top">{currentIndex + 1} / {steps.length}</div>
          <div>
            {step}
            {/* <Address/>
          <User/> */}
          </div>
          <div className="bottom">
            {!isFirstPage && <button onClick={prevPage}>Back</button>}
            
             { isLastPage ? <button>Finish</button> : <button onClick={nextPage}>Next</button>}
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
