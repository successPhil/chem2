import { Box, Typography} from '@mui/material'
const CondensationProcess = () => {
    return (
        <>
        <Typography variant='h3'>
        Condensation
        </Typography>

        <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
            <ul>
                <li>
                    <Typography variant='body2'>
                        Some molecules of vapor will lose energy through molecular collisions
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        When this happens some of the molecules will get captured back into the liquid
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        Some may stick and gather together to form droplets of liquid <i>particulary</i> on surrounding surfaces
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        <span style={{color: 'red'}}>Condensation</span> is an <span style={{color: 'red'}}>exothermic</span> process
                    </Typography>
                </li>
            </ul>
        </Box>
        </>
    )
}

export default CondensationProcess;