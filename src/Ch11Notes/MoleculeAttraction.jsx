import { Box, Typography } from '@mui/material';
const MoleculeAttraction = () => {
    return (
        <>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Why are other molecules attracted to each other?
      </Typography>
      <Typography variant='body1'>
        Due to attractive forces between <strong>opposite</strong> charges
      </Typography>
      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <li>
                    <Typography variant="body2">
                      (+) ion to (-) ion or cation to anion
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      (+) end of polar molecule to (-) end of polar molecule (dipole)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                     <strong>Temporary</strong> changes in instantaneous diples for <strong>nonpolar</strong> molecules
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Larger charge = stronger attraction</strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Longer distance = weaker attraction</strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Intermolecular</strong> attractive foces are small compared to bonding forces<strong>(intramolecular)</strong> between atoms
                    </Typography>
                  </li>
                </ul>
              </Box>
              <br/>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Types of Intermolecular Attractive Forces 
      </Typography>
      <Typography variant='body2' sx={{textAlign: 'center'}}>
      (<i>weakest</i> to <strong>strongest</strong>)
      </Typography>
      <br/>
      
        
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <strong>Dispersion Forces</strong>- Temporary polarity in the molecules due to unequal electron distribution
        </Typography>
        <br/>
        <Typography variant='body2'><i>aka</i> London forces or van der Waals forces</Typography> 
      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
        <ul>
          <li>
            <Typography variant='body2'>
            weakest of intermolecular attractions
            </Typography>
          </li>
          <li>
            <Typography variant='body2'>
            <strong>present in all molecules and atoms</strong>
            </Typography>
          </li>
          <li>
            <Typography variant='body2'>
            magnitude increases with molar mass
            </Typography>
          </li>
        </ul>
      </Box>
      <br />
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <strong>Dipole-Dipole</strong>- Attraction between positive dipole and negative dipole in polar molecules
      </Typography>
      <br/>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <strong>Hydrogen Bonds</strong>- A special stronger dipole-dipole attraction resulting from H being directly bonded to N, O, or F
      </Typography>
      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
        <ul>
          <li>
            <Typography variant='body2'>
              strongest intermolecular forces a pure substance can have
            </Typography>
          </li>
        </ul>
      </Box>

      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <strong>Ion-Dipole</strong>- attraction between a charged ion and the partial charges of a polar molecule
      </Typography>
      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
        <ul>
          <li>
            <Typography variant='body2'>
            strongest of the intermolecular forces
            </Typography>
          </li>
          <li>
            <Typography variant='body2'>
            present in mixtures of ionic compounds with polar molecules
            </Typography>
          </li>
          <li>
            <Typography variant='body2'>
            especially important in aqueous solutions of ionic compounds
            </Typography>
          </li>
        </ul>
      </Box>
      <br />
      <img
        src="/images/intermolecular-table.png"
        alt="Changes between States"
        style={{ maxWidth: '90%', height: 'auto' , marginBottom: '6px'}} // Resize while maintaining aspect ratio
      />
      <br/>
        </>
    )
}

export default MoleculeAttraction