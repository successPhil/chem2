import { Box, Typography } from '@mui/material';
const TrendsInStrength = () => {
    return (
        <>
         <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Trends in strength (intermolecular) attractions
      </Typography>
      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>
            <Typography variant='body2'>
              The <strong>stronger</strong> the attraction between atoms or molecules, the <span style={{color: 'red'}}>more energy</span> it will take to separate them
            </Typography>
          </li>
          <li>
            <Typography variant='body2'>
              Boiling a liquid requires adding enough energy to <span style={{color: 'red'}}>overcome all the attractions</span> between particles (not the covalent bonds or intramolecular forces)
            </Typography>
          </li>
          <li>
            <Typography variant='body2'>
              The <span style={{color: 'red'}}>higher</span> the normal <i>boiling point</i> of a liquid, the <strong>stronger</strong> the intermolecular attractive forces
            </Typography>
          </li>
        </ul>
      </Box>
        </>
    )
}

export default TrendsInStrength;