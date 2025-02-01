import { Box, Grid2, Typography } from '@mui/material';
import useFetchData from './hooks/useFetchData.js'
import SearchBar from './components/searchbar/searchbar.jsx';
import { useState } from 'react';
import { getColorFromPercentage } from './utils/colorbar.js';
import { LinearProgressWithLabel } from './components/progress-bar/progressBar.jsx';

function App() {

  const {data,loading,error} =useFetchData()

  const [civilizacion,setCivilizacion] = useState(null)


  return (
    <>
      <Grid2 size={12} paddingTop={"20px"}>
        <Grid2 display={"flex"} size={"grow"} justifyContent={"center"}>
          {
            loading ?
              <h1>Cargando</h1>
            : error ? <h3>falló la carga de datos desde la api, se estan usando los datos cargados en un mock</h3>  :''
          }
        </Grid2>
        <Grid2 display={"flex"} size={"grow"} justifyContent={"center"}>
          {
              data?.length ?
                      <SearchBar civilizaciones={data} setCivilizacion={setCivilizacion}/>
                :'No se pudieron cargar los datos'
            }
        </Grid2>
        {civilizacion?
        <Grid2 size={12} >
          <Grid2  gap={2} display={"flex"} justifyContent={"center"} alignItems={"center"} padding={"20px"}>
            <Box       
                component="img"
                src={import.meta.env.VITE_API_BASE_IMG+civilizacion.left_image}
                alt={"main-image"+civilizacion.name}
                sx={{ width: 50, height: 50 }}
            />
            <Typography>
              {civilizacion.name}
            </Typography>
          </Grid2>
          <Grid2 container spacing={2} columns={2} height={"400px"} padding={"25px"}>
            <Grid2 size={1} sx={{border:"solid 1px #ccc", backgroundColor:"#3277a8"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Typography variant='h3' sx={{color:"#fff"}}>
                Victorias: {civilizacion.wins}
              </Typography>
            </Grid2>
            <Grid2 size={1} 
              sx={{border:"solid 1px #ccc",backgroundColor:getColorFromPercentage(Math.floor(100*civilizacion.wins/civilizacion.total))}}
              display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Typography variant='h3' >
                Porcentaje de victorias: {Math.floor(100*civilizacion.wins/civilizacion.total)}%
              </Typography>
            </Grid2>
          </Grid2>
          <Box>
            <LinearProgressWithLabel value={Math.floor(100*civilizacion.wins/civilizacion.total)}/>
          </Box>
        </Grid2>
          :''
        }
      </Grid2>
    </>
  )
}

export default App
