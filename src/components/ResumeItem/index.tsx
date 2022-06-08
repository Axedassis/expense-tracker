import * as C from "./styles";

type Tprops = {
  title: string;
  value: number;
  color?: string;
};

export const Resumeitem = ({ title, value, color }: Tprops) => {
  return (
    <>
      <C.Container>
        <C.Title>{title}</C.Title>
        <C.Info color={color}>R$ {value}</C.Info>
      </C.Container>
    </>
  );
};
