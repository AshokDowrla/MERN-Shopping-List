import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './component/NavBar';
import ShoppingList from './component/ShoppingList';
import { Container } from "reactstrap"
import "./App.css"
import ItemModal from './component/ItemModal';
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    </div>
  );
}

export default App;
