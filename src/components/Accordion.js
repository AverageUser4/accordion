import React from 'react';

import Question from './Question.js';

import questionsData from '../resources/questions.js';

export default function Accordion() {
  const [questions, setQuestions] = React.useState(questionsData.map(question => ({
    ...question,
    isOpen: false
  })));

  const questionElements = questions.map(question =>
    <Question
      key={question.id}
      question={question.title}
      answer={question.info}
      isOpen={question.isOpen}
      toggleOpen={toggleOpen.bind(null, question.id)}
    />  
  );

  function toggleOpen(id) {
    setQuestions(questions => questions.map(question =>
      question.id !== id ? 
      { ...question, isOpen: false } :
      { ...question, isOpen: !question.isOpen }
    ));
  }

  return (
    <article className="accordion">

      <h1 className="heading heading--big">questions and answers about login</h1>

      <div>
        {questionElements}
      </div>

    </article>
  );
}