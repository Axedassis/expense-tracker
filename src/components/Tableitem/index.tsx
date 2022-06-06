import * as React from "react";

import * as C from "./styled.index";
import { Titem } from "../../types/Titem";

type Tprops = {
  item: Titem;
};

export const TableItem = ({ item }: Tprops) => {
  return (
    <C.TableRow>
      <C.TableColumn>...</C.TableColumn>
      <C.TableColumn>{item.category}</C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>R$ {item.value}</C.TableColumn>
    </C.TableRow>
  );
};
