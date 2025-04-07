interface Game {
  id: string;
  title: string;
  image: string;
  price: {
    current: number;
    original: number;
    discount: number;
  };
  rating: number;
  platforms: string[];
  metacritic?: number;
}

interface UpcomingSale {
  id: string;
  platform: string;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

interface Category {
  id: string;
  title: string;
  slug: string;
  gameCount: number;
} 