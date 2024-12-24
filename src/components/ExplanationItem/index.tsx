import React, { useState } from "react";
import { QuestionAnswer } from "../../models/types/types";
import ReactMarkdown from "react-markdown";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./ExplanationItem.css";

interface ExplanationItemProps {
  explanationModel: QuestionAnswer;
}

const ExplanationItem: React.FC<ExplanationItemProps> = ({ explanationModel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, example } = explanationModel;

  return (
    <div className="explanation-item">
      <div 
        className="explanation-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="explanation-title">{title}</h3>
        {isOpen ? (
          <ChevronUp className="explanation-icon" />
        ) : (
          <ChevronDown className="explanation-icon" />
        )}
      </div>
      <div className={`explanation-answer ${isOpen ? "open" : ""}`}>
        <div className="explanation-answer-content">
          {example && (
            <ReactMarkdown className="explanation-answer-text">
              {example}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplanationItem;

