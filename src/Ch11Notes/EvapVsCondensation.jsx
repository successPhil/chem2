import { Box, Typography} from '@mui/material'
const EvapVsCondensation = () => {
    return (
        <>
        <Typography variant='h3'>
        Evaporation vs Condensation
        </Typography>

        <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
            <ul>
                <li>
                    <Typography variant='body2'>
                        <span style={{color: 'blue'}}>Vaporization</span> and <span style={{color:'red'}}>Condensation</span> are <strong>opposite</strong> processes
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        In an <strong>open container</strong> vapor molecules generally spread out faster than they can condense
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        Rate of vaporization is greater than rate of condensation, and there is a net loss of liquid
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        In a <strong>closed container</strong> vapor cannot spread out indefinitely
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        At some point in time the rates of vaporization and condensation will be equal
                    </Typography>
                </li>
            </ul>
        </Box>

        </>
    )
}

export default EvapVsCondensation;