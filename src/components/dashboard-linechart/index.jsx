import {useState, useEffect} from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import { Container } from "./style"

const DashboardLineChart = () => {

    const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
      
    };
  
  useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

    const data = [
        {
          name: '03/01', comida: 400, transporte: 240, outros: 240,
        },
        {
          name: '04/01', comida: 300, transporte: 139, outros: 221,
        },
        {
          name: '05/01', comida: 200, transporte: 980, outros: 229,
        },
        {
          name: '06/01', comida: 278, transporte: 390, outros: 200,
        },
        {
          name: '07/01', comida: 189, transporte: 480, outros: 218,
        },
        {
          name: '08/01', comida: 239, transporte: 380, outros: 250,
        },
        {
          name: '09/01', comida: 349, transporte: 430, outros: 210,
        },
      ];
    return <Container>
    <h3>Gastos por categorias</h3>
    <LineChart
    width={width > 900 ? width / 1.7 : width / 1.2}
    height={300}
    data={data}
    margin={{
      top: 5, right: 30, left: 20, bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 0" vertical=""/>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="comida" stroke="#8884d8" />
    <Line type="monotone" dataKey="transporte" stroke="#82ca9d" />
    <Line type="monotone" dataKey="outros" stroke="orange" />
  </LineChart>
  </ Container>
}

export default DashboardLineChart