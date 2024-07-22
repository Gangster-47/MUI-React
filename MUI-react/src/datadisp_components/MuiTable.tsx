import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from "@mui/material"

const tableData=[
  {
  "id": 1,
  "first_name": "Sheff",
  "last_name": "Quinton",
  "email": "squinton0@upenn.edu",
  "gender": "Male",
  "ip_address": "174.8.227.100"
}, {
  "id": 2,
  "first_name": "Eddy",
  "last_name": "Andreotti",
  "email": "eandreotti1@microsoft.com",
  "gender": "Male",
  "ip_address": "10.44.12.83"
}, {
  "id": 3,
  "first_name": "Jamison",
  "last_name": "Gaisford",
  "email": "jgaisford2@ibm.com",
  "gender": "Male",
  "ip_address": "38.46.27.221"
}, {
  "id": 4,
  "first_name": "Karlie",
  "last_name": "Elves",
  "email": "kelves3@histats.com",
  "gender": "Female",
  "ip_address": "115.21.139.36"
}, {
  "id": 5,
  "first_name": "Bucky",
  "last_name": "Leather",
  "email": "bleather4@zdnet.com",
  "gender": "Male",
  "ip_address": "132.181.55.168"
}, {
  "id": 6,
  "first_name": "Giorgia",
  "last_name": "Hellis",
  "email": "ghellis5@amazon.co.uk",
  "gender": "Female",
  "ip_address": "205.66.212.11"
}, {
  "id": 7,
  "first_name": "Taite",
  "last_name": "Dymott",
  "email": "tdymott6@surveymonkey.com",
  "gender": "Male",
  "ip_address": "207.253.17.173"
}, {
  "id": 8,
  "first_name": "Demetrius",
  "last_name": "Vittori",
  "email": "dvittori7@oracle.com",
  "gender": "Male",
  "ip_address": "115.51.140.244"
}, {
  "id": 9,
  "first_name": "Roger",
  "last_name": "Krolik",
  "email": "rkrolik8@usnews.com",
  "gender": "Male",
  "ip_address": "241.131.147.96"
}, {
  "id": 10,
  "first_name": "Keelby",
  "last_name": "Batson",
  "email": "kbatson9@t.co",
  "gender": "Male",
  "ip_address": "40.50.64.160"
}]


function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{maxHeight:"330px"}}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map((row)=>
            (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MuiTable
