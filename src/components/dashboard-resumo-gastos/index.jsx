import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  ExpensesContainer,
  GraphContainer,
  Income,
  Outcome,
  Value,
} from "./styles";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";

const ResumoGastos = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  const selectUser = (state) => state.user;
  const userData = useSelector(selectUser);
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const dataGraph = [
    {
      name: "Gastos x Despesas",
      saldo: userData[1].data[0].saldo,
      gastos: userData[3].data.reduce((acc, curr) => acc + curr.value, 0),
    },
  ];

  return (
    <Container>
      <ExpensesContainer>
        <h3>Todos os Gastos</h3>
          <Income>
            <p>Ganhos</p>
            <Value>
              <div className="up">
                <AiOutlineArrowUp fill="white" size="30" />
              </div>
              <h2>
                {width > 400 && <span>R$</span>}
                {userData[1].data[0].saldo ? userData[1].data[0].saldo : "0"}
                ,00
              </h2>
            </Value>
          </Income>
          <Outcome>
            <p>Gastos</p>
            <Value>
              <div className="down">
                <AiOutlineArrowDown fill="white" size="30" />
              </div>
              <h2>
                {width > 400 && <span>R$</span>}
                {userData[3].data[0]
                  ? userData[3].data.reduce((acc, curr) => acc + curr.value, 0)
                  : "00"}
                ,00
              </h2>
            </Value>
          </Outcome>
      </ExpensesContainer>
      <GraphContainer>
        <BarChart
          width={width >= 900 ? width / 3 : width / 2}
          height={300}
          data={dataGraph}
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
            dataKey="saldo"
            fill="#5CC567"
            legendType="circle"
            radius={[10, 10, 10, 10]}
          />
          <Bar
            dataKey="gastos"
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
