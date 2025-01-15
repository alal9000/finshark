import React, { ChangeEvent, useEffect, useState } from "react";
import { CompanySearch } from "../../Types/company";
import { searchCompanies } from "../../Api/api";
import Navbar from "../../Components/Navbar/Navbar";
import { Search } from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { PortfolioGet } from "../../Models/Portfolio";
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from "../../Services/PortfolioService";
import { toast } from "react-toastify";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>(""); // users search query
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]); // store company data returned from successful API call
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
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

  useEffect(() => {
    getPortfolio();
  }, [])

  const getPortfolio = () => {
    portfolioGetAPI()
    .then((res) => {
      if (res?.data) {
        setPortfolioValues(res?.data);
      }
    }).catch((e) => {
      toast.warning("Could not get portfolio values!");
    })
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
    .then((res) => {
      if (res?.status === 204) {
        toast.success("Stock added to portfolio!");
        getPortfolio();
      }
    }).catch((e) => {
      toast.warning("Could not create portfolio item!");
    })
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value)
    .then((res) => {
      if (res?.status === 200) {
        toast.success("Stock deleted from portfolio!");
        getPortfolio();
      }
    })

  };

  return (
    <>
      <div className="App">
        {/* pass down three props to child component from parent: 1 state variable and two functions */}
        <Search handleChange={handleChange} handleClick={handleClick} />
        <ListPortfolio
          portfolioValues={portfolioValues!}
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
