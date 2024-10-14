import { ChangeEvent, useState } from "react";
import { CompanySearch } from "./Types/company";
import CardList from './Components/CardList/CardList';
import { Search } from "./Components/Search/Search";
import { searchCompanies } from "./Api/api";

function App() {
  const [search, setSearch] = useState<string>(""); // users search query
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]); // store company data returned from successful API call
  const [serverError, setServerError] = useState<string>(""); // store error returned from failed API call

  // event handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // for changes to the input value
    setSearch(e.target.value);
  };

  const handleClick = async () => { // when search form is submitted
    const result = await searchCompanies(search); // make a call to the API
    // type narrowing
    if (typeof result === "string") { // means we got an error
      setServerError(result); // store API error to be displayed
    } else if (Array.isArray(result.data)) { // means API call was successful
      setSearchResult(result.data); // store API results to be displayed
    }
    console.log(searchResult); 
  };

  // JSX
  return (
    <>
      <div className="App">
        {/* pass down three props to child component from parent: 1 state variable and two functions */}
        <Search
          handleChange={handleChange}
          handleClick={handleClick}
        />
         {serverError && <h1>{serverError}</h1>}
        <CardList searchResult={searchResult} />
      </div>
    </>
  );
}

export default App;
