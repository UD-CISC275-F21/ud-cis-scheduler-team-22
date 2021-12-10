import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { course } from "../interfaces/course";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";



export function CoursePool({show, poolShowed}:{show:(r: boolean)=>void, poolShowed: boolean}): JSX.Element{

    const [items, setItems] = React.useState(["CISC108", "EGGG101", "MATH241", "ENGL110", "CISC181", "CISC210", "MATH242", "CISC220", "CISC260", "MATH210", "CISC355", "CISC275", "MATH205/350", "BreadthRQ1", "BreadthRQ2", "BreadthRQ3", "BreadthRQ4", "BreadthRQ5", "ScienceRQ1", "ScienceRQ2"]);
    const onSortEnd = (oldIndex: number, newIndex: number) => {
        setItems((array) => arrayMove(array, oldIndex, newIndex));
    };   
  
    return <Col>
        <Button onClick={() => show(!poolShowed)}>Show/Hide CoursePool </Button>
        {poolShowed && <SortableList onSortEnd={onSortEnd} className="list" draggedItemClassName="dragged">
            {items.map((item) => 
                <SortableItem key={item}>
                    <div className="item">{item}</div>
                </SortableItem>
            )}
        </SortableList>}
    </Col>
    ;
}