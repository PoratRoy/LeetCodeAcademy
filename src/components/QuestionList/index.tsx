import React from "react";
import { QuestionAnswer } from "../../models/types/types";
import QuestionItem from "../QuestionItem";
import "./QuestionList.css";

interface QuestionListProps {
  questions: QuestionAnswer[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <div className="question-list">
      {questions.map((qa, i) => (
        <QuestionItem key={i} questionModel={qa} />
      ))}
    </div>
  );
};

export default QuestionList;
