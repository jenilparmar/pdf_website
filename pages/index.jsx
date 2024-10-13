import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <>
      {/* \\\main content of home screen  */}

      <div className="w-screen bg-[#e3e3e5] h-[70vh] border-2 border-black shadow-[0_35px_60px_35px_rgba(8,8,5,0.9)] absolute bottom-0 rounded-t-[50px]">
        <div className="flex-col md:flex-col flex gap-2 md:gap-16">
          <div className="flex flex-row gap-5 mt-10 md:mt-0  md:flex-row md:justify-center md:gap-16 justify-center ">
            <span className="w-[25vw] h-[12vh] active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-blue-500"></span>
            <span className="w-[25vw] h-[12vh] active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-blue-500"></span>
            <span className="w-[25vw] h-[12vh] active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-blue-500"></span>
          </div>
          <div className="flex flex-row gap-5 mt-10 md:mt-0 md:flex-row md:justify-center md:gap-16 justify-center">
            <span className="w-[25vw] h-[12vh] active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-blue-500"></span>
            <span className="w-[25vw] h-[12vh] active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-blue-500"></span>
            <span className="w-[25vw] h-[12vh] active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-blue-500"></span>
          </div>
        </div>
      </div>
    </>
  );
}
