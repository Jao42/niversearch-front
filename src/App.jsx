import { useState } from 'react'
import CustomizedInputBase from './components/SearchInput.jsx'
import florkNiver from './assets/flork-niver-red2.png'
import Paper from '@mui/material/Paper';

function App() {

  return ( 
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
