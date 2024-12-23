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
      {questions.map((qa) => (
        <QuestionItem key={qa.id} questionModel={qa} />
      ))}
    </div>
  );
};

export default QuestionList;
