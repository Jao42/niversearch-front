import * as React from 'react';
import CardPessoa from './CardPessoa.jsx'
import CustomizedInputBase from './SearchInput.jsx'
import Resultados from './Resultados.jsx'
import florkNiver from '../assets/flork-niver-red2.png'
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination'


export default function BuscaContainer({ temTextoDigitado, children }) {
  let containerContent;
    if (temTextoDigitado === false) {
        containerContent = (
          <>
          <img className="flork-img" src={florkNiver}
          alt="bonequin com um bolo e chapeu de niver"
          width="200"
          heigth="200"
          />     
        <span className="frase-main">
          relembrar o aniversário dos besties agora ficou mais fácil
        </span>
        </>
      )
     }
  return (
   <div className="container">
     {containerContent || ''}
     {children}
  </div>
  )
}

