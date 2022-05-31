import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Typography } from '@material-ui/core';
import HeroPaginations from '../containers/hero/HeroPaginations';

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
          <h2 className={classes.hero__subtitleTwo}>ESTILO</h2>
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
          <div className={classes.divider__boxAvatarContainer}>
          <div className={classes.divider__boxAvatar}>
          <img src={ modal.avatar}/>
          
          <div className={classes.divider__points}>
              <div className={classes.divider__poinstHealth}>
                <h4 className={classes.divider__basePoint}>{ modal.base_health }</h4>
                <span className={classes.divider__point__regen}>+{ modal.base_health_regen }</span>
              </div>
              <div className={classes.divider__poinstMana}>
              <h4 className={classes.divider__basePoint}>{ modal.base_mana }</h4>
              <span className={classes.divider__point__regen}>+{ modal.base_mana_regen }</span>
              </div>
              
            </div>
          </div>
          {/* POINTS RULES */}
          <div className={classes.divider__boxAvatarContent}>
              <div className={classes.divider__boxAvatarContentBox}>
                <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'
                alt='Strength Icon'
                />
                <h2>20 <span>+1.9</span></h2>
              </div>
              <div className={classes.divider__boxAvatarContentBox}>
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'
                alt='Agility Icon'
                />
                <h2>20 <span>+1.9</span></h2>
              </div>
              <div className={classes.divider__boxAvatarContentBox}>
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'
                alt='Intelligence Icon'
                />
                <h2>20 <span>+1.9</span></h2>
              </div>
          </div>
          {/* POINTS RULES */}
          </div>

          <div className={classes.divider__roles}>
            <div>
              <h2 className={classes.divider__statisticsTitle}>Carry</h2>
              <progress className={classes.progress} value={Math.floor(Math.random() * 100)} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>Apoyo</h2>
              <progress className={classes.progress} value={Math.floor(Math.random() * 100)} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>Nuker</h2>
              <progress className={classes.progress} value={Math.floor(Math.random() * 100)} min="0" max="100"></progress>
            </div>

            {/*  */}

            <div>
              <h2 className={classes.divider__statisticsTitle}>Incapacitador</h2>
              <progress className={classes.progress} value={Math.floor(Math.random() * 100)} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>Jungla</h2>
              <progress className={classes.progress} value={Math.floor(Math.random() * 100)} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>Resistente</h2>
              <progress className={classes.progress} value={Math.floor(Math.random() * 100)} min="0" max="100"></progress>
            </div>

        {/*  */}

        <div>
              <h2 className={classes.divider__statisticsTitle}>Evasivo</h2>
              <progress className={classes.progress} value={Math.floor(Math.random() * 100)} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>Presionador</h2>
              <progress className={classes.progress} value={Math.floor(Math.random() * 100)} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>Iniciador</h2>
              <progress className={classes.progress} value={Math.floor(Math.random() * 100)} min="0" max="100"></progress>
            </div>

          </div>

          <div className={classes.divider__statistics}>
              <div className={classes.divider__statisticsBox}>
              <h2>ATAQUE</h2>
              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png'/></span>{modal.base_attack_min} - {modal.base_attack_max}</h3>

              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png'/></span>{modal.attack_rate}</h3>

              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png'/></span>{modal.attack_range}</h3>

              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png'/></span>{modal.projectile_speed}</h3>
              </div>

              <div className={classes.divider__statisticsBox}>
              <h2>DEFENSA</h2>
              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png'/></span>{modal.base_armor}</h3>

              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png'/></span>{modal.base_mr}%</h3>
              {/* <progress value={40} min="0" max="10"></progress> */}
              </div>

              <div className={classes.divider__statisticsBox}>
              <h2>MOVILIDAD</h2>
              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png'/></span>{modal.move_speed}</h3>

<h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png'/></span>{modal.attack_rate}</h3>

<h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png'/></span>{modal.base_health}</h3>
              </div>
          </div>
<div>
  <h2 className={classes.divider__title}>ATRIBUTOS</h2>
</div>
<div>
  <h2 className={classes.divider__title}>ROLES</h2>
</div>
<div>
  <h2 className={classes.divider__title}>ESTADÍSTICAS</h2>
</div>
        </div>
      </div>
      <HeroPaginations id={modal.id} />
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
    bottom: '-80%',
    backgroundColor: '#40494F',
    clipPath: 'polygon(100% 21%, 100% 59%, 61% 100%, 28% 100%)'
  },
  hero__container: {
    position: 'relative',
    width: '80%',
    margin: '0 auto',
    overflowX: 'visible',
    zIndex: '1',
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
    zIndex: '1000',
    [theme.breakpoints.down('sm')]: {
      marginTop: '28rem',
      width: '100%',

    }
    // flex: '1',
  },
  hero__animation: {
    position: 'absolute',
    top: '-240px',
    right: '-280px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '8rem',
      right: '5%',
    }
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
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '.9fr 1fr 1fr',
    gap: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    }
  },
  divider__boxAvatar: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  divider__boxAvatarContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    '& h2': {
      fontSize: '2.2rem',
      color: '#FFF',
      fontWeight: '380',
      '& span': {
        fontSize: '1.4rem',
        color: '#969696'
      }
    }
  },
  divider__boxAvatarContainer: {
    display: 'flex',
    gap: theme.spacing(2)
  },
  divider__poinstHealth: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgb(42,103,35)',
    background: 'linear-gradient(90deg, rgba(42,103,35,1) 0%, rgba(62,138,42,1) 24%, rgba(92,188,51,1) 50%, rgba(119,234,59,1) 86%)',
    padding: '.2rem 0',
    color: '#FFF',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  divider__poinstMana: {
    width: '100%',
    backgroundColor: 'rgb(24,98,222)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(90deg, rgba(24,98,222,1) 0%, rgba(47,135,230,1) 24%, rgba(77,184,241,1) 50%, rgba(111,238,252,1) 86%)',
    padding: '.2rem 0',
    color: '#FFF',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  divider__point__regen: {
    paddingRight: '1rem',
    paddingLeft: '3rem',
    width: '80px',
  },
  divider__basePoint: {
    flex: .6,
    textAlign: 'right'
  },
  //BOX 3
  divider__statistics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),
    color: '#FFF',

  },
  // Progress Bar
  progress: {
    backgroundColor: 'blue',
    width: '100%',
    height: '.6rem',
    zIndex: '10000',
    border: '1px solid #000',
    "&::-webkit-progress-bar": {
      backgroundColor: '#1C1F20'
    },
    "&::-webkit-progress-value": {
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 10px #427ed1, 0px 0px 10px #427ed1'
    }
  },
  divider__roles: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),
    textAlign: 'center'
  },
  divider__title: {
    textAlign: 'center',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '1px 1px 2px #000',
    marginTop: '12px',
    color: '#969696'
  },
  divider__statisticsTitle: {
    color: '#FFF',
    textTransform: 'capitalize'
  },
  divider__statisticsBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    "& h3": {
      display: 'flex',
      alignItems: 'start',
      gap: theme.spacing(.8)
    }
  },
  divider__boxAvatarContentBox: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1)
  }
  
}))