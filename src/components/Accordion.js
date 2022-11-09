import React from 'react';

import Question from './Question.js';

import questionsData from '../resources/questions.js';

export default function Accordion() {
  const questionElements = questionsData.map(question =>
    <Question
      key={question.id}
      question={question.title}
      answer={question.info}
    />  
  );

  return (
    <article className="accordion">

      <h1 className="heading heading--big">questions and answers about login</h1>

      <div>
        {questionElements}
      </div>

    </article>
  );
}