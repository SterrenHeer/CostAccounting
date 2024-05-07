import CostList from "./CostList";
import Card from '../UI/Card';
import CostsFilter from "./CostsFilter";
import CostsDiagram from "./CostsDiagram";
import React, { useState } from "react";
import './Costs.scss'

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState("2024");

    const yearChangeHandler = (year) => {
        console.log(year)
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className="costs">
            <CostsFilter 
                year={selectedYear}
                onChangeYear={yearChangeHandler} />
            <CostsDiagram costs={filteredCosts} />
            <CostList costs={filteredCosts} />
        </Card>
    );
}

export default Costs;
