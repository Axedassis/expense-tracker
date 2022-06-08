import React, { useState, useEffect } from "react";
import * as C from "./App.styles";

import { Tcategories } from "./types/Tcategories";
import { Titem } from "./types/Titem";

import { categoriesData } from "./data/categories";
import { itemsData } from "./data/items";

import { InfoArea } from "./components/InfoArea";
import { TableArea } from "./components/TablesArea";
import { FormArea } from "./components/FormArea";

import { curretMonth, filterListByMonth } from "./helpers/dataFilter";

function App() {
  const [currentMonth, setCurrentMonth] = useState(curretMonth());
  const [fiteredList, setFilteredList] = useState<Titem[]>([]);
  const [items, setItems] = useState(itemsData);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    setFilteredList(filterListByMonth(currentMonth, items));
  }, [currentMonth, items]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for (let i in fiteredList) {
      if (categoriesData[fiteredList[i].category].expense) {
        expenseCount += fiteredList[i].value;
      } else {
        incomeCount += fiteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [fiteredList]);
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Àrea de informações */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        {/* Àrea de insersão */}
        <FormArea />
        {/* Tabela de Vaoresl */}
        <TableArea list={fiteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
