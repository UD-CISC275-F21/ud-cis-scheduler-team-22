import React from "react";
import { Button, Col } from "react-bootstrap";
import Table from "rc-table";

export function Plan():JSX.Element{
    const columns = [
        {
            title: "Course",
            dataIndex: "Course",
            key: "Course",
            width: 100,
        },
        {
            title: "Credits",
            dataIndex: "Credits",
            key: "Credits",
            width: 100,
        },
        {
            title: "PREREQ",
            dataIndex: "PREREQ",
            key: "PREREQ",
            width: 100,
        },
        {
            title: "Operations",
            dataIndex: "",
            key: "operations",
            render: () => <a href="#">Delete</a>,
        },
    ];

    const data = [
        { Course: "CISC108", Credits: 3, PREREQ: "n", key: "1" },
        { Course: "EGGG101", Credits: 2, PREREQ: "n", key: "2" },
        { Course: "MATH241", Credits: 4, PREREQ: "n", key: "3"  },
        { Course: "CISC108", Credits: 3, PREREQ: "n", key: "4" }
           
    ];

    return (
        <Col>
            First Semester
            <Table columns={columns} data={data} />
            <Button onClick={()=>Plan()}>Adding a new Semester</Button>
        </Col>

    );
}