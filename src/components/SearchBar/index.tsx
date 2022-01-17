import React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const PaperStyles = {
  p: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: '70%',
  m: '3rem auto',
  borderRadius: '50px',
  height: '40px'
}

const SearchBar = () => {
  return (
    <Paper component="form" sx={PaperStyles}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar estabelecimento"
        inputProps={{ 'aria-label': 'Buscar estabelecimento' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{ color: '#000' }} />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
