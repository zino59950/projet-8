import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isCollapsible1Open, setCollapsible1Open] = useState(false);
  const renderChevron = (isOpen) => {
    return (
      <FontAwesomeIcon
        icon={isOpen ? faChevronDown : faChevronUp}
        className={`chevron-icon ${isOpen ? "rotate" : ""}`}
      />
    );
  };
  return (
    <div className="collaps-content">
      <button
        className="collaps"
        onClick={() => setCollapsible1Open(!isCollapsible1Open)}
      >
        {title}
        {renderChevron(isCollapsible1Open)}
      </button>
      {isCollapsible1Open && (
        <div className="collaps-description">
          {/* Contenu de la collapsible 1 */}
          {content}
        </div>
      )}
    </div>
  );
};

export default Collapse;
