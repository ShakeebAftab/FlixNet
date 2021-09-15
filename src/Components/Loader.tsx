import { Box, CircularProgress, Grid, makeStyles } from "@material-ui/core"
import { LoaderProps } from "src/Helpers/Types"

const useStyles = makeStyles(() => ({
  loader: {
    height: '80vh',
    width:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export const Loader = ({ height }: LoaderProps) => {
  const classes = useStyles()
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item>
        <Box className={classes.loader} style={{height}}>
          <CircularProgress color='secondary' />
        </Box>
      </Grid>
    </Grid>
  )
}
