import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Main from "./Main";
import Repair from "./Repair";
import Add from "./Add";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadCardFB } from "./redux/modules/card";
function App() {
  const [list, setList] = React.useState([]);
  const dispatch = useDispatch();
  console.log(dispatch);

  React.useEffect(() => {
    dispatch(loadCardFB());
    // const docRef = doc(db, "mytext", "gqutruDHsAuoFguXpSi0");
    // deleteDoc(docRef);
  });

  let history = useHistory();
  return (
    <div className="App">
      <StNav
        onClick={() => {
          history.push("/");
        }}
      >
        중국어 단어장
      </StNav>
      <Route path="/" exact>
        <Main list={list} />
      </Route>
      <Route path="/repair" component={Repair} />
      <Route path="/add" list={list} component={Add} />
    </div>
  );
}

const StNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: #845ec2;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  font-size: 45px;
`;

export default App;
