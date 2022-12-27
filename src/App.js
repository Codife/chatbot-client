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

  let speech = new SpeechSynthesisUtterance({
    
  });
  speech.lang = "fr";

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

  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // window.speechSynthesis.lang = 'fr'
    // const userId = localStorage.getItem("userId");
    // if (userId) {
    // } else {
    //   localStorage.setItem(
    //     "userId",
    //     Math.floor(Math.random() * Math.random() * 30000)
    //   );
    // }
  };

  const sendQuestionToBot = async () => {
    if (!message) return;
    const TQnAs = QnAs;
    TQnAs.unshift({ name: "user", message: message });
    setQnAs(TQnAs);
    setMessage("");
    resetTranscript();
    try {
      const res = await axios.post(
        `https://5e97-2407-aa80-116-3eae-b114-f1e-18b5-bd30.ap.ngrok.io/predict`,
        JSON.stringify({ message: message, language: language }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const TQnAs = QnAs;
      speech.text = res.data.answer;
      console.log(speech);
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
        handleLanguageChange={handleLanguageChange}
        language={language}
      />
    </div>
  );
}

export default App;
