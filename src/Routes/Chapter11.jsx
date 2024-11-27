import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import PhaseChanges from '../Ch11Notes/PhaseChanges';
import TrendsInStrength from '../Ch11Notes/TrendsInStrength';
import MoleculeAttraction from '../Ch11Notes/MoleculeAttraction';
import DispersionSize from '../Ch11Notes/DispersionSize';
import DispersionShape from '../Ch11Notes/DispersionShape';
import DipoleDipole from '../Ch11Notes/DipoleDipole';
import HydrogenBonding from '../Ch11Notes/HydrogenBonding';
import Ex11 from '../Ch11Notes/Ex11';



function Chapter11() {
  



  return (
    <div>
      <PhaseChanges/>
      <TrendsInStrength/>
      <MoleculeAttraction/>
      <DispersionSize/>
      <DispersionShape/>
      <DipoleDipole/>
      <HydrogenBonding/>
      <Ex11/>

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

      

      

      


    </div>
  );
}

export default Chapter11;
