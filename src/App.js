import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Categories from './components/Categories';
import Input from './components/Input';
import ProductsList from './components/ProductsList';
import productsData from './data/products.json';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.data = productsData.products;
    }
  render() {
    return (
        <Container>
          <Row>
              <Col md={12}>
                  <Input data={this.data}/>
                  <ProductsList products={this.data}/>
                  <Categories data={this.data}/>
              </Col>
          </Row>

            <Row>
                <Col md={12}>
                    <ProductsList products={this.data}/>
                    <Categories data={this.data}/>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
