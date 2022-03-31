import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCard, deleteCard, deleteCardFB, updateCardFB } from "./redux/modules/card";
import styled from "styled-components";

const Detail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const card_index = params.index;
  const card_list = useSelector((state) => state.card.list);

  return (
    <div>
      <div>
        <Addtitle>단어 수정하기</Addtitle>
        <Addcard>
          <Indiv>
            단어
            <Inbox />
          </Indiv>
          <Indiv>
            영어
            <Inbox />
          </Indiv>
          <Indiv>
            발음
            <Inbox />
          </Indiv>
        </Addcard>
      </div>
      <h1>{card_list[card_index] ? card_list[card_index].text : ""}</h1>
      <Addbtn
        onClick={() => {
          // dispatch(updateBucket(card_index));
          dispatch(updateCardFB(card_list[card_index].id));
        }}
      >
        완료하기
      </Addbtn>
      <Addbtn
        onClick={() => {
          dispatch(deleteCardFB(card_list[card_index].id));
          // history.goBack();
        }}
      >
        삭제하기
      </Addbtn>
    </div>
  );
};

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
  padding: 10px;
  border: 1px solid #b39cd0;
  border-radius: 5px;
  background-color: #fbeaff;
`;

export default Detail;
