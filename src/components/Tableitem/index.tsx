import * as React from "react";

import * as C from "./styled.index";
import { Titem } from "../../types/Titem";
import { formatDate } from "../../helpers/dataFilter";

import { categoriesData } from "../../data/categories";

type Tprops = {
  item: Titem;
};

export const TableItem = ({ item }: Tprops) => {
  return (
    <C.TableRow>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categoriesData[item.category].color}>
          {categoriesData[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value
          color={categoriesData[item.category].expense ? "tomato" : "green"}
        >
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableRow>
  );
};
