export interface GalleryItem {
  type: "image" | "video";
  url: string;
}
export type Game = {
  id: number;
  name: string;
  description: string;
  release_date?: string;
  prices: {
    discount: number;
    old: number;
    current: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: GalleryItem[];
  };
};

export interface FooterLink {
  label: string;
  path: string;
};

export interface IstallmentOptions {
  value: number;
  label: string;

};

type Product = {
  id: number;
  price: number;
};
export interface PurchasePayload {
  products: Product[];
  billing: {
    name: string;
    email: string;
    document: string;
  };
  delivery: {
    email: string;
  };
  payment: {
    card: {
      active: boolean;
      name?: string;
      number?: string;
      code?: string;

      owner?: {
        name: string;
        document: string;
      };
      experies?: {
        month: string;
        year: string;
      };
    };
    installments: number;
  };
};
