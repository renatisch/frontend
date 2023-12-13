import "./Jobs.css"
import DataTable from '../../components/Table/Table'
import { Container } from '@mui/material'
import { Breadcrumbs, Button, Card, Typography } from '@mui/material'
import Link from '@mui/material/Link';
import {GridColDef} from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';



const JobsColumns: GridColDef[] = [
  { field: 'job_id', headerName: 'ID', width: 70 },
  { field: 'started_at', headerName: 'Started at', type: "date", width: 150},
  { field: 'completed_at', headerName: 'Completed at', type: "date", width: 150},
  { field: 'is_scheduled', headerName: 'Scheduled?', type:"boolean", width: 130 },
  { field: 'completed', headerName: 'Completed',type: 'boolean', width: 90},
  { field: 'job_type', headerName: 'Job type', width: 100, renderCell:(params)=>{ const type = params.value; return <Chip label={params.value} color={ type==="load"?"success": type==="fetch"?"secondary":type==="llm"?"info":"warning"} />}},
  { field: 'job_description', headerName: 'Description', width: 400},
  
];

const JobsData = [
  { id: 1, job_id: 1, job_type: "load", started_at: new Date("11/12/2023"), completed_at: new Date("12/12/2023"), is_scheduled: false, completed: true, job_description: "Load data from web."},
  { id: 2, job_id: 2, job_type: 'fetch', started_at: new Date("10/12/2023"), completed_at: new Date("10/12/2023"), is_scheduled: true, completed: true, job_description: "Fetch data from api."},
  { id: 3, job_id: 3, job_type: 'llm', started_at: new Date("05/11/2023"), completed_at: new Date("05/11/2023"), is_scheduled: false, completed: false, job_description: "Push data to llm."},
]

export default function JobsPage() {
  return (
    <>
    <Container className="pageHeaderContainer" style={{ display:'flex', paddingLeft:0, paddingRight: 0}}>
          <Container className="headerContainer" style={{paddingLeft: 0, marginBottom: 2}}>
            <Typography className="pageTitle" variant="h5" fontWeight={700}>
              Jobs
            </Typography>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Jobs
              </Link>
              <Typography color="text.primary">Belts</Typography>
            </Breadcrumbs>
        </Container>
        <Button variant="contained" className="addButton">Add</Button>
        </Container>
        <Card className="card">
          <DataTable rows={JobsData} columns={JobsColumns}/>
        </Card>
    </>
  )
}