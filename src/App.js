import React, { useEffect, useState } from "react";
import SearchSection from "./components/SearchSection/SearchSection";
import SearchHistory from "./components/SearchHistory/SearchHistory";
import mockLocalStorage from "../public/json/mockLocalStorage.json";

function App() {
  const [searchHistoryList,setSearchHistoryList] = useState(
    mockLocalStorage
  );
  const [currentSearch, setCurrentSearch] = useState(
    mockLocalStorage[0]
  );

  return (
    <div className="App mx-auto" >
      <SearchSection setCurrentSearch={setCurrentSearch}/>
      <SearchHistory 
        currentSearch={currentSearch} 
        setCurrentSearch={setCurrentSearch} 
        searchHistoryList={searchHistoryList}
        setSearchHistoryList={setSearchHistoryList}
      />
    </div>
  );
}
export default App;