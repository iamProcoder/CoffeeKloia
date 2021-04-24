import Header from './Header';
import SideMenu from './left/SideMenu';
import Content from './right/Content';
import { Container, Row } from 'reactstrap';

const App = () => {
  return (
    <>
      <Container>
        <Row className="border-bottom">
          <Header />
        </Row>
        <Row className="container-fluid mt-3">
          <SideMenu />
          <Content />
        </Row>
      </Container>
    </>
  );
}

export default App;
