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
import IonDipole from '../Ch11Notes/IonDipole';
import VaporizationProcess from '../Ch11Notes/VaporizationProcess';
import CondensationProcess from '../Ch11Notes/CondensationProcess';
import EvapVsCondensation from '../Ch11Notes/EvapVsCondensation';
import HeatOfVaporization from '../Ch11Notes/HeatOfVaporization';



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
      <IonDipole/>
      <VaporizationProcess/>
      <CondensationProcess/>
      <EvapVsCondensation />
      <HeatOfVaporization />
      

      

      

      


    </div>
  );
}

export default Chapter11;
