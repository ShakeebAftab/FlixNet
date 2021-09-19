import { Divider, List, Drawer, makeStyles, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// Icon Imports
import { ChevronLeft, ChevronRight, HomeRounded } from '@material-ui/icons';

// Menu Options
import { MenuOpts } from './MenuOpts';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
}));

export const MyDrawer = ({ open, setOpen, active, onListItemClick }: any) => {
  // State and Theme
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerClose = () => setOpen(false);

  return (
    <div className={classes.root}>
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
          <IconButton onClick={() => handleDrawerClose()}>
            {theme.direction === 'ltr' ? <ChevronLeft color='secondary' /> : <ChevronRight color='secondary' />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={'Home'} className={classes.listItem} onClick={() => onListItemClick('home')}>
              <ListItemIcon>{active === 'home' ? <HomeRounded color='secondary' /> : <HomeRounded className={classes.listItem} />}</ListItemIcon>
              <ListItemText primary={'Home'} className={active === 'home' ? classes.active : undefined} />
            </ListItem>
        </List>
        <Divider />
        <List className={classes.listItem}>
          {MenuOpts.map(({text, icon, activeIcon, route}) => (
            <ListItem button key={text} onClick={() => onListItemClick(route)}>
              <ListItemIcon>{active === route ? activeIcon : icon}</ListItemIcon>
              <ListItemText primary={text} className={active === route ? classes.active : undefined}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}