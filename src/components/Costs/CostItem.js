import CostDate from './CostDate';
import Card from '../UI/Card';
import './CostItem.scss'

function CostItem(props) {
  return (
    <Card className='cost-item'>
      <CostDate date={props.date}/>
      <div className='cost-item_description'>
        <h2>{props.description}</h2>
        <div className='cost-item_price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default CostItem;
