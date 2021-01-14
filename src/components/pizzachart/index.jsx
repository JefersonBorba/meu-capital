import { PieChart, Pie, Legend, Tooltip } from "recharts";
const PizzaChart = () => {
  const data01 = [
    { name: "Gastos", value: 400, fill: "#e786d7" },
    { name: "Ganhos", value: 1100, fill: "#7f7fd5" },
  ];
  return (
    <PieChart width={200} height={200}>
      <Legend verticalAlign="top" height={36} />
      <Pie dataKey="value" data={data01} outerRadius={80} label />
      <Tooltip />
    </PieChart>
  );
};

export default PizzaChart;
