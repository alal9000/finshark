import React, { ChangeEvent, useState } from "react";
import { CompanySearch } from "../../Types/company";
import { searchCompanies } from "../../Api/api";
import Navbar from "../../Components/Navbar/Navbar";
import { Search } from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>(""); // users search query
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]); // store company data returned from successful API call
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string>(""); // store error returned from failed API call

  // event handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // for changes to the input value
    setSearch(e.target.value);
  };

  const handleClick = async () => {
    // when search form is submitted
    const result = await searchCompanies(search); // make a call to the API
    // type narrowing
    if (typeof result === "string") {
      // means we got an error
      setServerError(result); // store API error to be displayed
    } else if (Array.isArray(result.data)) {
      // means API call was successful
      setSearchResult(result.data); // store API results to be displayed
    }
    // console.log(searchResult);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    console.log(e);
    console.log(portfolioValues);
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio); // creates a new array in memory so react knows the state has changed
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  return (
    <>
      <div className="App">
        {/* pass down three props to child component from parent: 1 state variable and two functions */}
        <Search handleChange={handleChange} handleClick={handleClick} />
        <ListPortfolio
          portfolioValues={portfolioValues}
          onPortfolioDelete={onPortfolioDelete}
        />
        <CardList
          searchResult={searchResult}
          onPortfolioCreate={onPortfolioCreate}
        />
        {serverError && <h1>{serverError}</h1>}
      </div>
    </>
  );
};

export default SearchPage;
