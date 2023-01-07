import { useState, KeyboardEvent } from "react";

type Props = {
  onCreate: (value: string) => void;
};

export default function Create({ onCreate }: Props) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onCreate(value);
      setValue("");
    }
  };

  return (
    <div>
      <input
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
