import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import chatboxImage from "./assets/chatbox-icon.svg";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { ChatContainer, Topbar } from "./components";

function App() {
  const [chatbox, setChatbox] = useState(false);
  const [QnAs, setQnAs] = useState([]);
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState("");
  const buttonsPressed = useRef({ ctrl: false, space: false });

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

  const toggleChatbox = () => {
    setChatbox(!chatbox);
  };

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
      <ChatContainer />
      {/* <div className="chatbox">
        <div
          className={classNames(
            "chatbox__support",
            chatbox && "chatbox--active"
          )}
        >
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img
                src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                alt="image"
              />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">
                Hi. Welcome to Exarta. How can I help you?
              </p>
              <p
                className="chatbox__description--header"
                style={{ fontSize: "12px", marginTop: "5px" }}
              >
                Press Ctrl + space to take input from mic
              </p>
            </div>
          </div>
          <div className="chatbox__messages">
            {QnAs.map((m) => {
              if (m.name === "Exarta")
                return (
                  <div
                    key={Math.random()}
                    className="messages__item messages__item--visitor"
                  >
                    {m.message}
                  </div>
                );
              return (
                <div
                  key={Math.random()}
                  className="messages__item messages__item--operator"
                >
                  {m.message}
                </div>
              );
            })}
          </div>
          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />

            <button
              className="chatbox__send--footer send__button"
              onClick={sendQuestionToBot}
            >
              Send
            </button>

            <button
              id="speech"
              className="btn m-left type2"
              onClick={() => setListening(!listening)}
            >
              {listening && <div className="pulse-ring"></div>}
              <BsMic className="micIcon" />
            </button>
          </div>
        </div>
        <div className="chatbox__button" onClick={toggleChatbox}>
          <button>
            <img src={chatboxImage} />
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
