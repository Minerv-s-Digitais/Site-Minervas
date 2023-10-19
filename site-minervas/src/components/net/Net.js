import React, { useRef } from "react"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import photo19092023 from "../../assets/insta-photo19-09-2023.jpg"
import photo18082023 from "../../assets/insta-photo18-08-2023.jpg"
import photo10082023 from "../../assets/insta-photo10-08-2023.jpg"
import photo26072023 from "../../assets/insta-photo26-07-2023.jpg"
import photo28062023 from "../../assets/insta-photo28-06-2023.jpg"
import photo18062023 from "../../assets/insta-photo18-06-2023.jpg"
import photo25052023 from "../../assets/insta-photo25-05-2023.jpg"
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
                <img src={photo19092023} className="line1" alt="post-minervas1" onClick={() => redirectToLink('https://www.instagram.com/p/CxYg-mYpiny/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo18082023} className="line1" alt="post-minervas2" onClick={() => redirectToLink('https://www.instagram.com/p/CwGkaa_JI5H/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo10082023} className="line1" alt="post-minervas3" onClick={() => redirectToLink('https://www.instagram.com/p/CvyLVx9JO5Z/?img_index=1') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo26072023} className="line1" alt="post-minervas4" onClick={() => redirectToLink('https://www.instagram.com/p/CvLWGrIpfJn/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo28062023} className="line1" alt="post-minervas5" onClick={() => redirectToLink('https://www.instagram.com/p/CuCr_g5rX9b/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo18062023} className="line1" alt="post-minervas6" onClick={() => redirectToLink('https://www.instagram.com/p/CtpsizaJxTx/?img_index=1') }/>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Net
