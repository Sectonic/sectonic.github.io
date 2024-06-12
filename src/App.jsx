import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

function App() {

  const mousePos = useMousePosition();
 
  return (
    <div className="relative bg-slate-950 h-screen w-full">
      <motion.div
        className="z-0 fixed w-[8px] h-[8px] outline outline-[1px] outline-gray-300/65 outline-offset-[35px] bg-gray-400 rounded-full"
        style={{ left: mousePos.x, top: mousePos.y}}
      />
      <div className="absolute m-auto left-0 right-0 flex flex-col items-center w-[300px] h-[500px] origin-top z-10 bulbswing">
        <div className="relative w-[4px] h-[250px] bg-gray-800 z-10"></div>
        <div className="flex flex-col justify-evenly items-center w-[30px] bg-gray-700 aspect-[4/5] rounded-[1px] z-20">
          <div className="bg-gray-800 w-[34px] h-[3px] z-30"></div>
          <div className="bg-gray-800 w-[34px] h-[3px] z-30"></div>
          <div className="bg-gray-800 w-[34px] h-[3px] z-30"></div>
        </div>
        <div className="flex flex-col items-center justify-start -mt-[2px] w-[92px] aspect-square rounded-[50%] bg-gray-900 bulbflash border border-gray-500/30 z-10">
          <div className="-mt-[1px] relative border border-gray-950 w-[22px] h-[11px] rounded-[50%] z-20"></div>
          <div className="-mt-[5px] relative border border-gray-950 w-[22px] h-[11px] rounded-[50%] z-20"></div>
          <div className="-mt-[5px] relative border border-gray-950 w-[22px] h-[11px] rounded-[50%] z-20"></div>
        </div>
      </div>
      {/* <div className="px-48 pt-48">
        <div className="cursor-default relative z-10 text-9xl font-bold">Sujal Dhakal</div>
      </div> */}
    </div>
  )
}

export default App;
