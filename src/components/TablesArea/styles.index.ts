import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : `auto`)};
  padding: 10px 0;
  text-align: left;
`;
