import { useEffect, useState } from "react";

import {
  Container,
  ExpensesContainer,
  GraphContainer,
  Income,
  Outcome,
  Value,
} from "./style";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";

const ResumoGastos = () => {
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
      name: "03/01",
      Gastos: 4000,
      Ganhos: 2400,
      amt: 2400,
    },
    {
      name: "04/01",
      Gastos: 3000,
      Ganhos: 1398,
      amt: 2210,
    },
    {
      name: "05/01",
      Gastos: 2000,
      Ganhos: 9800,
      amt: 2290,
    },
    {
      name: "06/01",
      Gastos: 2780,
      Ganhos: 3908,
      amt: 2000,
    },
    {
      name: "07/01",
      Gastos: 1890,
      Ganhos: 4800,
      amt: 2181,
    },
    {
      name: "08/01",
      Gastos: 2390,
      Ganhos: 3800,
      amt: 2500,
    },
    {
      name: "09/01",
      Gastos: 3490,
      Ganhos: 4300,
      amt: 2100,
    },
  ];

  return (
    <Container>
      <ExpensesContainer>
        <h3>Todos os Gastos</h3>
        <div className="breakable">
          <Income>
            <p>Ganhos</p>
            <Value>
              <div className="up">
                <AiOutlineArrowUp fill="white" size="30" />
              </div>
              <h2>R$1233,00</h2>
            </Value>
          </Income>
          <Outcome>
            <p>Gastos</p>
            <Value>
              <div className="down">
                <AiOutlineArrowDown fill="white" size="30" />
              </div>
              <h2>R$1233,00</h2>
            </Value>
          </Outcome>
        </div>
      </ExpensesContainer>
      <GraphContainer>
        <BarChart
          width={width >= 900 ? width / 3 : width / 2}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip cursor={{ fill: "#2E2E64" }} />
          <Legend verticalAlign="top" />
          <Bar
            dataKey="Ganhos"
            fill="#5CC567"
            legendType="circle"
            radius={[10, 10, 10, 10]}
          />
          <Bar
            dataKey="Gastos"
            fill="#524EEE"
            legendType="circle"
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </GraphContainer>
    </Container>
  );
};

export default ResumoGastos;
