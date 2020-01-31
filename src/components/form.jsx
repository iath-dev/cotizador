import React from 'react';
import { Field, Label, Select, InputRadio, Button, ErrorContainer } from '../styled';
import { defaultForm } from '../data';
import { getYearDifference, getBrandDiscount, getPlan } from '../utils';

const Form = ({ setSummary, setLoad }) => {
    const [data, setData] = React.useState(defaultForm);
    const [error, setError] = React.useState(false);

    const { brand, year, plan } = data;

    const handleChanges = (event) => {
        const { name, value } = event.target;
        setData({...data, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (brand.trim() === '' || year.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        let result = 2000;

        // Obtener la diferencia de años
        const minus = getYearDifference(year);
        result -= (((minus*3) * result) / 100);
        result = getBrandDiscount(brand) * result;
        result = getPlan(plan) * result;

        setLoad(true);

        setTimeout(() => {
            setLoad(false);
            setSummary({
                result: parseFloat(result).toFixed(2),
                data,
            })
        }, 3000);
        setData(defaultForm);


    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            { error ? <ErrorContainer>Todos los campos son obligatorios</ErrorContainer> : null }
            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={handleChanges}
                >
                    <option value="">---Seleccione---</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiático">Asiático</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={handleChanges}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="básico"
                    checked={plan === 'básico'}
                    onChange={handleChanges}
                /> Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={handleChanges}
                /> Completo
            </Field>
            <Button type="submit">Cotizar</Button>
        </form>
    )
}

export default Form;
