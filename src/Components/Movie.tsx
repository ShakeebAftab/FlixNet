import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import Modal from 'react-modal'
import YouTube from 'react-youtube'
import { MovieProps } from '../Helpers/Types'

export const Movie = ({ id, open, setOpen }: MovieProps) => {

  Modal.setAppElement('#root')

  const theme = useTheme()
  const breakPoint = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Modal isOpen={open} style={{content: { background: '#000', height: '470px', marginTop: breakPoint ? '10vh' : '30px', border: 'none'}, overlay: { background: 'rgba(0,0,0, 0.7)' }}}>
      <Box style={{display: 'flex', justifyContent: 'flex-end', paddingBottom: '10px'}}>
        <Close color='secondary' onClick={() => setOpen(false)}/>
      </Box>
      <YouTube videoId={`${id}`} opts={{ height: '390', width: '100%', playerVars: { autoplay: 1 } }}/>
    </Modal>
  )
}