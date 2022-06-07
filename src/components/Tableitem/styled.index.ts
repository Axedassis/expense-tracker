import styled from "styled-components";

export const TableRow = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0px;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 8px 14px;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: bold;
  letter-spacing: 0.6px;
`;
