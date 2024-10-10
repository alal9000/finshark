import { ChangeEvent, SyntheticEvent, useState } from "react";

import { CompanySearch } from "./Types/company";
import { Search } from "./Components/Search/Search";
import { searchCompanies } from "./Api/api";

function App() {
  const [search, setSearch] = useState<string>(""); // users search query
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]); // store data returned from API call
  const [serverError, setServerError] = useState<string>(""); // store error returned from API call

  // event handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // for changes to the input value
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => { // when search form is submitted
    const result = await searchCompanies(search);
    // type narrowing
    if (typeof result === "string") {
      setServerError(result); // store API error to be displayed
    } else if (Array.isArray(result.data)) {
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
          handleSubmit={handleSubmit}
          search={search}
        />
      </div>
    </>
  );
}

export default App;
