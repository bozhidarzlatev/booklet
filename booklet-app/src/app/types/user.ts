
export interface UserForAuth {
    username: string;
    email: string;
    profileImg: string;
    password: string;
    id: string;
  }

  export interface User {
    username: string,
    email: string,
    profileImg: string,
    _id: string,
    cart?: string[],
    orders?: string[],
    reviews?: string[],
  }


  export interface UserProfileResponse {
    userdata: {
      _id: string;
      username: string;
      email: string;
      profileImg: string;
      cart: string[];
      orders: string[];
      reviews: string[]
    };
    uploads: number;
  }


  export interface Orders {
    _id: string;
    owner: string;
    totalPrice: number;
    orderData: DetailedBooks[];
    orderId: string;
    created_at: string;
    updatedAt: string;
    __v: string;
  }

  
  export interface DetailedBooks {
author: string;
description: string; 
genre: string;
imageUrl: string;
owner: string;
price: number;
title: string;
year: number;
__v: string;
_id: string;
  }