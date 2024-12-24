import React from "react";
import { QuestionAnswer } from "../../models/types/types";
import QuestionItem from "../QuestionItem";
import "./QuestionList.css";
import ExplanationItem from "../ExplanationItem";

interface QuestionListProps {
  questions: QuestionAnswer[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <div className="question-list">
      {questions.map((qa, i) => (
        qa.level === -1 ? (
          <ExplanationItem key={i} explanationModel={qa} />
        ) : (
          <QuestionItem key={i} index={i} questionModel={qa} />
        )
      ))}
    </div>
  );
};

export default QuestionList;
