import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

// Material UI
import { makeStyles } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedModal } from './redux/actions/actionModal';

const initialState = [
  {
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
  }
]

function App() {
  const classes = useStyles();
 const [characters, setCharacters] = useState(initialState);
//  const [item, setItem] = useState({});

  console.log(characters);



  useEffect(() => {
  const getCharacters = async () => {
    const movies = await axios.get('http://localhost:4000/heroes');
    console.log(movies.data);
    const characterData = movies.data;
    setCharacters(characterData);
    // const filter = moviesData.filter(item => item.avatar);
    
   }
    getCharacters();
  }, [])


  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const selectHero = (item) => {
    dispatch(selectedModal(item));
    navigate('/hero');
  }

  return (
    <div className="App">
      <header className={classes.content}>
        <div className={classes.content__box}>
        <h2 className={classes.content__title}>ELIGE A TU HÉROE</h2>
        <p className={classes.content__text}>Estrategas de la magia, feroces bestias, astutos pícaros... El conjunto de héroes de Dota 2 es enorme y de una diversidad ilimitada. Lanza increíbles hechizos y devastadoras habilidades definitivas en tu camino hacia la victoria.
        </p>
        </div>
        <div className={classes.content__filter}>
          <div className={classes.content__filterContent}>
          <h2>ATRIBUTO</h2>
          <div className={classes.content__filterBox}>
            <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png' alt='Filter Icon' />
            <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png' alt='Filter Icon' />
            <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png' alt='Filter Icon' />
          </div>
          <h2>COMPLEJIDAD</h2>
          <div className={classes.content__filterBox}>
            <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png' alt='Filter Icon' />
            <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png' alt='Filter Icon' />
            <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png' alt='Filter Icon' />
          </div>
          <div className={classes.content__search}>
          <img className={classes.content__searchIcon} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png' alt='Search Icon'/>
          <input type='text' className={classes.content__searchInput}/>
          </div>
          </div>
        </div>
        <div className={classes.grid}>
        {/* <video className={classes.image} autoPlay controls loop playsInline muted poster={characters.poster}><source type="video/webm" src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.webm'/><img src={characters.image} /></video> */}

      {
        // characters.map((item) => (
        // ))
        characters.map((item) => (
          <div key={item.id} >
            
            {/* <Link to={`hero/${item.id}`}> */}
            <img onClick={() => selectHero(item)} className={classes.gridItem} src={item.avatar} />
            {/* </Link> */}
          </div>

        ))
      }
</div>
      </header>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '100%'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(3),
  },
  gridItem: {
    width: '100%',
    height: '180px',
    cursor: 'pointer',
    borderRadius: '1px',
    background: '#e0e0e0',
    boxShadow: '5px 5px 10px #111,-5px -5px 10px #000',
  },
  content: {
    width: '75%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  content__box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    marginBottom: '4rem'
  },
  content__title: {
    fontSize: '4vw'
  },
  content__text: {
    fontSize: '2vw',
    color: '#c5c6c7',
  },
  //FILTER CONTENT
  content__filter: {
    width: '100%',
    margin: '2rem 0',
    padding: '1rem 0',
    backgroundColor: 'rgb(15,17,20)',
    background: 'linear-gradient(90deg, rgba(15,17,20,1) 0%, rgba(19,23,27,1) 44%, rgba(31,39,43,1) 57%, rgba(70,80,86,1) 100%)'
  },
  content__filterContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content__search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#25282A',
    padding: theme.spacing(1),
    flex: '.6'
  },
  content__searchInput: {
    background: 'transparent',
    padding: '.8rem .4rem',
    outline: 'none',
    border: 'none',
    color: '#FFF'
  },
  content__searchIcon: {
    width: '40px',
    height: '40px'
  }
}))

export default App;

