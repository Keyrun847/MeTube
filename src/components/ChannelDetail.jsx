import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetch } from '../utils/fetch'

import { Videos, ChannelCard } from './'

const ChannelDetail = () => {

  const [channelDeatil, setchannelDeatil] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`channels?part=snippet&id=${id}`).then((data) => setchannelDeatil(data?.items[0]));
  }, [id]);

  useEffect(() => {
    fetch(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight='95vh' >
      <Box>
        <div style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(181,58,34,0.9376218323586745) 58%)', zIndex: 10, height:'150px'}} />
        <ChannelCard channel={channelDeatil} marginTop='-100px' />
      </Box>
      <Box display='flex' p={2} sx={{ml: { lg:'130px' }}}>
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail