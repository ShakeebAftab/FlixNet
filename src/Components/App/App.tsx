import { FetchURIs } from '../../Helpers/FetchURIs';
import { Row } from '../Row/Row';
import { RowProps } from '../Types';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {FetchURIs.map((({ title, uri }: RowProps) => <Row title={title} uri={uri} key={title} />))}
    </div>
  );
}

export default App;
