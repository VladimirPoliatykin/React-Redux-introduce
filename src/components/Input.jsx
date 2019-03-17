import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  
`;

const StyledInput = styled.input.attrs(({}) => ({
    type: 'text'
}))`
  padding: 10px;
  display: block;
  width: 100%;
`;
export default class Input extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <StyledInputWrapper>
                <StyledInput />
            </StyledInputWrapper>
        )
    }
}