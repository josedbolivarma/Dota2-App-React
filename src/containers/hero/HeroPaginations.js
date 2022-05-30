import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { URL } from '../../helpers/helper';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedModal } from '../../redux/actions/actionModal';

const HeroPaginations = ({ id }) => {
  const classes = useStyles();
  const [previousHero, setPreviousHero] = useState({});
  const [nextHero, setNextHero] = useState({});
    
    useEffect(() => {
    const nextHeroId = id + 1;
    const previousHeroId = id - 1;
    const getCharacters = async () => {
      const previousHero = await axios.get(URL + previousHeroId);
      const nextHero = await axios.get(URL + nextHeroId);
      const previousHeroData = previousHero.data;
      const nextHeroData = nextHero.data;
      setPreviousHero(previousHeroData);      
      setNextHero(nextHeroData);      
     }
      getCharacters();
    }, [])
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const selectHero = (item) => {
      dispatch(selectedModal(item));
      navigate('/hero');
      window.scrollTo(0, 0);
      window.location.reload();
    }
  
  return (
    <div className={classes.heroPaginations}>
        <div className={classes.heroPaginations__container}>
        <div 
        className={classes.heroPaginations__boxHero} 
        onClick={() => selectHero(previousHero)}
        style={{
          justifyContent: 'right',
        }}
        >
        <img 
        className={classes.heroPaginations__animation} 
        src={previousHero.image}
        style={{
          left: '-100px'
        }}
        alt='Previous Hero'
        />
        <div className={classes.heroPaginations__boxContentOne}>
            <h3>HÉROE ANTERIOR</h3>
            <h2>{previousHero.localized_name}</h2>
            <h3>{previousHero.attack_type}</h3>
        </div>

        <div className={classes.heroPaginations__heroBackground}></div>
        </div>

      <div className={classes.heroPaginations__heroAllBox}
      onClick={() => navigate('/')}
      >
        <div className={classes.heroPaginations__boxes}>
          <div className={classes.heroPaginations__boxesBox} />
          <div className={classes.heroPaginations__boxesBox} />
          <div className={classes.heroPaginations__boxesBox} />
          <div className={classes.heroPaginations__boxesBox} />
          <div className={classes.heroPaginations__boxesBox} />
          <div className={classes.heroPaginations__boxesBox} />
        </div>
        <h2 className={classes.heroPaginations__heroAllBoxTitle}>TODOS LOS <br />HÉROES</h2>
      </div>
      
        <div 
        className={classes.heroPaginations__boxHero}
        onClick={() => selectHero(nextHero)}
        style={{
          justifyContent: 'left',
        }}
        >
          <img 
          className={classes.heroPaginations__animation} 
          src={nextHero.image}
          style={{
            right: '-100px'
          }}
          alt='Next Hero'
          />
          <div className={classes.heroPaginations__boxContentOne}>
            <h3>HÉROE ANTERIOR</h3>
            <h2>{nextHero.localized_name}</h2>
            <h3>{nextHero.attack_type}</h3>
        </div>
          <div className={classes.heroPaginations__heroBackground}></div>
        </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  heroPaginations: {
    width: '100%',
    height: '100%',
    marginTop: '16rem'
  },
  heroPaginations__container: {
    display: 'grid',
    gridTemplateColumns: '1fr .3fr 1fr',
  },
  heroPaginations__boxHero: {
    position: 'relative',
    width: '100%',
    height: '150px',
    cursor: 'pointer',
    overflow: '0 0 hidden 0',
    display: 'flex',
    padding: '0 40px',

  },
  heroPaginations__animation: {
    position: 'absolute',
    width: '600px',
    bottom: '-200px',
    zIndex: -1,
    cursor: 'pointer'
  },
  heroPaginations__heroBackground: {
    position: 'absolute',
    backgroundImage: 'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: '2px 2px 6px #000',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: -2
  },
  heroPaginations__boxContentOne: {
    width: '200px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    color: '#FFF'
  },
  heroPaginations__heroAllBox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#111111',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      '& div div': {
        backgroundColor: '#FFF'
      }
    }
  },
  heroPaginations__boxes: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30px)',
    justifyContent: 'center',
    gap: theme.spacing(.6)
  },
  heroPaginations__boxesBox: {
    height: '100%',
    boxShadow: '2px 2px 6px #000',
    backgroundColor: '#9e9fa0',
    transition: '.2s all',
  },
  heroPaginations__heroAllBoxTitle: {
    fontSize: '1rem',
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '380'
  }
}))

export default HeroPaginations