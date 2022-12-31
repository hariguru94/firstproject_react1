import React, { useState, useEffect, useMemo } from "react";
import axios from "axios"
import Table from "./Table/table";
import "./App.css";

import Calculator from './calculator';

function App() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name"
          },
          {
            Header: "Type",
            accessor: "show.type"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Language",
            accessor: "show.language"
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres"
          },
          {
            Header: "Runtime",
            accessor: "show.runtime"
          },
          {
            Header: "Status",
            accessor: "show.status"
          }
        ]
      }
    ],
    []
  );

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      console.log(result.data);
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Calculator></Calculator>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;






















// import Calculator from './calculator';
// import './App.css';
// import Tables from "./Table/table"
// // const mysql = require("mysql")
// function App() {


//   // const db = mysql.createConnection({
//   //   host: 'localhost',
//   //   user: 'root',
//   //   password: 'asterisk',
//   //   database: "chad"
//   // })


//   // db.connect((err) => {
//   //   if (err) {
//   //     throw err
//   //   }
//   //   console.log("db connected successfully");
//   //   con.query("SELECT salt FROM ilance_users", function (err, result, fields) {
//   //     if (err) throw err;
//   //     console.log(result);
//   //   });
//   // })
//   return (
//     <div className="App">
//       {/* <Tables></Tables> */}
//       <Calculator></Calculator>
//     </div>
//   );
// }

// export default App;
