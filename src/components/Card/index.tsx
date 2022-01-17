import React from 'react'
import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'

const RestaurantName = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #404040;
`
const RestaurantAdress = styled.span`
  align-self: flex-start;
  font-size: 12px;
  color: #404040;
`

type RibbonProps = {
  isOpen?: boolean
}

const Ribbon = styled.div<RibbonProps>`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 8px;
  font-weight: bold;

  bottom: 70%;
  left: 90%;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOpen ? '#2b0d61' : '#B5ABD4')};
  color: #fff;
`

export interface RestaurantCard {
  name: string
  adress: string
  image: string
  isOpen: boolean
}

const RestaurantCard = ({ name, adress, isOpen, image }: RestaurantCard) => {
  return (
    <Grid item xs={4}>
      <Paper
        elevation={2}
        sx={{
          height: '100px',
          width: '23rem',
          display: 'flex',
          position: 'relative'
        }}
      >
        <Ribbon isOpen={isOpen}>{isOpen ? 'Aberto agora' : 'Fechado'}</Ribbon>
        <img style={{ width: '30%' }} src={image} alt="picture of restaurant" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '1rem'
          }}
        >
          <RestaurantName>{name}</RestaurantName>
          <RestaurantAdress>{adress}</RestaurantAdress>
        </Box>
      </Paper>
    </Grid>
  )
}

export default RestaurantCard
