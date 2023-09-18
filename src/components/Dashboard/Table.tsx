import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';

function createData(
  name: string,
  type: string,
  date: string,
  status: number,
  action: number,
) {
  return { name, type, date, status, action };
}

const rows = [
  createData('Daiana', 'Medical', '1-2-1', 1, 4.0),
  createData('Garvce', 'casual', '1-2-1', 0, 4.3),
  createData('Eclitchair', 'Maternity', '1-2-1', 1, 6.0),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead sx={{backgroundColor:"#F8F9FD"}}>
          <TableRow>
            <TableCell align="right">STAFF NAME</TableCell>
            <TableCell align="right">LEAVE TYPE</TableCell>
            <TableCell align="right">APPLIED DATE</TableCell>
            <TableCell align="right">REG. STATUS</TableCell>
            <TableCell align="right">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.status==1?
                <Chip label="Pending" color="primary" variant="outlined" />:
                <Chip label="Approved" color="success" variant="outlined" />}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
