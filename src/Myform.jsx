import { useState } from "react";
import { useId } from "react";
import "./Myform.css";

function Form() {
  const [selectedOption, setSelectedOption] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [validationError, setValidationError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const selectId = useId();

  const [number, setNumber] = useState("");
  const [extra, setExtra] = useState("");

  function isValidEmail(email) {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleOptionChange(event) {
    const value = event.target.value;
    setSelectedOption(value);
    setUsername("");
    setEmail("");
    setNumber("");
    setExtra("");
    if (value === "option1" && isValidEmail(email)) {
      setSubmitDisabled(false);
    } else if (value === "option2" || value === "other") {
      if (isValidEmail(email)) {
        setSubmitDisabled(false);
      } else {
        setSubmitDisabled(true);
      }
    } else {
      setSubmitDisabled(true);
    }
    setSubmitDisabled(true);
    setValidationError("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    // 对于选择了 "option1"、"option2" 或 "other" 的情况，执行电子邮件验证
    if (
      selectedOption === "option1" ||
      selectedOption === "option2" ||
      selectedOption === "other"
    ) {
      if (isValidEmail(event.target.value)) {
        setSubmitDisabled(false);
        setValidationError("");
      } else {
        setSubmitDisabled(true);
        setValidationError("Please enter a valid email address.");
      }
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    setShowModal(true);
  }
  function handleNumberChange(event) {
    setNumber(event.target.value);
  }

  function handleExtraChange(event) {
    setExtra(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} action="/submit-form" method="POST"  aria-label="{submit-form}" >
      <div className="form-group">
        <h2>Register now</h2>
        <label htmlFor={selectId}>Select an option:</label>
        <select
          id={selectId}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">-- Select an option --</option>
          <option value="option1">Normal Sign Up </option>
          <option value="option2">Register with Number</option>
          <option value="other">Want extra complex options</option>
        </select>
      </div>
      {showModal && (
        <dialog open>
          <h3>Here is what you have submitted:</h3>
          {selectedOption === "option1" && (
            <>
              <p>Username: {username}</p>
              <p>Email: {email}</p>
            </>
          )}
          {selectedOption === "option2" && (
            <>
              <p>Username: {username}</p>
              <p>Email: {email}</p>
              <p>Number: {number}</p>
            </>
          )}
          {selectedOption === "other" && (
            <>
              <p>Username: {username}</p>
              <p>Email: {email}</p>
              <p>Extra demand: {extra}</p>
            </>
          )}
          <button onClick={() => setShowModal(false)}>Close</button>
        </dialog>
      )}

      {selectedOption && (
        <div className="form-group">
          <label htmlFor={`${selectId}-username`}>Username:</label>
          <input
            type="text"
            id={`${selectId}-username`}
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor={`${selectId}-email`}>Email:</label>
          <input
            type="text"
            id={`${selectId}-email`}
            value={email}
            onChange={handleEmailChange}
          />
          {validationError && (
            <div className="error-message">{validationError}</div>
          )}
        </div>
      )}
      {selectedOption === "option2" && (
        <div className="form-group">
          <label htmlFor={`${selectId}-number`}>Number:</label>
          <input
            type="text"
            id={`${selectId}-number`}
            value={number}
            onChange={handleNumberChange}
          />
          {validationError && (
            <div className="error-message">{validationError}</div>
          )}
        </div>
      )}
      {selectedOption === "other" && (
        <div className="form-group">
          <label htmlFor={`${selectId}-number`}>Extra demand:</label>
          <input
            type="text"
            id={`${selectId}-number`}
            value={extra}
            onChange={handleExtraChange}
          />
          {validationError && (
            <div className="error-message">{validationError}</div>
          )}
        </div>
      )}

      <button type="submit" disabled={submitDisabled}>
        Submit
      </button>
    </form>
  );
}

export default Form;
