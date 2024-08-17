const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/test';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODc5MDExLCJpYXQiOjE3MjM4Nzg3MTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVlZDRkYWRmLTBlYzUtNGUwZS04MjM0LTE5MjE0ZGU1NWE2NiIsInN1YiI6ImdhbmVzaGNoaWxrdXJpQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkFmZm9yZE1lZCIsImNsaWVudElEIjoiNWVkNGRhZGYtMGVjNS00ZTBlLTgyMzQtMTkyMTRkZTU1YTY2IiwiY2xpZW50U2VjcmV0IjoiaWVTT0RWZHBSSERsQ25yVSIsIm93bmVyTmFtZSI6IkdBTkVTSCBDSElMS1VSSSIsIm93bmVyRW1haWwiOiJnYW5lc2hjaGlsa3VyaUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTExQ1MwMTAxMzYifQ.F9x1pfjge1dDOcFZy8xIU9T4OKQEmKmLo-lt9TWJEM8';

async function fetchProducts(company, category, top, minPrice, maxPrice) {
  try {
    const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${category}/products`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      params: { top, minPrice, maxPrice }
    });
    return response.data.map((product, index) => ({
      id: `${company}-${category}-${index}`, // Unique ID based on company, category, and index
      ...product,
      company
    }));
  } catch (error) {
    console.error(`Error fetching products from ${company}:`, error.message);
    return [];
  }
}

async function getTopProducts(category, n, page, minPrice, maxPrice, sort, order) {
  const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
  let allProducts = [];

  for (let company of companies) {
    const products = await fetchProducts(company, category, n, minPrice, maxPrice);
    allProducts = [...allProducts, ...products];
  }

  if (sort) {
    allProducts.sort((a, b) => {
      if (order === 'asc') {
        return a[sort] > b[sort] ? 1 : -1;
      } else {
        return a[sort] < b[sort] ? 1 : -1;
      }
    });
  }

  const startIndex = (page - 1) * n;
  const paginatedProducts = allProducts.slice(startIndex, startIndex + n);

  return paginatedProducts;
}

async function getProductById(category, productId) {
  
  return null;
}

module.exports = {
  getTopProducts,
  getProductById
};
