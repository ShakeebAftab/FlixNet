import { FetchURIs } from '../Helpers/FetchURIs';
import { Header } from './Header';
import { NavBar } from './NavBar/NavBar';
import { Row } from './Row';
import { RowProps } from '../Helpers/Types';
import { Box } from '@material-ui/core';

const App = () => {
  return (
    <Box overflow='hidden'>
      <NavBar />
      <Header />
      {FetchURIs.map((({ title, uri }: RowProps) => <Row title={title} uri={uri} key={title} />))}
    </Box>
  );
}

export default App;
