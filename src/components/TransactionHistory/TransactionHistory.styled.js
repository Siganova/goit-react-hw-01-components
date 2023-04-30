import styled from 'styled-components';

export const Table = styled.table`
  width: 900px;
  margin: 80px auto 0 auto;
  background-color: #fff;
  border-collapse: collapse;
  border-style: hidden;
`;

export const Categories = styled.th`
  color: #fff;
  border-right: 1px solid #fff;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #3790bf;
`;

export const TableRow = styled.tr`
  height: 50px;
  text-align: center;
  color: #6e7a76;
  &:nth-child(even) {
    background-color: #d2eaf7;
  }
`;

export const TableColumn = styled.td`
  border: 1px solid #bce1f5;
`;

export const Type = styled(TableColumn)`
  text-transform: capitalize;
`;