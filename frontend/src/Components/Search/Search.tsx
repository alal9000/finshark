import { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onClick, search, handleChange }: Props): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => onClick(e)}>Submit</button>
    </div>
  );
};

export default Search;
