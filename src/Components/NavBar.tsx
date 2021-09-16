import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Divider, List, Toolbar, AppBar, Drawer, makeStyles, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// Icon Imports
import { ArrowUpward, Airplay, TrendingUp, Deck, Assignment, ChevronLeft, ChevronRight, Menu, HomeRounded, DirectionsRun, EmojiEmotions, EmojiPeople } from '@material-ui/icons';

// Asset Import
import logo from '../Static/logo.png'

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
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#111111'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listItem: {
    color: 'grey'
  },
  active: {
    color: 'white',
  },
  logo: {
    objectFit: 'contain',
    width: '100px'
  },
}));

export const NavBar = () => {
  // State and Theme
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home')

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => setShow(window.scrollY > 170 ? true : false))
    return () => window.removeEventListener('scroll', () => {})
  }, [])

  // Menu Options
  const MenuOpts = [
    {
      text: 'Trending Now',
      icon: <TrendingUp className={classes.listItem} />,
      activeIcon: <TrendingUp color='secondary' />,
    },
    {
      text: 'Netflix Originals',
      icon: <Airplay className={classes.listItem} />,
      activeIcon: <Airplay color='secondary' />,
    },
    {
      text: 'Top Rated',
      icon: <ArrowUpward className={classes.listItem} />,
      activeIcon: <ArrowUpward color='secondary' />,
    },
    {
      text: 'Action',
      icon: <DirectionsRun className={classes.listItem} />,
      activeIcon: <DirectionsRun color='secondary' />,
    },
    {
      text: 'Comedy',
      icon: <EmojiEmotions className={classes.listItem} />,
      activeIcon: <EmojiEmotions color='secondary' />,
    },
    {
      text: 'Horror',
      icon: <EmojiPeople className={classes.listItem} />,
      activeIcon: <EmojiPeople color='secondary' />,
    },
    {
      text: 'Romance',
      icon: <Deck className={classes.listItem} />,
      activeIcon: <Deck color='secondary' />,
    },
    {
      text: 'Documentaries',
      icon: <Assignment className={classes.listItem} />,
      activeIcon: <Assignment color='secondary' />,
    }
  ]

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
          <img src={logo} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
        style={{width: (open ? 240 : 0)}}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft color='secondary' /> : <ChevronRight color='secondary' />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={'Home'} className={classes.listItem} onClick={() => setActive('home')}>
              <ListItemIcon>{active === 'home' ? <HomeRounded color='secondary' /> : <HomeRounded className={classes.listItem} />}</ListItemIcon>
              <ListItemText primary={'Home'} className={active === 'home' ? classes.active : undefined} />
            </ListItem>
        </List>
        <Divider />
        <List className={classes.listItem}>
          {MenuOpts.map(({text, icon, activeIcon}) => (
            <ListItem button key={text} onClick={() => setActive(text)}>
              <ListItemIcon>{active === text ? activeIcon : icon}</ListItemIcon>
              <ListItemText primary={text} className={active === text ? classes.active : undefined}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}