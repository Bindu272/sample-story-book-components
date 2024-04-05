import React, { useState } from "react";

interface DropdownProps{
    options:string[];
    onSelect:(option:string)=>void
}
const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
      onSelect(option);
    };
    return (
        <div className="dropdown-container">
          <select
            value={selectedOption || ''}
            onChange={(e) => handleOptionSelect(e.target.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    };
    
    export default Dropdown;