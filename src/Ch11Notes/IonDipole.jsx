import { Box, Typography } from '@mui/material'
const IonDipole = () => {
    return (
        <>
        <Typography variant='h3'>
        Ion-Dipole Attraction
      </Typography>
      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
        <ul>
          <li>
            <Typography variant='body2'>
            In a <i>mixture</i> ions from an ionic compound are attracted to the dipole of polar molecules
            </Typography>
          </li>
          <li>
            <Typography variant='body2'>
            Strength of the ion-dipole attraction is one of the main factors that determines the solubility of ionic compounds in water
            </Typography>
          </li>
        </ul>
      </Box>
        </>
    )
}

export default IonDipole;