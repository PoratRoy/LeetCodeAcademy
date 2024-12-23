import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./QuestionItem.css";
import { QuestionAnswer } from "../../models/types/types";
import { Editor } from "@monaco-editor/react";

interface QuestionItemProps {
  questionModel: QuestionAnswer;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ questionModel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, question, example, answer, code, level } = questionModel;

  return (
    <div className="question-item">
      <div className="title-container">
        <span className="difficulty-level">רמת קושי {level}</span>
        <h3 className="question-subtitle">{title}</h3>
        <h2 className="question-title">{question}</h2>
        {example && (
          <div className="code-editor-box">
            <h4 className="example-title">דוגמא:</h4>
            <pre>
              <code>{example}</code>
            </pre>
          </div>
        )}
      </div>
      <div className="answer-reveal" onClick={() => setIsOpen(!isOpen)}>
        <span className="answer-text">תשובה</span>
        {isOpen ? (
          <ChevronUp className="question-icon" />
        ) : (
          <ChevronDown className="question-icon" />
        )}
      </div>
      <div className={`question-answer ${isOpen ? 'open' : ''}`}>
        <div className="question-answer-content">
        {code && (
            <div className="code-editor-box answer-code">
              <Editor
                height={`${code.split('\n').length * 21}px`}
                defaultLanguage="cpp"
                defaultValue={code}
                theme="vs-dark"
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                  wrappingStrategy: "advanced",
                  lineNumbers: "on",
                  folding: true,
                  automaticLayout: true,
                }}
              />
            </div>
          )}
          <p className="question-answer-text">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
