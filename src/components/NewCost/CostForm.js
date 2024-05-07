import React, { useState } from 'react'
import './CostForm.scss'

const CostForm = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // });

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // });
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // });
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         amount: event.target.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost_controls">
                <div className="new-cost_control">
                    <label>Название</label>  
                    <input 
                        value={inputName}
                        onChange={nameChangeHandler}
                        type="text" 
                    />  
                </div>
                <div className="new-cost_control">
                    <label>Сумма</label>  
                    <input 
                        value={inputAmount}
                        onChange={amountChangeHandler}
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                    />  
                </div>
                <div className="new-cost_control">
                    <label>Дата</label>  
                    <input 
                        value={inputDate}
                        onChange={dateChangeHandler}
                        type="date" 
                        min="2024-06-05" 
                        max="2027-12-31"
                    />  
                </div>
                <div className="new-cost_actions">
                    <button type="submit">Добавить расход</button>  
                </div>
            </div> 
        </form>
    )
}

export default CostForm;
