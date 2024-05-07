import CostItem from "./CostItem";
import Card from '../UI/Card';
import CostsFilter from "./CostsFilter";
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
            {filteredCosts.map((cost) => (
                <CostItem 
                    key={cost.id}
                    date={cost.date} 
                    description={cost.description} 
                    amount={cost.amount} 
                />
            ))}
        </Card>
    );
}

export default Costs;
