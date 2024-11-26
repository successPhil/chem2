import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';

function Chapter11() {
  return (
    <div>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Chapter 11: Liquids, Solids, and Intermolecular Forces
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        Intermolecular forces are the attractive forces that exist <strong>between</strong> all molecules and atoms.
      </Typography>
      
      <div>
        <Grid2 container spacing={2}>
          {/* First Image */}
          <Grid2 item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/changes-between-states.png"
                alt="Changes between States"
                style={{ maxWidth: '90%', height: 'auto' }} // Resize while maintaining aspect ratio
              />
              <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                This shows changes between states
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                Phase changes can be induced by heating, cooling, or changing pressure
              </Typography>
              <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600 }}>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <li>
                    <Typography variant="body2">
                      Solid to Liquid is <strong>melting</strong> or <strong>fusion</strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Liquid to Solid is <strong>freezing</strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Liquid to Gas is <strong>vaporization</strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Gas to Liquid is <strong>condensation</strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Gas to Solid is <strong>deposition</strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Solid to Gas is <strong>sublimation</strong>
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid2>
          
          {/* Second Image */}
          <Grid2 item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/phase-diagram-chem2.jpeg"
                alt="Phase Diagram 2"
                style={{ maxWidth: '90%', height: 'auto' }} // Resize while maintaining aspect ratio
              />
              <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                Looking at the phase diagram, notice the regions for solid, liquid, and gas
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                A substance is usually solid at lower temperature and high pressure
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                A substance is usually gas at high temperature and low pressure
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                The <strong>lines</strong> indicate boundaries in which the substance transitions between states
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                The <strong>triple point</strong> is where solid, liquid, and gas can coexist in equilibrium
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                The <strong>critical point</strong> is where it cannot be distinguished whether a substance is liquid or gas as both are present
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
        <br/>
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
      (weakest to strongest)
      </Typography>
      <br/>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <strong>Dispersion Forces</strong>- Temporary polarity in the molecules due to unequal electron distribution
      </Typography>
      <Typography variant='body2'>
        <strong>present in all molecules and atoms</strong>
      </Typography>
      <Typography variant='body2'>
        When a temporary dipole occurs, it induces a dipole in all the surrounding molecules
      </Typography>
      </Box>
      <br />
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <strong>Dipole-Dipole</strong>- Permanent polarity in molecules due to their structure (polar molecules)
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <strong>Hydrogen Bonds</strong>- A special stronger dipole-dipole attraction resulting from H being directly bonded to N, O, or F
      </Typography>
      
      <br />
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Effect of molecular size on dispersion force 
      </Typography>
      <br />

      <Typography variant='body1' sx={{textAlign: 'center'}}>
        As molar mass increases, the <strong>number of electrrons</strong> increases
      </Typography>
      <Typography variant='body1' sx={{textAlign: 'center'}}>
        A larger electron cloud is <strong>more polarizable</strong>
      </Typography>
      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <li>
                    <Typography variant="body2">
                      Strength of dispersion forces <strong>increases</strong> with molar mass
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Stronger attractive forces between molecules <strong>increases</strong> the boiling point
                    </Typography>
                  </li>
                </ul>
        </Box>


      </div>
    </div>
  );
}

export default Chapter11;
