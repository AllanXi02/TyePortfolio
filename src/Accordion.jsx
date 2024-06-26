import { useState } from "react";
import "./Accordion.css";

function Accordion({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggle() {
    setIsExpanded(!isExpanded);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleToggle();
    }
  }

  return (
    <div
      className="accordion"
      aria-label="accordion"
      role="button"
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      <div className="accordion-header">
        <h3>{title} <span>{isExpanded ? "-" : "+"}</span></h3>
      </div>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;
