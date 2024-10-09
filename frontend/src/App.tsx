import { ChangeEvent, SyntheticEvent, useState } from "react";

import { CompanySearch } from "./Types/company";
import { Search } from "./Components/Search/Search";
import { searchCompanies } from "./Api/api";

function App() {
  const [search, setSearch] = useState<string>(""); // users search query
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]); // data returned from API
  const [serverError, setServerError] = useState<string>(""); // errors returned from server

  // event handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  // JSX
  return (
    <>
      <div className="App">
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
