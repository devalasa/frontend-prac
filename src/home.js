import { useState } from "react";
import ColumnList from "./column.js";
const Home = () => {
  const [columns, setColumns] = useState([
    { title: "GitHub", id: 1 },
    { title: "Frontend Mentor", id: 2 },
    { title: "LinkedIn", id: 3 },
    { title: "Twitter", id: 4 },
    { title: "Instagram", id: 5 },
  ]);
  return (
    <div className="home">
      <div>
        <img src="/images6.jpeg" alt="" />
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
      </div>
      <div>
        <p>"Frontend developer and avid reader"</p>
        <div className="column">
          <ColumnList columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Home;
