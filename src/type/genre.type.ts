// Film ที่อยู่ใน Category
export interface Film {
  title: string;
  url: string;
  image: string;
  dataTitleId: string;
}

export interface Category {
  category: string;
  films: Film[];
}

export interface GenreType {
  status: string;
  genre: string;
  datas: Category[];
}
