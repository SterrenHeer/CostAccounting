import './CostItem.scss'

function CostItem() {
  return (
    <div className='cost-item'>
      <div>февраль 2024 11</div>
      <div className='cost-item_description'>
        <h2>Холодильник</h2>
        <div className='cost-item_price'>$999.99</div>
      </div>
    </div>
  );
}

export default CostItem;
