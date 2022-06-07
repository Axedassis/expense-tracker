import React, { useState, useEffect } from "react";
import * as C from "./App.styles";

import { Tcategories } from "./types/Tcategories";
import { Titem } from "./types/Titem";

import { categoriesData } from "./data/categories";
import { itemsData } from "./data/items";

import { InfoArea } from "./components/InfoArea";

import { TableArea } from "./components/TablesArea";

import { curretMonth, filterListByMonth } from "./helpers/dataFilter";

function App() {
  const [currentMonth, setCurrentMonth] = useState(curretMonth());
  const [fiteredList, setFilteredList] = useState<Titem[]>([]);
  const [items, setItems] = useState(itemsData);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    setFilteredList(filterListByMonth(currentMonth, items));
  }, [currentMonth, items]);
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
        />
        {/* Àrea de insersão */}

        {/* Tabela de Vaoresl */}
        <TableArea list={fiteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
