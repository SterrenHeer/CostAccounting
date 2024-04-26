import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2024, 1, 11),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2024, 11, 25),
      description: 'Ноутбук',
      amount: 1254.72
    },
    {
      date: new Date(2024, 4, 1),
      description: 'Тачка садовая',
      amount: 40.13
    }
  ]
  return (
    <div>
      <h1>Hello World!</h1>
      <CostItem 
        date={costs[0].date} 
        description={costs[0].description} 
        amount={costs[0].amount}></CostItem>
      <CostItem 
        date={costs[1].date} 
        description={costs[1].description} 
        amount={costs[1].amount}></CostItem>
      <CostItem 
        date={costs[2].date} 
        description={costs[2].description} 
        amount={costs[2].amount}></CostItem>
    </div>
  );
}

export default App;
