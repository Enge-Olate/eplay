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