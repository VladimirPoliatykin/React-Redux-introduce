import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  & li {
    text-align: center;
    : hover {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
export default class Categories extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount() {
        this.getCategories();
    }

    getCategories() {
        this.categories = new Set();
        this.props.data.forEach((product) => {
            this.categories.add(product.bsr_category);
        });
    };

    render() {
        const categories = [...this.categories];
        return (
            <List>
                <li>All</li>
                {categories && categories.map((category) => {
                    return (
                        <li>{category}</li>
                    )
                })}
            </List>
        )
    }
}