import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, spending) {
  return { name, spending};
}

const rows = [
  createData('Category 1', 159),
  createData('Category 3', 237),
  createData('Category 3', 262),
  createData('Category 4', 305),
  createData('Category 5', 356),
];

function TopFiveSpendings() {
  return (
    <TableContainer sx={{color: 'white'}}>
      <Table 
        size="small" 
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Top 5 Spendings</TableCell>
            <TableCell align="right">€</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.spending}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TopFiveSpendings
