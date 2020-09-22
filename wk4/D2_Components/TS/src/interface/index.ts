export interface IPRODUCT {
   _id: string;
   name: string;
   category: string;
   image: string;
   price: number;
   brand: string;
   rating: number;
   numReviews: number;
}

export interface IParams { id: string };
