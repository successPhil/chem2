import { Box, Typography } from '@mui/material';
const DipoleDipole = () => {
    return (
        <>
        <Typography variant='h3'>
        Dipole-Dipole attractions (interactions between polar molecules) 
      </Typography>

      <Typography variant='body1'>
        Polar molecules have a <strong>permanent</strong> dipole
      </Typography>

      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
      <ul>
      <li>
        <Typography variant='body2'>
          Bond polarity and shape determine a substances polarity
        </Typography>
      </li>
      <li>
        <Typography variant='body2'>
        Positive end of one dipole attracts the negative end of another.
        </Typography>
      </li>
      <li>
        <Typography variant='body2'>
        Stronger dipoles → stronger dipole-dipole interactions.
        </Typography>
      </li>
      <li>
        <Typography variant='body2'>
        Alignment of dipoles increases attraction strength.
        </Typography>
      </li>
      <li>
        <Typography variant='body2'>
        Higher boiling points compared to nonpolar molecules of similar size due to stronger intermolecular attractions
        </Typography>
      </li>
      </ul>
      </Box>
        </>
    )
}

export default DipoleDipole;