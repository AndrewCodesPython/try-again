import openai from 'openai';
import React, { useState } from 'react';
import './form.css';

const API_KEY = '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'
function Form() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
    try {
        const response = await openai.createCompletion({
            model: 'gpt-3.5-turbo',
            prompt: question,
            max_tokens: 100,
            n: 1,
            stop: '\n',
            temperature: 1.17,
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            }
});

        if (response.choices && response.choices.length > 0) {
            setResponse(response.choices[0].text);
        } else {
            setResponse('Sorry, I could not generate a response.');
        }
} catch (error) {

    console.error(error);
    setResponse('Error generating response.');
}

    };


    return (
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form__input-container">
          <textarea
            className="Form__input"
            placeholder="Message The Muse"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <button type="submit" className="chat-send-btn">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
        {response && (
          <div className="Form__response">
            <p>{response}</p>
          </div>
        )}
      </form>
    );
    }
    
    export default Form;