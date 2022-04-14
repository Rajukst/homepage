import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const News = () => {
    return (
        <div style={{ width: '100%',  }}>
      <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
       <Typography variant="h4">
         <Box sx={{ fontWeight: 'bold', display: 'inline', color: 'Aquamarine'}}>News:</Box> Hostel Hub Index 
         reveals latest hotel booking trends
      </Typography>
       <Typography variant="h6">
       Monthly transactions globally via HotelHub platform have risen to 61% of pre-pandemic volumes
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
      HotelHub, the leading hotel technology solution provider for TMCs and their corporate customers has revealed that global transactions continued to climb in the final quarter of 2021, giving cause for optimism 
      that bookings made via the platform will reach pre-pandemic levels before the end of this year.
      </Typography>
      </Box>
    </div>
    );
};

export default News;