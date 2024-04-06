import React from "react";
import SearchSection from "./components/SearchSection/SearchSection";
import SearchHistory from "./components/SearchHistory/SearchHistory";

function App() {
  return (
    <div className="App mx-auto" >
      <SearchSection />
      <SearchHistory/>
    </div>
  );
}
export default App;