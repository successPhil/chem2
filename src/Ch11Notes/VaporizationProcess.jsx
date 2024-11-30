import { Box, Typography} from '@mui/material'
const VaporizationProcess = () => {
    return (
        <>
        <Typography variant='h3'>
        Vaporization Process
        </Typography>

        <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
            <ul>
                <li>
                    <Typography variant='body2'>
                        The <strong>rate</strong> of <span style={{color: "blue"}}>vaporization</span> increases with increasing <span sx={{color: 'red'}}>temperature</span> or increasing <span sx={{color: 'purple'}}>surface area</span>
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        Rate of vaporization increase with <i>decreasing</i> strength of intermolecular forces
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        When high energy molecules are lost from the liquid, the average kinetic energy is lowered
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        <span sx={{color: 'blue'}}>vaporization</span> is an <span style={{color: 'blue'}}>endothermic</span> process
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                    Vaporization requires <span style={{color: 'red'}}>input of energy</span> to overcome the attraction between molecules
                    </Typography>
                </li>
            </ul>
        </Box>
        </>
    )
}

export default VaporizationProcess;