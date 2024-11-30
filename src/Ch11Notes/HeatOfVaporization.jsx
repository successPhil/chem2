import {Box, Typography} from '@mui/material'
const HeatOfVaporization = () => {
    return (
        <>
        <Typography variant='h3'>
        Heat of Vaporization
        </Typography>

        <Box sx={{ mt: 2, textAlign: 'left', width: '100%', maxWidth: 600, mx: 'auto' }}>
            <ul>
                <li>
                    <Typography variant='body2'>
                        The amount of heat energy required to vaporize one mole of liquid is called the <strong>heat of vaporization</strong> or <strong>&Delta;H<sub>vap</sub></strong>
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        Always endothermic, therefore <strong>&Delta;H<sub>vap</sub></strong> is <i>positive</i> (+)
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        Somewhat temperature dependent
                    </Typography>
                </li>
                <li>
                    <Typography variant='body2'>
                        <strong>&Delta;H<sub>condensation</sub></strong>=-<strong>&Delta;H<sub>vaporization</sub></strong>
                    </Typography>
                </li>
            </ul>
        </Box>

        </>
    )
}

export default HeatOfVaporization;