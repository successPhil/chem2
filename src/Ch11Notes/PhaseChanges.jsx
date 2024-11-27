
import { Box, Typography } from '@mui/material';
const PhaseChanges = () => {
    return (
        <>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Chapter 11: Liquids, Solids, and Intermolecular Forces
      </Typography>
      <br/>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        Intermolecular forces are the attractive forces that exist <strong>between</strong> all molecules and atoms.
      </Typography>
      
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
          
          {/* Second Image */}
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
        <br/>


        </>
    )
}

export default PhaseChanges;