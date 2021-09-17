import { RouteComponentProps } from "react-router"

export type RowProps = {
  title: string,
  uri: string,
}

export type MovieType = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  media_type: string,
  original_language: string,
  original_title?: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title?: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  name?: string,
  original_name?: string
}

export type LoaderProps = {
  height: string
}

export type HeaderProps = {
  type: string
}

export type MovieProps = {
  id: string,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CategoryProps extends RouteComponentProps<{ type: string }> {}