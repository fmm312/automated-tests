import { useState } from "react";

export const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelection(option) {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        {title}
      </button>

      {isOpen && (
        <ul role="menu">
          {options.map(option => (
            <li 
              key={option} 
              role="menuitem"
              onClick={() => handleSelection(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}