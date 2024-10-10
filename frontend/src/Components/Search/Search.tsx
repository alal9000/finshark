import { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: SyntheticEvent) => void;
  search: string;
}

export const Search = ({ handleChange, handleSubmit, search }: Props): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
};
