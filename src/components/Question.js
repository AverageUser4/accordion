import React from 'react';

export default function Question({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="question">

      <div className="question__top">

        <h2 className="heading heading--small">{question}</h2>

        <button 
          className="toggle-button"
          onClick={() => setIsOpen(prev => !prev)}
        >{isOpen ? '-' : '+'}</button>

      </div>

      {isOpen && <p className="question__answer">{answer}</p>}
      
    </section>
  );
}