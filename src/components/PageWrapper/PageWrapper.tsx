import "./PageWrapper.css"
import { styled} from '@mui/material/styles';
import Container from '@mui/material/Container';
import { ReactNode } from "react";

const drawerWidth = 240;
type Props = {
    isOpen: boolean
    page: ReactNode
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    margin: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    marginTop: 50,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));


export default function PageWrapper({page,isOpen }: Props) {
  return (
    <Main open={isOpen}>
      <Container className='pageContainer'>
        {page}
      </Container>
    </Main> 
  )
}