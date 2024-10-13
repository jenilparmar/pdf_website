function speak(text , voiceNumber=0) {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);
  
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[voiceNumber]; // Choose a specific voice
    
    
    // Speak the text
    speechSynthesis.speak(utterance);
}
export default speak