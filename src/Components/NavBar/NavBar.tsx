import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Toolbar, AppBar, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

// Icon Imports
import { Menu } from '@material-ui/icons';
import { useHistory } from 'react-router';

// Asset Import
import logo from '../../Static/logo.png'
import { MyDrawer } from './MyDrawer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  logo: {
    objectFit: 'contain',
    width: '100px'
  },
}));

export const NavBar = () => {
  // State and Theme
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);

  const [active, setActive] = useState('home')
  const [show, setShow] = useState(false)
  const history = useHistory()

  const onListItemClick = (text: string) => {
    setActive(text)
    setOpen(false)
    if (text === 'home') return history.push(`/`) 
    history.push(`/category/${text.toLowerCase()}`)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => setShow(window.scrollY > 170 ? true : false))
    return () => window.removeEventListener('scroll', () => {})
  }, [])

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color={show ? 'primary' : 'transparent'}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <img src={logo} alt="logo" className={classes.logo} onClick={() => onListItemClick('home')} />
        </Toolbar>
      </AppBar>
      <MyDrawer open={open} setOpen={setOpen} active={active} onListItemClick={onListItemClick} />
    </div>
  );
}