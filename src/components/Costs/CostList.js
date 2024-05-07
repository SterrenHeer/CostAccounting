import CostItem from "./CostItem";
import "./CostList.scss";

const CostList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list_fallback">В Этом Году Расходов Нет</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
