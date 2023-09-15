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
        const response = await openai.Completion.create({
            engine: 'gpt3',
            prompt: question,
            max_tokens: 100,
            n: 1,
            stop: '\n',
            temperature: .9,
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
              
            />
            <button type="submit" className="chat-send-btn">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      );
    }
    
    export default Form;