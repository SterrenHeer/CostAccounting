import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      id: "c1",
      date: new Date(2024, 1, 11),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      id: "c2",
      date: new Date(2024, 11, 25),
      description: 'Ноутбук',
      amount: 1254.72
    },
    {
      id: "c3",
      date: new Date(2024, 4, 1),
      description: 'Тачка садовая',
      amount: 40.13
    }
  ]

  const addCostHandler = (cost) => {
    console.log(cost)
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
