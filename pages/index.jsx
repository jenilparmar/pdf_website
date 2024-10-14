import { PiUserSoundBold } from "react-icons/pi";
import { FaRegFilePdf } from "react-icons/fa";
import { MdContentCut } from "react-icons/md";
import { LuMerge } from "react-icons/lu";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdFormatShapes } from "react-icons/md";
import { FaSignature } from "react-icons/fa";
import Link from "next/link";
import AppFooter from "@/Components/AppFooter";

export default function Home() {
  return (
    <>
      {/* \\\main content of home screen  */}
      <div className="w-full h-40 md:h-60 text-center flex justify-center mt-10">
        <p className="self-center text-2xl md:text-5xl font-extrabold">
          Discover the simplicity of processing PDFs online
        </p>{" "}
      </div>
      <div className="w-full bg-[#e3e3e5] h-fit mb-0 py-10 border-2 border-black border-b-0 rounded-t-[50px]">
        <div className="flex-col md:flex-col flex gap-2 md:gap-16">
          <div className="flex flex-row gap-5 mt-10 md:mt-0  md:flex-row md:justify-center md:gap-16 justify-center ">
            <Link href={"/TextToAudio"}>
              <span className="w-[25vw] h-[12vh] gap-2 active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-white border-2 hover:border-blue-500 active:border-blue-500  justify-center flex flex-col">
                <PiUserSoundBold className="self-center font-bold text-3xl text-blue-500 md:text-4xl" />
                <p className="text-center font-medium md:text-2xl  ">
                  Read Text
                </p>
              </span>
            </Link>{" "}
     

            <span className="w-[25vw] h-[12vh] gap-2 active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-white border-2 hover:border-blue-500 active:border-blue-500  justify-center flex flex-col">
              <FaRegFilePdf className="self-center font-bold text-3xl text-blue-500 md:text-4xl" />
              <p className="text-center font-medium md:text-2xl  ">
                Pdf to Img
              </p>
            </span>
<Link href={"/Lockpdf2"}>
       <span className="w-[25vw] h-[12vh] gap-2 active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-white border-2 hover:border-blue-500 active:border-blue-500  justify-center flex flex-col">
              <AiOutlineFileProtect className="self-center font-bold text-3xl text-blue-500 md:text-4xl" />
              <p className="text-center font-medium md:text-2xl">Protector</p>
            </span>
</Link>
          </div>
          <div className="flex flex-row gap-5 mt-10 md:mt-0 md:flex-row md:justify-center md:gap-16 justify-center">
            <span className="w-[25vw] h-[12vh] gap-2 active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-white border-2 hover:border-blue-500 active:border-blue-500  justify-center flex flex-col">
              <FaCompressArrowsAlt className="self-center font-bold text-3xl text-blue-500 md:text-4xl" />
              <p className="text-center font-medium md:text-2xl  ">Compress</p>
            </span>
            <span className="w-[25vw] h-[12vh] gap-2 active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-white border-2 hover:border-blue-500 active:border-blue-500  justify-center flex flex-col">
              <LuMerge className="self-center font-bold text-3xl text-blue-500 md:text-4xl" />
              <p className="text-center font-medium md:text-2xl  ">Merge pdf</p>
            </span>
            <span className="w-[25vw] h-[12vh] gap-2 active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-white border-2 hover:border-blue-500 active:border-blue-500  justify-center flex flex-col">
              <MdContentCut className="self-center font-bold text-3xl text-blue-500 md:text-4xl" />
              <p className="text-center font-medium md:text-2xl  ">
                Pdf cutter
              </p>
            </span>
          </div>
          <div className="flex flex-row gap-5 mt-10 md:mt-0 md:flex-row md:justify-center md:gap-16 justify-center">
            <span className="w-[25vw] h-[12vh] gap-2 active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-white border-2 hover:border-blue-500 active:border-blue-500  justify-center flex flex-col">
              <MdFormatShapes className="self-center font-bold text-3xl text-blue-500 md:text-4xl" />
              <p className="text-center font-medium md:text-2xl  ">
                Form filler
              </p>
            </span>
            <span className="w-[25vw] h-[12vh] gap-2 active:scale-95 transition-all duration-150 rounded-xl md:w-[20vw] md:h-[30vh] bg-white border-2 hover:border-blue-500 active:border-blue-500  justify-center flex flex-col">
              <FaSignature className="self-center font-bold text-3xl text-blue-500 md:text-4xl" />
              <p className="text-center font-medium md:text-2xl  ">Signeture</p>
            </span>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}
