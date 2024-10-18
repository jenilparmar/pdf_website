'use client'
import React, { useEffect, useState } from "react";
import Voices from "@/Components/Voices";
import AppFooter from "@/Components/AppFooter";

function speak(text, voiceNumber = 0) {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  if (voices.length > 0) {
    utterance.voice = voices[voiceNumber]; // Choose a specific voice
  }

  // Speak the text
  speechSynthesis.speak(utterance);
}

function TextToAudio() {
  const [text, setText] = useState("This is a Sample voice");
  const [voiceNumber, setVoiceNumber] = useState(0);
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  // Load voices on client-side only
  useEffect(() => {
    if (typeof window !== "undefined" && 'speechSynthesis' in window) {
      const loadVoices = () => {
        setVoicesLoaded(true);
      };

      // Trigger when voices are loaded
      window.speechSynthesis.onvoiceschanged = loadVoices;

      // Load voices immediately if already available
      if (speechSynthesis.getVoices().length > 0) {
        setVoicesLoaded(true);
      }
    }
  }, []);

  const handleSpeak = () => {
    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    // Ensure voices are loaded before speaking
    if (voicesLoaded) {
      speak(text, voiceNumber);
    } else {
      console.error("Voices not loaded yet.");
    }
  };

  return (
    <>
      <div className="w-full flex flex-col pt-20 h-fit mb-10">
        <Voices setVoiceNumber={setVoiceNumber} />
        <textarea
          placeholder="Type Something..."
          className="bg-gray-200 h-fit py-2 min-h-60 rounded-lg text-black mx-5 md:mx-10 mt-2 placeholder:px-2"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="flex flex-col md:flex-row self-center gap-2 mt-5">
          <button
            onClick={handleSpeak}
            className="px-9 py-4 active:scale-95 max-w-60 duration-100 transition-all self-center bg-blue-500 font-semibold text-xl rounded-md"
          >
            Read Aloud
          </button>
          <button
            onClick={() => {
              window.speechSynthesis.cancel();
            }}
            className="px-6 py-4 active:scale-95 duration-100 transition-all self-center bg-blue-500 font-semibold text-xl rounded-md"
          >
            Stop Narration
          </button>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default TextToAudio;
