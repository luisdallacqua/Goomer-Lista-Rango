import Container from '@mui/material/Container'
import RestaurantCard from '../components/Card'
import Grid from '@mui/material/Grid'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import SearchBar from '../components/SearchBar'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  )
}

export default function Home() {
  const [restaurants, setRestaurants] = useState<any[]>([])

  useEffect(() => {
    async function fetchRestaurants() {
      const response = await axios.get(
        'https://challange.goomer.com.br/restaurants'
      )
      setRestaurants(response.data)
    }
    fetchRestaurants()
  }, [])

  return (
    <>
      <Navbar />

      <Container sx={{ marginTop: '4rem' }}>
        <SearchBar />
        <Grid container spacing={4}>
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                adress={restaurant.adress}
                image={restaurant.image}
                isOpen={true}
              />
            )
          })}
        </Grid>
      </Container>
    </>
  )
}
