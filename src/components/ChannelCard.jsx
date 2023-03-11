import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channel, marginTop }) => (
  <Box
    sx={{ 
      boxShadow:'none', 
      borderRadius:'20px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:{ xs:'90vw', sm: '358px', md: "320px" },
      height:'326px',
      margin:'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channel?.id?.channelId}`}>
      <CardContent sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', color:'#fff' }}>
        <CardMedia
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippet?.title}
          sx={{ borderRadius:'50%', width:'180px', height:'180px', mb:2, border:'1px solid #e3e3e3' }}
        />
        <Typography variant='h6'>
          {channel?.snippet?.title}
          <CheckCircle sx={{ fontSize:'14px', color:'gray', ml:'5px' }} />
        </Typography>
        {channel?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
        </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard