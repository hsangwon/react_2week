import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateCardFB } from "./redux/modules/card";

function Main() {
  const word = useSelector((state) => state.card.list);
  const card_list = useSelector((state) => state.card.list);
  const dispatch = useDispatch();
  console.log(word);
  let history = useHistory();

  return (
    <Contain>
      {card_list.map((x, i) => {
        return (
          <Addcard
            key={i}
            style={{
              backgroundColor: x.completed ? "#B39CD0" : "#FBEAFF",
              color: x.completed ? "white" : "black",
            }}
          >
            <div>{x.word}</div>
            <div>{x.english}</div>
            <div>{x.pronunciation}</div>
            <div
              style={{
                display: "flex",
                margin: "auto",
                padding: "20px",
              }}
            >
              <Addbtn
                type="button"
                onClick={() => {
                  dispatch(updateCardFB(card_list[i].id));
                }}
              >
                🎴
              </Addbtn>
              <Addbtn
                onClick={() => {
                  history.push("/repair");
                }}
              >
                {" "}
                ✂{" "}
              </Addbtn>
              <Addbtn
                onClick={() => {
                  window.prompt("비밀번호를 입력해주세요");
                  alert("비밀번호가 다릅니다.");
                }}
              >
                {" "}
                ❌{" "}
              </Addbtn>
            </div>
          </Addcard>
        );
      })}

      <Btn
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        version="1.2"
        baseProfile="tiny"
        viewBox="0 0 24 24"
        className="sc-iqAclL jibPFy"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          history.push("/add");
        }}
      >
        <path d="M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z"></path>
      </Btn>
    </Contain>
  );
}

const Cardword = styled.div``;

const Addbtn = styled.button`
  max-width: 1230px;
  width: 100%;
  background-color: transparent;
  border: none;
`;

const Addcard = styled.form`
  background: rgba(142, 44, 44, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 30px;
  margin: 20px;
`;

const Contain = styled.div`
  display: flex;
  margin: 0px 70px;
  margin-top: 65px;
  flex-wrap: wrap;
  background-image: url("blue-snow.png");
`;

const Btn = styled.svg`
display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);
    background-color: rgb(10, 112, 41);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 10px;
    right: 10px;
    box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px;
}
`;

export default Main;
