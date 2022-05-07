import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Typography } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';

const initialState = {
    id: 1,
    name: "npc_dota_hero_antimage",
    localized_name: "Anti-Mage",
    primary_attr: "agi",
    attack_type: "Melee",
    poster: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png",
    animation: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm",
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png",
    avatar: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
    roles: [
      "Carry",
      "Escape",
      "Nuker"
    ],    
    img: "/apps/dota2/images/dota_react/heroes/antimage.png?",
    icon: "/apps/dota2/images/dota_react/heroes/icons/antimage.png?",
    base_health: 200,
    base_health_regen: 0.25,
    base_mana: 75,
    base_mana_regen: 0,
    base_armor: 0,
    base_mr: 25,
    base_attack_min: 29,
    base_attack_max: 33,
    base_str: 21,
    base_agi: 24,
    base_int: 12,
    str_gain: 1.6,
    agi_gain: 2.8,
    int_gain: 1.8,
    attack_range: 150,
    projectile_speed: 0,
    attack_rate: 1.4,
    move_speed: 310,
    turn_rate: null,
    cm_enabled: true,
    legs: 2
  };

const Hero = () => {
  const classes = useStyles();
    // const [hero, setHero] = useState(initialState);

    const { modal } = useSelector(store => store.modal);
    console.log(modal, 'MODALLLL');
    
    // const { id } = useParams();
    // console.log('EJECUCION 1');

     useEffect(() => {
    // const getById = async () => {
    //   await axios.get(URL + id)
    //     .then((resp) => {
    //       setHero(resp.data);
    //       console.log(resp.data);
    //       console.log('EJECUCION 2');

    //     })
    //     .catch((error) => {
    //       console.error('Error: ', error);
    //     })
    // }

    // getById();
    // id
  }, [])

  

  return (
    <div className={classes.hero}>
      <div className={classes.hero__container}>
        <div className={classes.hero__principalDetail}>
          <div className={classes.hero__principalTextBox}>
        <h1 className={classes.hero__TextName}>{ modal?.localized_name }</h1>
        <h4 className={classes.hero__TextSkill}>CORTA A SUS ENEMIGOS CON ATAQUES QUE AGOTAN EL MANÁ</h4>
        <Typography className={classes.hero__TextDescription}>Si Anti-Mage tiene la posibilidad de hacerse fuerte, pocos pueden parar sus ataques. Quemando el maná de sus enemigos con cada golpe o teletransportándose a distancias cortas para escapar de una emboscada, arrinconarlo es un desafío para cualquier enemigo.</Typography>
        <a href='#' className={classes.hero__textLinkHistory}>Leer historia completa</a>
        <div className={classes.hero__boxSkillsContainer}>
      
         
        </div>
          </div>

               
        </div>
        {
                      modal && (
                        <div>
                        <div className={classes.hero__animation}>
                        <video className={classes.hero__video} autoPlay loop playsInline muted poster={modal?.poster}><source type="video/webm" src={modal?.animation}/><img src={modal?.image} /></video>
    
                        </div>
                        </div>
                      )
                  }
    
      </div>
      <div className={classes.hero__boxHabilities}>
        <div className={classes.hero__boxHabilitiesContainer}>
          <div className={classes.hero__boxHabilitiesText}>
            <div>
          <h2 className={classes.hero__subtitleTwo}>TIPO DE ATAQUE</h2>
          <h3  className={classes.hero__TextDescription} style={{textTransform: 'uppercase'}}>{ modal.attack_type }</h3>
          </div>
          <div>
          <h2 className={classes.hero__subtitleTwo}>COMPLEJIDAD</h2>
          <h3 className={classes.hero__TextDescription} style={{textTransform: 'uppercase'}}>{ modal.roles[0] }</h3>
          </div>
          </div>
            <div className={classes.hero__boxHabilitiesFlex}>
            <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg' className={classes.hero__treeIcon} alt='Tree Habilities Icon'/>
            <div>
            <h3 style={{textAlign: 'center', marginBottom: '1rem'}} className={classes.hero__TextDescription}>HABILIDADES</h3>
              <div className={classes.hero__boxHabilitiesFlex}>
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png' className={classes.hero__habilitiesIcon} alt='Tree Habilities Icon'/>
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png' className={classes.hero__habilitiesIcon} alt='Tree Habilities Icon'/>
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png' className={classes.hero__habilitiesIcon} alt='Tree Habilities Icon'/>
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png' className={classes.hero__habilitiesIcon} alt='Tree Habilities Icon'/>
              </div>
            </div>
           
            </div>
        </div>
          </div>
                 
      <div className={classes.divider}>
        <div className={classes.divider__container}>
          <img src={ modal.avatar}/>
        </div>
      </div>
      <div className={classes.hero__opacity}/>
    </div>
  )
}

