import React from "react";
import { Button } from "../Button/Button";
import { Date } from "../Date/Date";
import "./QuizCard.css";
import QuizForm from "../QuizForm/QuizForm";

export const QuizCard = ({ quizType, quizName, image, month, day, time, buttonContent }) => {
  const [trigger, setTrigger] = React.useState(false);
  const clickHandler = () => {
    setTrigger(true);
  }

  const triggerHandler = () => {
    setTrigger(false);
  }

  return (
    <div className="quiz-card">
      <div className="quiz-poster">
        <img alt="Rectangle" src={image} />
      </div>
      <div className="details">
        <div className="main-details">
          <div className="data">
            <div className="quiz-type">{quizType}</div>
            <div className="quiz-name">{quizName}</div>
          </div>
          <Date month={month} day={day}/>
        </div>
        <div className="timer">
          <div className="time">{time}</div>
          <Button text={buttonContent} clickHandler={clickHandler}/>
        </div>
      </div>
      <QuizForm heading="Edit quiz details" trigger={trigger} triggerHandler={triggerHandler} image={image} quizName={quizName} quizType={quizType} quizDate={month} quizTime={time}/>
    </div>
  );
};