import React, { useEffect, useState } from "react";
import SearchSection from "./components/SearchSection/SearchSection";
import SearchHistory from "./components/SearchHistory/SearchHistory";

function App() {

  const [currentSearch, setCurrentSearch] = useState({});

  return (
    <div className="App mx-auto" >
      <SearchSection setCurrentSearch={setCurrentSearch}/>
      <SearchHistory currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>
    </div>
  );
}
export default App;