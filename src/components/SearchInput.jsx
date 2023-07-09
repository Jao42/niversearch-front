import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import DirectionsIcon from '@mui/icons-material/Directions'

export default function SearchInput( {onChange} ) {
  return (
    <>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Quem você deseja saber o niver? "
        inputProps={{ 'aria-label': 'search niverday' }}
        onChange={onChange}
      />
      <IconButton 
        type="button" 
        sx={{ p: '10px' }} 
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </>
  );
}

