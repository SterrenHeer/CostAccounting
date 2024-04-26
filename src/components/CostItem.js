import './CostItem.scss'

function CostItem(props) {
  return (
    <div className='cost-item'>
      <div>{props.date.toDateString()}</div>
      <div className='cost-item_description'>
        <h2>{props.description}</h2>
        <div className='cost-item_price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default CostItem;
