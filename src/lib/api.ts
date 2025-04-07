import axios from 'axios';

const API_KEY = 'a641457f34e7addea08c7dba6af6579766b57dc2';
const BASE_URL = 'https://api.isthereanydeal.com';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
  }
});

// 6 saatte bir veri çekme (günde 4 kez)
const FETCH_INTERVAL = 6 * 60 * 60 * 1000;

export const fetchGames = async () => {
  try {
    const response = await api.get('/v01/deals/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    return null;
  }
};

export const fetchUpcomingSales = async () => {
  try {
    const response = await api.get('/v01/sales/upcoming');
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming sales:', error);
    return null;
  }
};

export const fetchPopularGames = async () => {
  try {
    const response = await api.get('/v01/games/popular');
    return response.data;
  } catch (error) {
    console.error('Error fetching popular games:', error);
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get('/v01/categories/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
};

// Webhook için endpoint
export const setupWebhook = async (url: string) => {
  try {
    await api.post('/v01/webhooks', {
      url,
      events: ['deals', 'prices', 'bundles']
    });
  } catch (error) {
    console.error('Error setting up webhook:', error);
  }
}; 