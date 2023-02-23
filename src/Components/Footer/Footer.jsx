import React from 'react';
import caixalogo from '../../assets/images/caixa_bank_logo.png';
import instagram from '../../assets/images/Vector.svg';
import facebook from '../../assets/images/facebook.svg';
import contact from '../../assets/images/send.svg';

const Footer = () => {
    return (
    <>
        <p>@2023 Releerte</p>
        <img src={caixalogo} alt='logo Caixa Bank'/>
        <div>
            <img src={instagram} alt='instagram logo' />
            <img src={facebook} alt='instagram logo' />
            <img src={contact} alt='instagram logo' />
        </div>
    </>
    )
}

export default Footer