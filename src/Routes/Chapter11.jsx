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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <strong>Dispersion Forces</strong>- Temporary polarity in the molecules due to unequal electron distribution
      </Typography>
      <br/>
      <Typography variant='body2'><i>aka</i> London forces or van der Waals forces</Typography>
      <br/>
      <Typography variant='body2'>
        <strong>present in all molecules and atoms</strong>
      </Typography>
      <br/>
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
      <img
                src="/images/mm-dispersion.png"
                alt="Changes between States"
                style={{ maxWidth: '90%', height: 'auto' }} // Resize while maintaining aspect ratio
              />

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
                      <strong>Stronger</strong> attractive forces between molecules <strong style={{color: 'red'}}>increases</strong> the boiling point
                    </Typography>
                  </li>
                </ul>
      </Box>
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

      <Typography variant='h3'>
        Hydrogen bonding: dipole-dipole
      </Typography>
      <br/>

      <Typography variant='body1'>
        When a very <strong>electronegative</strong> atom (<i>N</i>,<i>O</i>,<i>F</i>) is bonded to <span style={{color: 'red'}}>hydrogen</span> it strongly pulls the bonding electrons towards it
      </Typography>

      <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
        <ul>
          <li>
            <Typography variant='body1'>
              Since hydrogen has no other electrons, when its electron is pulled the nucleus becomes deshielded (proton exposed)
            </Typography>
          </li>
          <li>
            <Typography variant='body1'>
            The exposed proton acts as a very strong center of positive charge, attracting all the electron clouds from neighboring molecules.
            </Typography>
          </li>
          <li>
            <Typography variant='body1'>
            Hydrogen bonds are very strong intermolecular attractive forces. (stronger than dipole-dipole and dispersion forces)
            </Typography>
          </li>
          <li>
            <Typography variant='body1'>
            Substances that can form hydrogen bonds will have higher boiling points and melting points than similar substances that cannot
            </Typography>
          </li>
        </ul>
      </Box>


      </div>
    </div>
  );
}

export default Chapter11;
