import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




function TopSpendingsWeek() {

  const createData = (name, expense) => {
    return {name, expense};
  }
  

  const [rows, setRows] = React.useState([]);
  
  React.useEffect(() => {
    const fetchSpendings = async () => {
      try {
        const response = await fetch('http://localhost:4000/expenseOverviewBarChart');
        const data = await response.json();
        const rows = data.ExpenseCat.map((item) =>
          createData(item.category, item.spending)
        );
        console.log(data);
        console.log(rows);
        setRows(rows);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchSpendings();
  }, []);

  
  

  return (

    //The '&' character refers to the current component and '.MuiTableCell-root' is a class name used by the TableCell component.
    <TableContainer sx={{ '& .MuiTableCell-root': { color: 'white', border: 'none', } }}>
      <Table 
        size="small" 
        aria-label="a dense table"
      >
        <TableHead sx={{ '& .MuiTableCell-root':{
                opacity: '0.6', 
                padding: '16px 0px 8px',
                fontSize: '12px', 
                lineHeight: '16px',
                borderTop: '1px solid #E8DEF8',
                }       
                }}
        >
          <TableRow >
            <TableCell>Top 5 Spendings</TableCell>
            <TableCell align="right">€</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableCell-root': {   
                padding: '0px',
                fontSize: '14px',
                lineHeight: '20px'
                } 
                }}>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.expense}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TopSpendingsWeek
