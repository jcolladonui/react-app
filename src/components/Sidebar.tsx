import React from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectOption: (option: string) => void;
  selectedOption: string;
  textColor: string;
  backgroundColor: string;
  userLevel: number;
}

const Sidebar: React.FC<Props> = ({
  items,
  heading,
  onSelectOption,
  selectedOption,
  textColor,
  backgroundColor,
  userLevel,
}) => {
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <h1 style={{ textAlign: "center", padding: "20px 0", margin: 0 }}>
        {heading}
      </h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item) => {
          // Check if the current item is "Review Request" and user level is 1
          if (item === "Review Request" && userLevel === 1) {
            return null; // Don't render "Review Request" option
          }
          return (
            <li
              key={item}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
                backgroundColor:
                  selectedOption === item ? "#007bff" : "transparent",
                color: selectedOption === item ? "#fff" : textColor,
              }}
              onClick={() => onSelectOption(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
