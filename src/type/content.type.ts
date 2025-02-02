export interface Ratings {
  value: string;
  maturityDescription: string;
  maturityLevel: number;
  specificRatingReason: string;
  ratingId: number;
}

export interface ContentType {
  status: string;
  contentId: string;
  title: string;
  type: string;
  synopsis: string;
  year: number;
  dateCreated: string;
  netflixUrl: string;
  imageUrl: string;
  creatorOrDirector: string;
  seasonCount: string;
  genre: string;
  genreUrl: string;
  seasonsData: any[];
  moodTags: string[];
  categories: string[];
  cast: string[];
  audioOptions: string[];
  subtitleOptions: string[];
  ratings: Ratings;
}
