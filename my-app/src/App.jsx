import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import { useState } from "react";
import eye from "./Components/eye.svg"

function App() {
  const [inp, setinp] = useState("");
  const [eyeset, setEyeset] = useState("text")
  const sm = "32"
  const md = "40"
  const lg = "48"
  const xl = "70"
  const handleChange = (e)=>{
    setinp(e.target.value)
  }
  const handlerightLogoOnClick = () => {
    setEyeset(eyeset==="text"?"password":"text")
  }

  return (
    <div className="container">
      <Input 
        type={eyeset} 
        size={md}
        variant="outline"
        rightLogo={eye}
        rightLogoOnClick = {()=>handlerightLogoOnClick()}
        onChange={handleChange}
      />
      <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DSGaGTJv30wBkZechmQSawHaLH%26pid%3DApi&f=1" 
        alt="sammy" height="100px" width="100px" borderRadius="100px" fit="cover"
      />
      <Pagination />
    </div>
  );
}

export default App;
