import Header from "../../components/header";
import SideMenu from "../../components/dashboard-sidemenu";
import ResumeBalance from "../../components/transaction-resume-balance";
import PizzaChart from "../../components/pizzachart";
import DashboardLineChart from "../../components/dashboard-linechart";
import SetValue from "../../components/modal-set-value";
import { AiOutlinePlus } from "react-icons/ai";

import {
  Container,
  RightContainer,
  Breakable,
  Content,
  Balance,
  BalanceContent,
  AddValue,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Wallet = () => {
  const isAllowedSelector = useSelector((state) => state.isAllowed);
  const history = useHistory();
  const selectUser = (state) => state.user;
  const userData = useSelector(selectUser);
  const [modalAddValue, setModalAddValue] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <>
      {isAllowedSelector ? (
        <>
          <Header title="Carteira" />
          <Container>
            <SideMenu />
            <Breakable>
              <Content>
                <Balance>
                  <AddValue onClick={() => setModalAddValue(true)}>
                    <AiOutlinePlus fill="white" size="30" cursor="pointer" />
                  </AddValue>
                  {modalAddValue && (
                    <SetValue
                      width={width}
                      setModalAddValue={setModalAddValue}
                      currentItem="Carteira"
                      wallet
                    />
                  )}
                  <BalanceContent>
                    <h1
                      style={{
                        color: `${
                          userData[1].data[0].saldo -
                            userData[1].data[0].gastos <
                            0 && "#E9666D"
                        }`,
                      }}
                    >
                      R${" "}
                      {userData[1].data[0].gastos
                        ? userData[1].data[0].saldo - userData[1].data[0].gastos
                        : userData[1].data[0].saldo}
                      ,00
                    </h1>
                    <h2>Total</h2>
                  </BalanceContent>
                </Balance>
                <DashboardLineChart />
              </Content>
              <RightContainer>
                <ResumeBalance />
                <PizzaChart />
              </RightContainer>
            </Breakable>
          </Container>
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
};
export default Wallet;
