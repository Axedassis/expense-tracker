import React from "react";

import * as C from "./styles.index";

import { TableItem } from "../Tableitem";

import { Titem } from "../../types/Titem";

type Tprops = {
  list: Titem[];
};

export const TableArea = ({ list }: Tprops) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <>
              <TableItem item={item} key={index} />
            </>
          );
        })}
      </tbody>
    </C.Table>
  );
};
