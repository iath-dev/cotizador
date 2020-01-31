import React from 'react';
import { SummaryContainer } from '../styled';
import { toCapital } from '../utils';

const Summary = ({ data }) => {

    if (!data) { return null }

    const { brand, year, plan } = data;

    return (
        <SummaryContainer>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {toCapital(brand)}</li>
                <li>Plan: {toCapital(plan)}</li>
                <li>Año: {year}</li>
            </ul>
        </SummaryContainer>
    )
}

export default Summary;
