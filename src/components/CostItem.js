import './CostItem.scss'

function CostItem() {
  const costDate = new Date(2024, 1, 11);
  const costDescription = 'Холодильник';
  const costAmount = 999.99;
  return (
    <div className='cost-item'>
      <div>{costDate.toDateString()}</div>
      <div className='cost-item_description'>
        <h2>{costDescription}</h2>
        <div className='cost-item_price'>${costAmount}</div>
      </div>
    </div>
  );
}

export default CostItem;
