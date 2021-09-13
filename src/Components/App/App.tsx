import { FetchURIs } from '../../Helpers/FetchURIs';
import { Header } from '../Header/Header';
import { Row } from '../Row/Row';
import { RowProps } from '../Types';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      {FetchURIs.map((({ title, uri }: RowProps) => <Row title={title} uri={uri} key={title} />))}
    </div>
  );
}

export default App;
