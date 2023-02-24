import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import caixalogo from '../../assets/img/caixa_bank_logo.png';
import instagram from '../../assets/img/Vector.svg';
import facebook from '../../assets/img/facebook.svg';
import contact from '../../assets/img/send.svg';
import './Footel.style.css'

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <div className='icons-footer-container'>
                <span><sub>@2023 Releerte</sub></span>
                <img id='caixaIcon' src={caixalogo} alt='logo Caixa Bank'/>
                <div className='social-media'>
                    <img src={instagram} alt='instagram logo' />
                    <img src={facebook} alt='instagram logo' />
                    <img src={contact} alt='instagram logo' />
                </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}