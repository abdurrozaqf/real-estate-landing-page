export interface Rent {
  price: number;
  title: string;
  location: string;
  image: string;
  rooms: {
    bed: number;
    bath: number;
    parking: number;
  };
}

export interface Customer {
  name: string;
  image: string;
  position: string;
  message: string;
}
