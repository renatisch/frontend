import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Wrapper from './components/AppBar/Wrapper';
import PageWrapper from './components/PageWrapper/PageWrapper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import JobsPage from './pages/jobs/JobsPage';
import AgentsPage from './pages/agents/AgentsPage';
import LoadersPage from './pages/loaders/LoadersPage';
import LLMsPage from './pages/llms/LLMsPage';
import SchemasPage from './pages/schemas/schemasPage';

const theme = createTheme({
  palette: {
    primary: {
      main:"#115293"
    },
    secondary: indigo
  },
});

function App() {
  const [isOpen, setIsOpen] = useState(true)
  return ( 
    <ThemeProvider theme={theme}>
    <Router>
      <Wrapper isDrawerOpen={isOpen} setDrawerOpen={setIsOpen}>
      <Routes>
        <Route>
          <Route path="/jobs" element={<PageWrapper isOpen={isOpen} page={<JobsPage/>}/>} />
          <Route path="/agents" element={<PageWrapper isOpen={isOpen} page={<AgentsPage/>}/>} />
          <Route path="/loaders" element={<PageWrapper isOpen={isOpen} page={<LoadersPage/>}/>} />
          <Route path="/llms" element={<PageWrapper isOpen={isOpen} page={<LLMsPage/>}/>} />
          <Route path="/schemas" element={<PageWrapper isOpen={isOpen} page={<SchemasPage/>}/>} />
        </Route>
      </Routes>
      </Wrapper>
    </Router>
    </ThemeProvider>
   );
}

export default App;
