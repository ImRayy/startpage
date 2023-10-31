export interface Link {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface Category {
  name: string;
  links: Link[];
}

export interface Tab {
  name: string;
  categories: Category[];
}
