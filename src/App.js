import { useEffect, useRef, useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { ChatContainer, Topbar } from "./components";

function App() {
  const [QnAs, setQnAs] = useState([]);
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState("");

  const {
    transcript,
    // listening,
    resetTranscript,
    finalTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert("Browser doesn't support speech recognition.");
      return;
    }
    if (listening) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
  }, [listening]);

  useEffect(() => {
    if (finalTranscript) {
      setMessage(finalTranscript);
      resetTranscript();
    } else if (transcript) {
      setMessage(transcript);
    }
  }, [finalTranscript, transcript]);

  const sendQuestionToBot = async () => {
    const TQnAs = QnAs;
    TQnAs.unshift({ name: "user", message: message });
    setQnAs(TQnAs);
    setMessage("");
    resetTranscript();
    try {
      const res = await axios.post(
        `https://6ab7-2407-aa80-116-41ec-8168-3bd7-6cbe-346a.ap.ngrok.io/predict`,
        JSON.stringify({ message: message }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const TQnAs = QnAs;
      speech.text = res.data.answer;
      window.speechSynthesis.speak(speech);
      setQnAs([{ name: "Exarta", message: res.data.answer }, ...QnAs]);
    } catch (error) {
      console.log("API ERROR", error);
    }
  };

  return (
    <div className="container">
      <Topbar />
      <ChatContainer
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        userInput={message}
        listening={listening}
        setListening={setListening}
        sendQuestionToBot={sendQuestionToBot}
        QnAs={QnAs}
      />
    </div>
  );
}

export default App;
