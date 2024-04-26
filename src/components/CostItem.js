import CostDate from './CostDate';
import './CostItem.scss'

function CostItem(props) {
  return (
    <div className='cost-item'>
      <CostDate date={props.date}/>
      <div className='cost-item_description'>
        <h2>{props.description}</h2>
        <div className='cost-item_price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default CostItem;
