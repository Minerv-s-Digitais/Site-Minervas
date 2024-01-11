import React, { useRef } from "react"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import photo31122023 from "../../assets/insta-photo31-12-2023.jpg"
import photo25122023 from "../../assets/insta-photo25-12-2023.jpg"
import photo24112023 from "../../assets/insta-photo24-11-2023.jpg"
import photo22112023 from "../../assets/insta-photo22-11-2023.jpg"
import photo14112023 from "../../assets/insta-photo14-11-2023.jpg"
import photo10112023 from "../../assets/insta-photo10-11-2023.jpg"
import Text from "./Text"

import "./Net.scss"

const Item = styled(Paper)(({ theme }) => ({
  height: "260px",
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  boxShadow: "none",
}));

function Net() {
  const ref = useRef(null);

  const redirectToLink = (link) => {
    window.open(link, '_blank')
  }

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="net-content-background">
      <div className="net-content">
        <Text click={() => handleClick()}  />
        <div className="imagens-grid-net">
          <Grid  container spacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo31122023} className="line1" alt="post-minervas1" onClick={() => redirectToLink('https://www.instagram.com/p/C1imyJbLpve/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo25122023} className="line1" alt="post-minervas2" onClick={() => redirectToLink('https://www.instagram.com/p/C1RkJRFOVnh/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo24112023} className="line1" alt="post-minervas3" onClick={() => redirectToLink('https://www.instagram.com/p/C0CRZBSr4kK/?img_index=1') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo22112023} className="line1" alt="post-minervas4" onClick={() => redirectToLink('https://www.instagram.com/p/Cz9-oMypFsd/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo14112023} className="line1" alt="post-minervas5" onClick={() => redirectToLink('https://www.instagram.com/p/Czo1SgPJWvn/?img_index=1') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo10112023} className="line1" alt="post-minervas6" onClick={() => redirectToLink('https://www.instagram.com/p/CzePQRsxA8G/?img_index=1') }/>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Net
