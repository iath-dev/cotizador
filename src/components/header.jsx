import React from 'react';
import { HeaderContainer, TextHeader } from '../styled';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <HeaderContainer>
        <TextHeader>{title}</TextHeader>
    </HeaderContainer>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
