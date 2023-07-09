import { useState, useEffect, useRef } from 'react'
import CustomizedInputBase from './components/SearchInput.jsx'
import BuscaContainer from './components/BuscaContainer.jsx'
import CardPessoa from './components/CardPessoa.jsx'
import Resultados from './components/Resultados.jsx'
import florkNiver from './assets/flork-niver-red2.png'
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination'

function App() {

  let [ infoResultados, setInfoResultados ] = useState([])
  let [textoDigitado, setTextoDigitado ] = useState(false)
  const resultadosUpdater = (event) => {
    setTextoDigitado(true)
    const textInput = event.target.value
    fetch(`http://localhost:8000/resultados/?q=${textInput}`)
      .then(res => res.json())
      .then((data_json) => {setInfoResultados(data_json.resultados)})
  }
  return ( 
    <>
      <BuscaContainer temTextoDigitado={textoDigitado}>
        <Paper
    component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, margin: 2 }}>
          <CustomizedInputBase onChange={resultadosUpdater}/>
        </Paper>
      </BuscaContainer>
    <Resultados infoResultados={infoResultados}/>
    </>
  )
}

export default App
