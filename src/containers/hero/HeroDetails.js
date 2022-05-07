import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { URL } from '../../helpers/helper';


const HeroDetails= ({name, poster, animations, image}) => {
  const classes = useStyles();
 
  return (
    <div className={classes.hero}>
      <div className={classes.hero__container}>
      <h2>{name}</h2>
      <video className={classes.hero__image} autoPlay controls loop playsInline muted poster={poster}><source type={animations}/><img src={image} /></video>
      </div>
    </div>
  )
}

export default HeroDetails;

const useStyles = makeStyles((theme) => ({
  hero: {
    width: '100%',
    height: '100%',
  },
  hero__container: {
    width: '98%',
    margin: '2rem auto'
  },
  hero__image: {
    width: '100%',
    height: '600px'
  }
}))