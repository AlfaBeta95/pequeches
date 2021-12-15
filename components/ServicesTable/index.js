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
      <TableContainer component={Paper} className="w-max overflow-auto mx-auto">
        <Table className="bg-red-100" sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-red-300">
              <TableCell className="font-bold">Tarifas</TableCell>
              <TableCell className="font-bold" align="right">Mini</TableCell>
              <TableCell className="font-bold" align="right">Peque&nbsp;(g)</TableCell>
              <TableCell className="font-bold" align="right">Maxi&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
              className="hover:bg-red-200"
                key={row.categoria}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="font-bold">
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
      <style jsx>{`
          table {
            display: none;
            color: black;
            background-color: white;
            text-align: left;
            width: 70%;
            border-collapse: collapse;
            margin: auto;
          }
          th,td{
              padding: 20px;
          }
          thead {
              background-color: #246355;
              border-bottom: solid 5px #0f362D;
              color: white;
          }
          tr:nth-child(even) {
              background-color: #ddd;
          }
          /* .tablaAnidada{
            background: none;
          } */
          tr:hover td {
              background-color: #369681;
              color: white;
          }
          tr:hover svg {
              fill: white;
          }
      `}</style>
    </>
  );
}