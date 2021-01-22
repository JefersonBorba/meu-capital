import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Container } from "./styles";

const DashboardLineChart = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  const selectUsers = (state) => state.user;
  const userData = useSelector(selectUsers);
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <Container>
      <h3>Gastos por categorias</h3>
      <LineChart
        width={width > 900 ? width / 1.7 : width / 1.2}
        height={300}
        data={userData[3].data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 0" vertical="" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="comida" stroke="#8884d8" />
        <Line type="monotone" dataKey="transporte" stroke="#82ca9d" />
        <Line type="monotone" dataKey="outros" stroke="orange" />
      </LineChart>
    </Container>
  );
};

export default DashboardLineChart;
