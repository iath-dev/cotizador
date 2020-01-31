import React from 'react';
import { Message, ResultText, ResultContainer } from '../styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Result = ({ result }) => {

    if(!result) { return <Message>Ingrese la marca del vehículo, el año y su plan</Message> }

    return (
        <ResultContainer>
            <TransitionGroup component="p" className="resultado">
                <CSSTransition classNames="resultado" key={result} timeout={{ enter: 500, exit: 500 }}>
                    <ResultText>El total es: $ {result}</ResultText>
                </CSSTransition>
            </TransitionGroup>
        </ResultContainer>
    );
}

export default Result;
