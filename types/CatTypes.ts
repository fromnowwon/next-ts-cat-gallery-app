export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Breeds[];
}

export interface Breeds {
  weight: { imperial: string; metric: string };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url: string;
}
