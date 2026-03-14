import type { FooterLink, Game } from "./types";

export const formatPrices = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)
};



export const getDescription = (text: string) => {
  if (text.length > 95) {
    return text.slice(0, 92) + '...';
  }
  return text;
};

export const actualYear = new Date();

export const quickAccess = {
    news: { label: "Promoções", path: "#promocoes" },
    sales: { label: "Em breve", path: "#em-breve" },
  } satisfies Record<string, FooterLink>;

export const getTotalPrice = (items:Game[])=>{
    return items.reduce((amount, valueCurrent)=>{
      const total = amount += valueCurrent.prices.current;
      return total;
    }, 0)
  };

