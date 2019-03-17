import React, { Component } from 'react';
import styled from 'styled-components';
import { H1, H2, H3 } from '../styled/common-styled-tags';

const StyledProductsWrapper = styled.div`
  
`;
const StyledLink = styled.a`
  
`;
const Poster = styled.img`
  
`;

const StyledProductWrapper = styled.div`
  
`;

export default class Input extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        debugger
        const { products } = this.props;
        return (
            <StyledProductsWrapper>
                {products.map((item) => (
                    <StyledLink url={item.link}>
                        <StyledProductWrapper>
                            <H1>{item.name}</H1>
                            <Poster src={item.img}/>
                            <H2>Brand: {item.brand}</H2>
                            <H3>Price: {item.price}</H3>
                        </StyledProductWrapper>
                    </StyledLink>
                ))}
            </StyledProductsWrapper>
        )
    }
}