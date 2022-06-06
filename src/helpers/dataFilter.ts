import { Titem } from "../types/Titem";

export const curretMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (date: string, list: Titem[]): Titem[] => {
  let newList: Titem[] = [];
  let [year, month] = date.split("-"); //2022-04 -> [2022, 04]
  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
};
