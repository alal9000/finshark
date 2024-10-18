import { ChangeEvent } from "react";

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

export const Search = ({ handleChange, handleClick }: Props): JSX.Element => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3">
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            onChange={(e) => handleChange(e)}
          ></input>
          <button type="button" onClick={() => handleClick()}>
            Go
          </button>
        </form>
      </div>
    </section>
  );
};
