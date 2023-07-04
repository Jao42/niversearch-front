import { useState } from 'react'
import CustomizedInputBase from './components/SearchInput.jsx'
import CardPessoa from './components/CardPessoa.jsx'
import Resultados from './components/Resultados.jsx'
import florkNiver from './assets/flork-niver-red2.png'
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination'

function App() {

  const infoResultados = [
    {
      nome: 'Rafael Souza Santos',
      cpfMask: '123.xxx.xxx-23',
      dataNasc: '12/08/1999',
      id: 1
    },
    {
      nome: 'Bafael Souza Santos',
      cpfMask: '123.xxx.xxx-23',
      dataNasc: '12/08/1999',
      id: 2
    },
    {
      nome: 'Dafael Souza Santos',
      cpfMask: '123.xxx.xxx-23',
      dataNasc: '12/08/1999',
      id: 3
    },
    {
      nome: 'Rafael Souza Santos',
      cpfMask: '123.xxx.xxx-23',
      dataNasc: '12/08/1999',
      id: 4
    },
  ]

  return ( 
    /*
    <>
      <Resultados infoResultados={infoResultados}/>
      <Pagination count={10} style={{display: 'flex', justifyContent: 'center'}}/>
    </>
    */
    
    
    <div className="container">

      <img className="flork-img" src={florkNiver} 
      alt="bonequin com um bolo e chapeu de niver"
      width="200"
      heigth="200"
      />
      <span className="frase-main">
        relembrar o aniversário dos besties agora ficou mais fácil
      </span>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, margin: 2 }}
    >
      <CustomizedInputBase />
      </Paper>

    </div> 
  )
}

export default App
