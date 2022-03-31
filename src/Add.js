import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createCard, loadCardFB, addCardFB } from "./redux/modules/card";
import { useHistory } from "react-router-dom";

function Add() {
  const inpuut1 = useRef(null);
  const inpuut2 = useRef(null);
  const inpuut3 = useRef(null);
  console.log(inpuut1);

  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCardFB());
  });

  const addCardList = () => {
    // dispatch(
    //   createCard({
    //     word: inpuut1.current.value,
    //     english: inpuut2.current.value,
    //     pronunciation: inpuut3.current.value,
    //   }),
    //   history.goBack()
    // );
    dispatch(
      addCardFB({
        word: inpuut1.current.value,
        english: inpuut2.current.value,
        pronunciation: inpuut3.current.value,
      }),
      history.goBack()
    );
    console.log(inpuut1.current.value);
    console.log(inpuut2.current.value);
    console.log(inpuut3.current.value);
  };

  return (
    <div>
      <Addtitle>단어 추가하기</Addtitle>
      <Addcard>
        <Indiv>
          단어
          <Inbox ref={inpuut1}></Inbox>
        </Indiv>
        <Indiv>
          영어
          <Inbox ref={inpuut2} />
        </Indiv>
        <Indiv>
          발음
          <Inbox ref={inpuut3} />
        </Indiv>
        <Addbtn type="button" onClick={addCardList}>
          저장하기
        </Addbtn>
      </Addcard>
    </div>
  );
}

const Addtitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: green;
`;

const Addcard = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

const Addbtn = styled.button`
  align-self: center;
  background-color: #fbeaff;
  padding: 10px;
  border: 1px solid #b39cd0;
  border-radius: 5px;
`;

const Indiv = styled.div`
  font-size: 20px;
  padding: 30px;
`;

const Inbox = styled.input`
  width: 300px;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid black;
  margin-left: 30px;
`;

export default Add;
