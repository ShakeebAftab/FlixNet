import { ArrowUpward, Airplay, TrendingUp, Deck, Assignment, DirectionsRun, EmojiEmotions, EmojiPeople } from '@material-ui/icons';

const styles = {
  color: 'grey'
}

export const MenuOpts = [
  {
    text: 'Trending Now',
    icon: <TrendingUp style={styles} />,
    activeIcon: <TrendingUp color='secondary' />,
    route: 'trending'
  },
  {
    text: 'Netflix Originals',
    icon: <Airplay style={styles} />,
    activeIcon: <Airplay color='secondary' />,
    route: 'originals'
  },
  {
    text: 'Top Rated',
    icon: <ArrowUpward style={styles} />,
    activeIcon: <ArrowUpward color='secondary' />,
    route: 'toprated'
  },
  {
    text: 'Action',
    icon: <DirectionsRun style={styles} />,
    activeIcon: <DirectionsRun color='secondary' />,
    route: 'action'
  },
  {
    text: 'Comedy',
    icon: <EmojiEmotions style={styles} />,
    activeIcon: <EmojiEmotions color='secondary' />,
    route: 'comedy'
  },
  {
    text: 'Horror',
    icon: <EmojiPeople style={styles} />,
    activeIcon: <EmojiPeople color='secondary' />,
    route: 'horror'
  },
  {
    text: 'Romance',
    icon: <Deck style={styles} />,
    activeIcon: <Deck color='secondary' />,
    route: 'romance'
  },
  {
    text: 'Documentaries',
    icon: <Assignment style={styles} />,
    activeIcon: <Assignment color='secondary' />,
    route: 'documentaries',
  }
]