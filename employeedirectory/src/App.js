import React, { useState } from 'react';
import SearchDirectory from "./components/SearchDirectory";
import DirectoryTable from "./components/DirectoryTable";
import Header from "./components/Header";
import JSONDirectory from "./users.json";



function App() {

  const [directory, createDirectory] = useState({
    allNames: JSONDirectory,
    filteredNames: JSONDirectory
  })

  const [nameSort, createName] = useState("");

  const findDirectory = e => {

    const filteredNames = directory.allNames.filter(({ name }) =>
      name.toLowerCase().includes(e.target.value.toLowerCase()))
    createDirectory({
      ...directory,
      filteredNames
    })
  }

  const sortName = () => {

    let namesSorted = directory.filteredNames.sort((one, two) => {
      const nameOne = one.name;
      const nameTwo = two.name;

      let comparison = 0;
      if (nameOne > nameTwo) {
        comparison = 1;
      } else if (nameOne < nameTwo) {
        comparison = -1;
      } return comparison
    })

    if (nameSort === "DESC") {
      namesSorted.reverse();
      createName("ASC");
    } else {
      createName("DESC")
    }
    createDirectory({ ...directory, namesSorted });
  }

  return (
    <>
      <Header />
      <SearchDirectory doSearch={findDirectory} />
      <DirectoryTable directory={directory.filteredNames} sortName={sortName} />
    </>
  );
}

export default App;