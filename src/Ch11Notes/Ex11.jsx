import { useState } from "react";
import { Box, Typography, Button } from '@mui/material';

const Ex11 = () => {
    const [showEx11 , setShowEx11] = useState(false) // Hydrogen bonding question

    const handleClickEx11 = () =>{
        setShowEx11((prevState) => !prevState)
    }
    return (
        <>
        <Typography variant='h3'>
        Practice problem
      </Typography>
      <br/>

      <img
        src="/images/ex11problem.png"
        alt="Changes between States"
        style={{ maxWidth: '90%', height: 'auto' }} // Resize while maintaining aspect ratio
      />

      
      <Button variant='contained' onClick={handleClickEx11} sx={{my: 2}}>{!showEx11 ? 'Show Solution' : 'Hide'}</Button>
      {showEx11 && (
      <img
        src="/images/ex11solution.png"
        alt="Changes between States"
        style={{ maxWidth: '90%', height: 'auto' }} // Resize while maintaining aspect ratio
      />
      )}
      
        </>
    )
}

export default Ex11;