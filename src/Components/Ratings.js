import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating(props) {
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      {/* Adjust precision to 0.1 to allow ratings like 2.1, 2.2, etc. */}
      <Rating
        className='ratings'
        name="read-only"
        value={props.star}
        precision={0.1}  
        readOnly
      />
    </Box>
  );
}
