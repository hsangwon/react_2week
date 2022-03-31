// Card.js
import { db } from "../../firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Actions
const LOAD = "card/LOAD";
const CREATE = "card/CREATE";
const UPDATE = "card/UPDATE";
const DELETE = "card/DELETE";

const initialState = {
  list: [],
};
// Action Creators
export function loadCard(card_list) {
  return { type: LOAD, card_list };
}

export function createCard(card) {
  return { type: CREATE, card: card };
}

export function updateCard(card_index) {
  return { type: UPDATE, card_index };
}

export function deleteCard(card_index) {
  return { type: DELETE, card_index };
}

// middlewares
export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "mytext"));
    console.log(card_data);

    let card_list = [];

    card_data.forEach((a) => {
      console.log(a.data());
      card_list.push({ id: a.id, ...a.data() });
    });

    console.log(card_list);

    dispatch(loadCard(card_list));
  };
};

export const addCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "mytext"), card);
    // const _card = await getDoc(docRef);
    const card_data = { id: docRef.id, ...card };
    dispatch(createCard(card_data));

    console.log(card_data);
  };
};

export const updateCardFB = (card_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "mytext", card_id);
    (await getDoc(docRef)).data().completed === false
      ? updateDoc(docRef, { completed: true })
      : updateDoc(docRef, { completed: false });

    console.log(getState().card);
    const _card_list = getState().card.list;
    const card_index = _card_list.findIndex((b) => {
      return b.id === card_id;
    });
    dispatch(updateCard(card_index));
  };
};

export const deleteCardFB = (card_id) => {
  return async function (dispatch, getState) {
    if (!card_id) {
      window.alert("아이디가 없네요!");
      return;
    }
    const docRef = doc(db, "mytext", card_id);
    await deleteDoc(docRef);

    const _card_list = getState().card.list;
    const card_index = _card_list.findIndex((b) => {
      return b.id === card_id;
    });

    dispatch(deleteCard(card_index));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/LOAD": {
      return { list: action.card_list };
    }
    case "card/CREATE": {
      const new_card_list = [...state.list, action.card];
      return { list: new_card_list };
    }
    case "card/UPDATE": {
      const new_card_list = state.list.map((l, idx) => {
        return action.card_index == idx
          ? l.completed !== true
            ? { ...l, completed: true }
            : { ...l, completed: false }
          : l;
      });
      console.log(new_card_list);
      return { list: new_card_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
