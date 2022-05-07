import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
        <div className={classes.header__container}>
            <img
            className={classes.header__logo}
            src='https://icon-library.com/images/dota-2-icon-16x16/dota-2-icon-16x16-25.jpg'
            alt='Header Icon'
            />
            <div className={classes.header__links}>
            <h2 className={classes.header__link}>JUEGO</h2>
            <Link to='/'>
            <h2 className={classes.header__link}>HÉROES</h2>
            </Link>
            <h2 className={classes.header__link}>NOTICIAS</h2>
            <h2 className={classes.header__link}>E-SPORTS</h2>
            </div>
            <div>
                <h2>INICIAR SESIÓN</h2>
                <p>SELECCIONA UN IDIOMA</p>
            </div>
            <div>
                <h2>JUEGA GRATIS</h2>
            </div>

        </div>
    </div>
  )
}

export default Header

const useStyles = makeStyles((theme) => ({
    header: {
        position: 'relative',
        width: '100%',
        padding: '1rem 0',
        marginBottom: theme.spacing(8),
        backgroundColor: 'transparent',
        zIndex: '20000000'
    },
    header__container: {
        width: '98%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    header__logo: {
        width: '120px',
        height: '120px'
    },
    header__links: {
        display: 'flex',
        gap: theme.spacing(8)
    },
    header__link: {
        fontSize: '2rem',
        color: '#D8D9DA',
        fontWeight: '500'
    }
}))