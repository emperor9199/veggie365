import { useState } from "react";
import Carousal from "./components/Carousal/Carousal";
import Navbar from "./components/Navbar/Navbar";
import Testinomial from "./components/Testinomial/Testinomial";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar setToggle={setToggle} toggle={toggle} />
      <Carousal />
      <Testinomial />
      {/* {!toggle && <Carousal/>} */}
    </>
  );
}

export default App;
