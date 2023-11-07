import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file

function App() {
  const [formData, setFormData] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);

  const handleRadioChange = (question, value) => {
    setFormData({
      ...formData,
      [question]: value,
    });
  };

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <h1>
            <i className="fa-solid fa-leaf"></i>MindfulHub
          </h1>
        </div>
        <div className="panel">
          <a href="#">Home</a>
          <a href="#">Blogs</a>
          <a href="#">Resources</a>
          <a href="#">Chat</a>
        </div>
      </div>
      <h1 style={{ marginLeft: '20px', paddingTop: '70px' }}>Survey Form</h1>
      <form action="submit_survey.php" method="post" className="form1">
        {/* Your survey questions and radio buttons */}
        {/* Question 1 */}
        <div className="question">
          <p>Question 1: Have you been able to concentrate on what you are doing</p>
          <br />
          <input type="radio"  name="q1" value="1"  onChange={() => handleRadioChange('q1', 1)} /> Strongly agree
          <input type="radio"  name="q1" value="1"  onChange={() => handleRadioChange('q1', 1)} /> Agree
          <input type="radio"  name="q1" value="1"  onChange={() => handleRadioChange('q1', 1)} /> Neutral
          <input type="radio"  name="q1" value="1"  onChange={() => handleRadioChange('q1', 1)} /> Disagree
          <input type="radio"  name="q1" value="1"  onChange={() => handleRadioChange('q1', 1)} /> Strongly Disagree
          
          <p>Question 2:Have you recently lost much sleep over worry?</p>          <br />
          <input type="radio"  name="q2" value="2"  onChange={() => handleRadioChange('q2', 2)} /> Strongly agree
          <input type="radio"  name="q2" value="2"  onChange={() => handleRadioChange('q2', 2)} /> Agree
          <input type="radio"  name="q2" value="2"  onChange={() => handleRadioChange('q2', 2)} /> Neutral
          <input type="radio"  name="q2" value="2"  onChange={() => handleRadioChange('q2', 2)} /> Disagree
          <input type="radio"  name="q2" value="2"  onChange={() => handleRadioChange('q2', 2)} /> Strongly Disagree

          <p>Question 3: Have you recently felt you were playing a useful part in things?</p>
          <br />
          <input type="radio"  name="q3" value="3"  onChange={() => handleRadioChange('q3', 3)} /> Strongly agree
          <input type="radio"  name="q3" value="3"  onChange={() => handleRadioChange('q3', 3)} /> Agree
          <input type="radio"  name="q3" value="3"  onChange={() => handleRadioChange('q3', 3)} /> Neutral
          <input type="radio"  name="q3" value="3"  onChange={() => handleRadioChange('q3', 3)} /> Disagree
          <input type="radio"  name="q3" value="3"  onChange={() => handleRadioChange('q3', 3)} /> Strongly Disagree

          <p>Question 4: Have you recently felt capable of making decisions about things?</p>
          <br />
          <input type="radio"  name="q4" value="4"  onChange={() => handleRadioChange('q4', 4)} /> Strongly agree
          <input type="radio"  name="q4" value="4"  onChange={() => handleRadioChange('q4', 4)} /> Agree
          <input type="radio"  name="q4" value="4"  onChange={() => handleRadioChange('q4', 4)} /> Neutral
          <input type="radio"  name="q4" value="4"  onChange={() => handleRadioChange('q4', 4)} /> Disagree
          <input type="radio"  name="q4" value="4"  onChange={() => handleRadioChange('q4', 4)} /> Strongly Disagree

          <p>Question 5: Have you recently felt constantly under strain?</p>
          <br />
          <input type="radio"  name="q5" value="5"  onChange={() => handleRadioChange('q5', 5)} /> Strongly agree
          <input type="radio"  name="q5" value="5"  onChange={() => handleRadioChange('q5', 5)} /> Agree
          <input type="radio"  name="q5" value="5"  onChange={() => handleRadioChange('q5', 5)} /> Neutral
          <input type="radio"  name="q5" value="5"  onChange={() => handleRadioChange('q5', 5)} /> Disagree
          <input type="radio"  name="q5" value="5"  onChange={() => handleRadioChange('q5', 5)} /> Strongly Disagree

          <p>Question 6: Have you felt you couldn't overcome your difficulties</p>
          <br />
          <input type="radio"  name="q6" value="6"  onChange={() => handleRadioChange('q6', 6)} /> Strongly agree
          <input type="radio"  name="q6" value="6"  onChange={() => handleRadioChange('q6', 6)} /> Agree
          <input type="radio"  name="q6" value="6"  onChange={() => handleRadioChange('q6', 6)} /> Neutral
          <input type="radio"  name="q6" value="6"  onChange={() => handleRadioChange('q6', 6)} /> Disagree
          <input type="radio"  name="q6" value="6"  onChange={() => handleRadioChange('q6', 6)} /> Strongly Disagree

          <p>Question 7: Have you been able to enjoy your normal day-to-day activities</p>
          <br />
          <input type="radio"  name="q7" value="7"  onChange={() => handleRadioChange('q7', 7)} /> Strongly agree
          <input type="radio"  name="q7" value="7"  onChange={() => handleRadioChange('q7', 7)} /> Agree
          <input type="radio"  name="q7" value="7"  onChange={() => handleRadioChange('q7', 7)} /> Neutral
          <input type="radio"  name="q7" value="7"  onChange={() => handleRadioChange('q7', 7)} /> Disagree
          <input type="radio"  name="q7" value="7"  onChange={() => handleRadioChange('q7', 7)} /> Strongly Disagree

          <p>Question 8: Have you been able to face up to your problems?</p>
          <br />
          <input type="radio"  name="q8" value="8"  onChange={() => handleRadioChange('q8', 8)} /> Strongly agree
          <input type="radio"  name="q8" value="8"  onChange={() => handleRadioChange('q8', 8)} /> Agree
          <input type="radio"  name="q8" value="8"  onChange={() => handleRadioChange('q8', 8)} /> Neutral
          <input type="radio"  name="q8" value="8"  onChange={() => handleRadioChange('q8', 8)} /> Disagree
          <input type="radio"  name="q8" value="8"  onChange={() => handleRadioChange('q8', 8)} /> Strongly Disagree

          <p>Question 9:Have you recently been feeling unhappy and depressed?</p>
          <br />
          <input type="radio"  name="q9" value="9"  onChange={() => handleRadioChange('q9', 9)} /> Strongly agree
          <input type="radio"  name="q9" value="9"  onChange={() => handleRadioChange('q9', 9)} /> Agree
          <input type="radio"  name="q9" value="9"  onChange={() => handleRadioChange('q9', 9)} /> Neutral
          <input type="radio"  name="q9" value="9"  onChange={() => handleRadioChange('q9', 9)} /> Disagree
          <input type="radio"  name="q9" value="9"  onChange={() => handleRadioChange('q9', 9)} /> Strongly Disagree

          <p>Question 10: Have you recently been losing confidence in yourself?</p>
          <br />
          <input type="radio"  name="q10" value="10"  onChange={() => handleRadioChange('q10', 10)} /> Strongly agree
          <input type="radio"  name="q10" value="10"  onChange={() => handleRadioChange('q10', 10)} /> Agree
          <input type="radio"  name="q10" value="10"  onChange={() => handleRadioChange('q10', 10)} /> Neutral
          <input type="radio"  name="q10" value="10"  onChange={() => handleRadioChange('q10', 10)} /> Disagree
          <input type="radio"  name="q10" value="10"  onChange={() => handleRadioChange('q10', 10)} /> Strongly Disagree
        </div>
        
      </form>
      <div className="container">
        <button type="submit" className="btn" onClick={openPopup}>
          Submit
        </button>
        {popupVisible && (
          <div className="popup" id="popup">
            <img src="./tick.jpg" alt="Tick" />
            <h2>Thank You!</h2>
            <p>Your details have been successfully submitted. Thanks!</p>
            <button type="button" onClick={closePopup}>
              OK
            </button>
          </div>
        )}
      </div>
      <footer className="footer">
        <div className="left">
          <h1>MindfulHub</h1>
        </div>
        <div className="right">
          <div className="content">
            <div>Blogs</div>
            <div>Resources</div>
            <div>FAQ</div>
          </div>
          <br />
          <div>
            <b>Help:</b> help@mindfulhub.com
          </div>
          <div>
            <b>Support:</b> support@mindfulhub.com
          </div>
          <div>
            <b>Contact Us:</b> +1(123)-456-7890
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
