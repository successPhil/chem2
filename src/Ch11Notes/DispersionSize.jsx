import { Box, Typography } from '@mui/material';
const DispersionSize = () => {
    return (
        <>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Effect of molecular size on dispersion force 
      </Typography>
      <br />
      <img
        src="/images/mm-dispersion.png"
        alt="Changes between States"
        style={{ maxWidth: '90%', height: 'auto', marginBottom: '6px' }} // Resize while maintaining aspect ratio
      />

      
      
      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <li>
                    <Typography variant='body1'>
                    As molar mass increases, the <strong>number of electrons</strong> increases
                    </Typography>
                  </li>
                  <li>
                  <Typography variant='body1'>
                  A larger electron cloud is <strong>more polarizable</strong>
                  </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Strength of dispersion forces <strong>increases</strong> with molar mass
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Stronger</strong> attractive forces between molecules <strong style={{color: 'red'}}>increases</strong> the boiling point
                    </Typography>
                  </li>
                </ul>
      </Box>
      <br/>
        </>
    )
}

export default DispersionSize;