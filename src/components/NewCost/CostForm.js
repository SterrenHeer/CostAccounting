import './CostForm.scss'

const CostForm = () => {
    return (
        <form>
            <div className="new-cost_controls">
                <div className="new-cost_control">
                    <label>Название</label>  
                    <input type="text" />  
                </div>
                <div className="new-cost_control">
                    <label>Сумма</label>  
                    <input type="number" min='0.01' step='0.01' />  
                </div>
                <div className="new-cost_control">
                    <label>Дата</label>  
                    <input type="date" min='2024-06-05' max='2024-12-31' />  
                </div>
                <div className="new-cost_actions">
                    <button type="submit">Добавить расход</button>  
                </div>
            </div> 
        </form>
    )
}

export default CostForm;
