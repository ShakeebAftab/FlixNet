import { Box } from "@material-ui/core"
import { FetchURIs } from "src/Helpers/FetchURIs"
import { RowProps } from "src/Helpers/Types"
import { Header } from "./Header"
import { Row } from "./Row"

export const Home = () => {
  return (
    <Box overflow='hidden'>
      <Header type='trending' />
      {FetchURIs.map((({ title, uri }: RowProps) => <Row title={title} uri={uri} key={title} />))}
    </Box>
  )
}
