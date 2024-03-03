import vikaasana_logo from "../assets/vikasana_logo.png";
import pu_logo from "../assets/pu_logo.png";
import { RiXrpFill } from "@remixicon/react";
const Navbar = () => {
  return (
    <>
      <header className="w-full py-2 px-2 md:px-10 flex justify-center items-center flex-col font-bold">
        <div className="flex  w-1/2 justify-center items-center space-x-16 my-4">
          <img className=" h-[68px] " src={pu_logo} alt="" />
          <div className="flex items-center justify-center icon">
            <RiXrpFill className="ri-10x absolute block" />
          </div>
          <img className="md:w-16 h-[68px]  " src={vikaasana_logo} alt="" />
        </div>
        <h2 className="text-xl md:text-3xl my-1 text-center">
          RESEARCH AND DEVELOPMENT CENTRE
        </h2>
        <h3 className="text-base md:text-xl font-medium">
          PRESIDENCY UNIVERSITY, BANGALORE
        </h3>
      </header>
    </>
  );
};

export default Navbar;
