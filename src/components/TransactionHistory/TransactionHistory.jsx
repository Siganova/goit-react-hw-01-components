import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableRow,
  Type,
  Categories,
  TableColumn,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <TableRow>
        <Categories>Type</Categories>
        <Categories>Amount</Categories>
        <Categories>Currency</Categories>
      </TableRow>
    </TableHead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <Type>{type}</Type>
          <TableColumn>{amount}</TableColumn>
          <TableColumn>{currency}</TableColumn>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};