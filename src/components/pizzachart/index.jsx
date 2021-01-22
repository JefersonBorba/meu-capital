import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { useSelector } from "react-redux";
const PizzaChart = () => {
  const selectUser = (state) => state.user;
  const userData = useSelector(selectUser);
  const data01 = [
    {
      name: "Gastos",
      value: userData[3].data.reduce((acc, curr) => acc + curr.value, 0),
      fill: "#e786d7",
    },
    { name: "Ganhos", value: userData[1].data[0].saldo, fill: "#7f7fd5" },
  ];

  return (
    <PieChart width={200} height={200}>
      <Legend verticalAlign="top" height={36} />
      <Pie dataKey="value" data={data01} outerRadius={80} />
      <Tooltip />
    </PieChart>
  );
};

export default PizzaChart;
