import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const apikey = process.env.REACT_APP_GEMINI_API_KEY;

  const generateAnswer = async () => {
    setAnswer("Loading...");
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apikey}`,
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );
      setAnswer(response.data.candidates[0].content.parts[0].text);
      setQuestion("");
    } catch (error) {
      console.error("Error fetching response:", error);
      setAnswer("Error: Failed to fetch response");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">FitFusion Chatbot</h1>
        </header>
        <div className="mb-4">
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Ask anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="5"
          ></textarea>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={generateAnswer}
        >
          Generate Answer
        </button>
        <div className="mt-4">
          <p className="text-gray-700 font-semibold mb-2">Answer:</p>
          <pre className="w-full bg-gray-100 p-2 rounded-md overflow-y-auto" style={{ maxHeight: '150px', overflowWrap: 'break-word', wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
            {answer}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
