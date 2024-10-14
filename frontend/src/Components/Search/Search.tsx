import { ChangeEvent } from "react";

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

export const Search = ({ handleChange, handleClick }: Props): JSX.Element => {
  return (
    <div>
      <input onChange={(e) => handleChange(e)}></input>
      <button onClick={() => handleClick()}>Go</button>
    </div>
  );
};
