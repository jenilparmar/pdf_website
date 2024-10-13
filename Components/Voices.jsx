import React from "react";

const Voices = ({ setVoiceNumber }) => {
  const handleSpeak = (num) => {
    setVoiceNumber(num);
  };
  return (
    <div className="flex flex-row rounded-md self-center gap-3 md:gap-10">
      <div 
        onClick={() => {
          handleSpeak(0);
        }}
        className="border-2 md:w-40 rounded-full w-16 active:scale-95 transition-all duration-100  h-16 md:h-40"
        style={{
          // clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          backgroundImage:"url(https://img.freepik.com/premium-photo/handsome-cartoon-businessman-man-white-background-pictures-children-ai-generated_894218-2804.jpg)",
          backgroundSize:"contain",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center"
        }}></div>
      <div
        onClick={() => {
          handleSpeak(1);
        }}
        className="border-2 rounded-full  md:w-40 w-16 active:scale-95 transition-all duration-100  h-16 md:h-40"
        style={{
          // clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAELcQRbMC8Qwv4Dw_HaTNaK4bedciiG0Ng36u2SSYgVOJDHhXC031CvgVXL89V5p-nY&usqp=CAU)",
          backgroundSize:"contain",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center"
        }}></div>
    </div>
  );
};

export default Voices;
