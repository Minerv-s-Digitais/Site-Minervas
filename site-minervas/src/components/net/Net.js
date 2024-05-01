import React, { useRef } from "react"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import photo01052024 from "../../assets/insta-photo01-05-2024.jpg"
import photo11042024 from "../../assets/insta-photo11-04-2024.jpg"
import photo08032024 from "../../assets/insta-photo08-03-2024.jpg"
import photo22012024 from "../../assets/insta-photo22-01-2024.jpg"
import photo31122023 from "../../assets/insta-photo31-12-2023.jpg"
import photo25122023 from "../../assets/insta-photo25-12-2023.jpg"
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
                <img src={photo01052024} className="line1" alt="post-minervas1" onClick={() => redirectToLink('https://www.instagram.com/p/C6cB3icJq-m/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo11042024} className="line1" alt="post-minervas2" onClick={() => redirectToLink('https://www.instagram.com/p/C5o6-EqrVEv/?img_index=1') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo08032024} className="line1" alt="post-minervas3" onClick={() => redirectToLink('https://www.instagram.com/p/C4RBOEFpmXS/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo22012024} className="line1" alt="post-minervas4" onClick={() => redirectToLink('https://www.instagram.com/p/C2ZzJhErRD-/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo31122023} className="line1" alt="post-minervas5" onClick={() => redirectToLink('https://www.instagram.com/p/C1imyJbLpve/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo25122023} className="line1" alt="post-minervas6" onClick={() => redirectToLink('https://www.instagram.com/p/C1RkJRFOVnh/') }/>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Net
