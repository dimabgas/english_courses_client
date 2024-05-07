import React, { useState, useCallback, useEffect } from "react";
import { Button, Input } from "@/components/controls";

import "./style.css";

export const levelsOptions = [
  { id: "A1", value: "A1" },
  { id: "A2", value: "A2" },
  { id: "B1", value: "B1" },
  { id: "B2", value: "B2" },
  { id: "C1", value: "C1" },
  { id: "C2", value: "C2" },
];

console.log(levelsOptions.map(({ value }) => value));

const SetLevelForm = ({ initialLevels, setLevels }) => {
  const [localLevels, setLocalLevels] = useState([]);

  useEffect(() => {
    setLocalLevels(initialLevels);
  }, [initialLevels]);

  const handleChange = useCallback(
    (event) => {
      const { value } = event.target;

      if (localLevels.includes(value)) {
        console.log("a", localLevels.includes(value));
        setLocalLevels(localLevels.filter((level) => level !== value));
      } else {
        setLocalLevels([...localLevels, value]);
      }
    },
    [localLevels]
  );

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setLevels({ levels: localLevels });
    },
    [localLevels, setLevels]
  );

  console.log(
    "🚀 ~ file: component.jsx ~ line 63 ~ SetLevelForm ~ setLevels",
    setLevels
  );

  return (
    <form className="set-level_form" onSubmit={handleFormSubmit}>
      {levelsOptions.map(({ id, value }) => (
        <div key={id}>
          <Input
            id={id}
            value={value}
            type="checkbox"
            checked={localLevels.includes(value)}
            onInputChange={handleChange}
          />
          <span>{value}</span>
        </div>
      ))}
      <Button size="lg" type="submit" text="Submit" />
    </form>
  );
};

export default SetLevelForm;
