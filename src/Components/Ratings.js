import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(props) {
  const [value, setValue] = React.useState(2);
 console.log("Ratings is "+props.star)
  return (
    <Box  sx={{ '& > legend': { mt: 2 } }}>
      
      
      <Rating className='ratings' name="read-only" value={props.star} readOnly />
     
    </Box>
  );
}
