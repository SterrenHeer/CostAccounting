import './CostDate.scss'

const CostDate = (props) => {
  const month = props.date.toLocaleString('ru-RU', {month: 'long'});
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('ru-RU', {day: '2-digit'});
  return (
    <div className='cost-date'>
			<div className='cost-date_month'>{month}</div>
			<div className='cost-date_year'>{year}</div>
			<div className='cost-date_day'>{day}</div>
    </div>
  );
}

export default CostDate;
