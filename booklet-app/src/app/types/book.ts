export interface BookToAdd {
    imageUrl: string;
    title: string;
    author: string;
    genre: string;
    year: number;
    price: number;
    description: string;
    id: string;
  }


  export interface Book {
    imageUrl: string;
    title: string;
    author: string;
    genre: string;
    year: number;
    price: number;
    description: string;
    _id: string;
    owner: string;
    ownerName: string;
  }