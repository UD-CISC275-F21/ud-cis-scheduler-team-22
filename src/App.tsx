import React from "react";
import "./App.css";
import { CoursePool } from "./components/CoursePool";
import { Table } from "./components/Table";

function App(): JSX.Element {
    return (
        <div className="App">
            <CoursePool></CoursePool>
            <Table></Table>
        </div>
    );
}

export default App;
