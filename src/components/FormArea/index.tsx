import React, { useState } from "react";

import * as C from "./styles";
import { categoriesData } from "../../data/categories";
import { Tcategories } from "../../types/Tcategories";
export const FormArea = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState("");
  const [categoriesD, setCategoriesD] = useState(categoriesData);
  const handleAdd = () => {
    console.log(categoriesD);
  };

  return (
    <>
      <C.Container>
        <label htmlFor="date">Data</label>
        <input
          type={"date"}
          id="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label htmlFor="categories">Categoria</label>
        <select id="categories">
          {categoriesD.map((singleCategorie: Tcategories) => {
            <option value={singleCategorie.value}></option>
          })}
        </select>

        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="valor">Valor</label>
        <input
          id="valor"
          type="number"
          value={value}
          onChange={(e) => {
            setValue(parseInt(e.target.value));
          }}
        />
        <button
          onClick={() => {
            handleAdd();
          }}
        >
          Adicionar
        </button>
      </C.Container>
    </>
  );
};
