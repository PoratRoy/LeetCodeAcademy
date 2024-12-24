import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./QuestionItem.css";
import { QuestionAnswer } from "../../models/types/types";
import ReactMarkdown from 'react-markdown';
import { Editor } from "@monaco-editor/react";

interface QuestionItemProps {
  index: number;
  questionModel: QuestionAnswer;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  index,
  questionModel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const { title, question, example, answer, code, level, hint, stack } =
    questionModel;

  return (
    <div className="question-item">
      <div className="title-container">
        <span className="difficulty-level">רמת קושי {level}</span>
        <h3 className="question-subtitle">
          {index + 1}. {title}
        </h3>
        <h2 className="question-title">{question}</h2>
        {stack && (
          <div className="stack-list">
            {stack}
          </div>
        )}
        {example && (
          <div className="code-editor-box">
            <h4 className="example-title">דוגמא:</h4>
            <pre>
              <code>{example}</code>
            </pre>
          </div>
        )}
      </div>
      {hint && (
        <>
          <div
            className="answer-reveal"
            onClick={() => setIsHintOpen(!isHintOpen)}
          >
            <span className="answer-text">דרך לפתרון</span>
            {isHintOpen ? (
              <ChevronUp className="question-icon" />
            ) : (
              <ChevronDown className="question-icon" />
            )}
          </div>
          <div className={`question-answer ${isHintOpen ? "open" : ""}`}>
            <div className="question-answer-content">
              <ReactMarkdown className="question-answer-text">
                {hint}
              </ReactMarkdown>
            </div>
          </div>
        </>
      )}
      <div className="answer-reveal" onClick={() => setIsOpen(!isOpen)}>
        <span className="answer-text">תשובה</span>
        {isOpen ? (
          <ChevronUp className="question-icon" />
        ) : (
          <ChevronDown className="question-icon" />
        )}
      </div>
      <div className={`question-answer ${isOpen ? "open" : ""}`}>
        <div className="question-answer-content">
          {code && (
            <div className="code-editor-box answer-code">
              <Editor
                height={`${code.split("\n").length * 21}px`}
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
          <ReactMarkdown className="question-answer-text">
            {answer}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
