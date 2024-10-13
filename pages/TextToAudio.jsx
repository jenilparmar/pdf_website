'use client'
import Voices from "@/Components/Voices";
import React, { useState } from "react";

import AppFooter from "@/Components/AppFooter";
function speak(text , voiceNumber=0) {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[voiceNumber]; // Choose a specific voice
  
  
  // Speak the text
  speechSynthesis.speak(utterance);
}
function TextToAudio() {
  const [text, setText] = useState("This is a Sample voice");
  const [voiceNumber, setVoiceNumber] = useState(0);

  const handleSpeak = () => {
    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    // Run the speak function
    speak(text, voiceNumber);
  };

  return (
    <>
    <div className="w-full flex flex-col pt-20 h-fit justify- mb-10">
      <Voices setVoiceNumber={setVoiceNumber} />
      <textarea
        name=""
        id=""
        placeholder="Type Something..."
        className="bg-gray-200 h-fit py-2 min-h-60 rounded-lg text-black mx-5 md:mx-10 mt-2  placeholder:px-2 "
        onChange={(e) => setText(e.target.value)}></textarea>
    <div className="flex flex-col  md:flex-row self-center gap-2 mt-5">
    <button
        onClick={handleSpeak}
        className="px-9 py-4 active:scale-95 max-w-60 duration-100 transition-all self-center bg-blue-500 font-semibold text-xl rounded-md">
        Read Aloud
      </button>
      <button
        onClick={()=>{
          window.speechSynthesis.cancel();
        }}
        className="px-6 py-4 active:scale-95 duration-100 transition-all self-center bg-blue-500 font-semibold text-xl rounded-md">
        Stop Narration
      </button>
    </div>
    </div>
<AppFooter/>
    </>
  );
}

export default TextToAudio;
