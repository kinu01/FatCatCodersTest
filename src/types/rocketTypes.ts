export interface Rocket {
  id: string;
  active?: boolean;
  name?: string;
  country?: string;
  description?: string;
  boosters?: number;
  first_flight?: string;
  flickr_images?: string[];
  success_rate_pct?: number;
  mass?: {
    kg: number;
    lb: number;
  };
  company?: string;
}
