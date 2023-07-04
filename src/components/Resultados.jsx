import * as React from 'react';
import CardPessoa from './CardPessoa.jsx'


export default function Resultados({ infoResultados }) {
  return (
    <>
    {infoResultados.map((pessoaCardInfo) => (
      <CardPessoa key={pessoaCardInfo.id} pessoaCardInfo={pessoaCardInfo}/>
    ))}
    </>
  )
}

