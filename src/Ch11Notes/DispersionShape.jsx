import { Box, Typography } from '@mui/material';
const DispersionShape = () => {
    return (
        <>
        <Typography variant='h3'>
        Effect of molecular shape on dispersion force
      </Typography>
      <br/>
      <img
        src="/images/shape-dispersion.png"
        alt="Changes between States"
        style={{ maxWidth: '90%', height: 'auto' }} // Resize while maintaining aspect ratio
      />
      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
      <ul>
        <li>
          <Typography variant='body2'>
            Larger surface area = <strong>stronger</strong> dispersion forces
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Elongated or flat shape = greater area of interaction
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            Compact or spherical shapes = reduced interaction area = <i>weaker</i> dispersion forces
          </Typography>
        </li>
      </ul>
      </Box>
        </>
    )
}

export default DispersionShape;