import React from "react";
import { useReducer } from "react";
import PropTypes from "prop-types";
import { QuizCard } from "../../components/QuizCard/QuizCard";
import { useState } from "react";
import { Hero } from "../../components/Hero/Hero";
import "./UserHome.css";

const registered = [
  {
    quizType: "General Quiz",
    quizName: "Generally a quiz",
    image: "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/63fd90f31203c_json_image_1677562099.webp",
    time: "10:00 AM",
    month: "JAN",
    day: "12",
  },
  {
    quizType: "Bussiness Quiz",
    quizName: "Busssy Busincess",
    image: "https://img.freepik.com/premium-vector/brain-teasers-quiz-night-event-flyer-template-vector-v2_351449-1155.jpg",
    time: "08:00 AM",
    month: "DEC",
    day: "20",
  }
];

const available = [
  {
    quizType: "Sports Quiz",
    quizName: "Sports is cool",
    image: "https://img.freepik.com/free-vector/quiz-night-concept-illustration_114360-1334.jpg?size=626&ext=jpg",
    time: "09:00 PM",
    month: "JUN",
    day: "23",
  },
  {
    quizType: "Entertainment Quiz",
    quizName: "Entertainment is cool",
    image: "https://img.freepik.com/free-vector/quiz-night-concept-illustration_114360-1334.jpg?size=626&ext=jpg",
    time: "09:00 PM",
    month: "JUN",
    day: "23",
  },
  {
    quizType: "Science Quiz",
    quizName: "Science is cool",
    image: "https://img.freepik.com/free-vector/quiz-night-concept-illustration_114360-1334.jpg?size=626&ext=jpg",
    time: "09:00 AM",
    month: "APR",
    day: "01",
  },
  {
    quizType: "Science Quiz",
    quizName: "Science is cool",
    image: "https://img.freepik.com/free-vector/quiz-night-concept-illustration_114360-1334.jpg?size=626&ext=jpg",
    time: "09:00 AM",
    month: "APR",
    day: "01",
  },
  {
    quizType: "Science Quiz",
    quizName: "Science is cool",
    image: "https://img.freepik.com/free-vector/quiz-night-concept-illustration_114360-1334.jpg?size=626&ext=jpg",
    time: "09:00 AM",
    month: "APR",
    day: "01",
  },
];

export const UserHome = ({property}) => {
  const [state, dispatch] = useReducer(reducer, {
    property: property || "registered",
  });

  const [quizList, setQuizList] = useState(registered);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const newList = state.property === "registered" ? registered : available;
    const filtered = newList.filter((quiz) => {
      console.log(quiz.quizName.toLowerCase().includes(term.toLowerCase()));
      return quiz.quizName.toLowerCase().includes(term.toLowerCase());
    });
    setQuizList(filtered);
  }

  const updateState = () => {
    dispatch("click");
    if (state.property === "registered") {
      setQuizList(available);
    } else {
      setQuizList(registered);
    }
  };

  return (
    <div className="user-home">
      <Hero property={state.property} updateState={updateState} searchTerm={searchTerm} handleSearch={handleSearch}/>
      <div className={`quiz-list ${state.property}`}>
        {state.property === "registered" ? (
          <div  className="list-of-quizzes">
            {quizList.map((quiz) => (
              <QuizCard
                quizType={quiz.quizType}
                quizName={quiz.quizName}
                image={quiz.image}
                time={quiz.time}
                month={quiz.month}
                day={quiz.day}
              />
            ))}
          </div>
        ):(
          <div className="list-of-quizzes">
            {quizList.map((quiz) => (
              <QuizCard
                quizType={quiz.quizType}
                quizName={quiz.quizName}
                image={quiz.image}
                time={quiz.time}
                month={quiz.month}
                day={quiz.day}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const reducer = ( state, action ) => {
  if (state.property === "registered") {
    switch (action) {
      case "click":
        return {
          property: "available",
        };
    }
  }

  if (state.property === "available") {
    switch (action) {
      case "click":
        return {
          property: "registered",
        };
    }
  }

  return state;
}

UserHome.propTypes = {
  property: PropTypes.oneOf(["available", "registered"]),
};
