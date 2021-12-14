import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(categoria, mini, peque, maxi) {
  return { categoria, mini, peque, maxi };
}

const rows = [
  createData('Cuota mes', '150 €', '200 €', '250 €'),
  createData('Días a la semana', 2, 3, 5),
  createData('Snack merienda', 'Incluído', 'Incluído', 'Incluído'),
  createData('Matrícula(anual)', '75 €', '70 €', '60 €'),
];

export default function ServicesTable() {
  return (
    <>
      <TableContainer component={Paper} className="overflow-auto">
        <Table className="bg-red-100" sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tarifas</TableCell>
              <TableCell align="right">Mini</TableCell>
              <TableCell align="right">Peque&nbsp;(g)</TableCell>
              <TableCell align="right">Maxi&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.categoria}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.categoria}
                </TableCell>
                <TableCell align="right">{row.mini}</TableCell>
                <TableCell align="right">{row.peque}</TableCell>
                <TableCell align="right">{row.maxi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}