export default Hero;

const useStyles = makeStyles((theme) => ({
  hero: {
    width: '100%',
    height: '100%',
  },
  hero__opacity: {
    position: 'absolute',
    top: '-100%',
    left: '-20%',
    right: '-20%',
    bottom: '-50%',
    backgroundColor: '#40494F',
    clipPath: 'polygon(100% 21%, 100% 59%, 61% 100%, 28% 100%)'
  },
  hero__container: {
    position: 'relative',
    width: '80%',
    margin: '0 auto',
    // height: '700px',
    // overflowY: 'hidden',
    overflowX: 'visible',
    zIndex: '1',
    // backgroundColor: '#FFF',
  },
  // Principal Detail
  hero__principalDetail: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    overflowY: 'hidden',
    overflowX: 'hidden',
    // backgroundColor: '#FFF',

  },
  hero__principalTextBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    gap: theme.spacing(2),
    marginTop: '4rem',
    zIndex: '1000'
    // flex: '1',
  },
  hero__animation: {
    position: 'absolute',
    top: '-240px',
    right: '-280px',
  },
  hero__video: {
    width: '80vw'
  },
  hero__TextName: {
    textTransform: 'uppercase',
    fontSize: '4.4rem',
    color: '#FFF'
  },
  hero__TextSkill: {
    fontSize: '1.4rem',
    color: '#94C8DA'
  },
  hero__TextDescription: {
    fontSize: '1.5rem',
    color: '#EEEEEE'
  },
  hero__textLinkHistory: {
    color: '#717273',
    fontSize: '1.11rem',
    "&:hover": {
      color: '#D8D8D8',
    }
  },
  hero__boxSkillsContainer: {
    display: 'flex',
  },
  hero__boxHabilities: {
    position: 'relative',
    padding: '1rem 0',
    marginTop: '1rem',
    width: '100%',
    // opacity: '.4',
    backgroundImage: 'linear-gradient(to Top, #111 0%, rgba(0, 0, 0, .5) 55%,transparent 100%)',

    // backgroundColor: 'rgb(15,17,20)',
    // background: 'linear-gradient(90deg, rgba(15,17,20,1) 0%, rgba(19,23,27,1) 44%, rgba(31,39,43,1) 57%, rgba(70,80,86,1) 100%)',
    zIndex: '100'
  },
  
  hero__boxHabilitiesContainer: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  hero__boxHabilitiesText: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4)
  },
  hero__boxHabilitiesFlex: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2)
  },
  hero__treeIcon: {
    width: '100px',
    height: '100px'
  },
  hero__habilitiesIcon: {
    width: '100px',
    height: '100px'
  },
  hero__subtitleTwo: {
    fontSize: '2.2rem',
    color: '#949494',
    marginBottom: theme.spacing(1)
  },
  // DIVIDER
  divider: {
    position: 'relative',
    backgroundColor: '#1F2122',
    height: '100%',
    padding: '2rem 0',
    zIndex: '4000000',
    // marginTop: '14rem'
    // backgroundColor: 'rgb(15,17,20)',
    // background: 'linear-gradient(90deg, rgba(15,17,20,1) 0%, rgba(19,23,27,1) 44%, rgba(31,39,43,1) 57%, rgba(70,80,86,1) 100%)',
  },
  divider__container: {
    width: '94%',
    margin: '0 auto'
  }
 
}))