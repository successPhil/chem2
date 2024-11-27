import { Box, Typography } from '@mui/material';
const HydrogenBonding = () => {
    return (
        <>
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
        </>
    )
}

export default HydrogenBonding;