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
    rating: string;
    ownerName: string;
  }

  export interface ReviewData {
    review: string;
    rating: number;
    bookId: string;
    ownerId: string;
    ownerName: string;
    _id: string;
    created_at: string;
    updatedAt: string;
    __v: string;
  }