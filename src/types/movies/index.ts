interface MovieArray {
  id: number;
  poster_path: string;
  popularity: number;
}

export interface MovieProps {
  results: MovieArray[];
}
