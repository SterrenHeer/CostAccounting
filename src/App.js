import Costs from "./components/Costs/Costs";

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
      <Costs costs={costs} />
    </div>
  );
}

export default App;
