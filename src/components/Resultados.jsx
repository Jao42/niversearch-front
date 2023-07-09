import * as React from 'react';
import CardPessoa from './CardPessoa.jsx'


export default function Resultados({ infoResultados }) {
  return (
    <>
    {infoResultados.map((pessoaCardInfo, indice) => (
      <CardPessoa key={indice} pessoaCardInfo={pessoaCardInfo}/>
    ))}
    </>
  )
}

