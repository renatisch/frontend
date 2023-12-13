import "./Loaders.css"
import { Container } from '@mui/material'
import { Breadcrumbs, Typography } from '@mui/material'
import Link from '@mui/material/Link';



export default function LoadersPage() {
  return (
    <Container className="pageHeaderContainer" style={{ display:'flex', paddingLeft:0, paddingRight: 0}}>
          <Container className="headerContainer" style={{paddingLeft: 0, marginBottom: 2}}>
            <Typography className="pageTitle" variant="h5" fontWeight={700}>
              Loaders
            </Typography>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
              Loaders
              </Link>
              <Typography color="text.primary">Belts</Typography>
            </Breadcrumbs>
        </Container>
      </Container>
  )
}