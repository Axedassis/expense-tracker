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

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();

  return `${dayMothFormater(day)}/${dayMothFormater(month)}/${year}`;
};

const dayMothFormater = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatCurrentMounth = (currentMounth: string): string => {
  let [year, month] = currentMounth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
};
