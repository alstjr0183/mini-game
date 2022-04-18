interface MovieArray {
  id: number;
  poster_path: string;
  popularity: number;
  original_title: string;
}

export interface MovieProps {
  results: MovieArray[];
}
