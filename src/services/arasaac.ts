import axios from 'axios';
import { ARASAAC_API_BASE, ARASAAC_IMAGE_BASE } from '../constants';
import { Symbol } from '../types';

export const searchSymbols = async (text: string): Promise<Symbol[]> => {
  try {
    const response = await axios.get(`${ARASAAC_API_BASE}/search/${encodeURIComponent(text)}`);
    return response.data;
  } catch (error) {
    console.error('Error searching symbols:', error);
    return [];
  }
};

export const getSymbolById = async (id: number): Promise<Symbol | null> => {
  try {
    const response = await axios.get(`${ARASAAC_API_BASE}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting symbol by id:', error);
    return null;
  }
};

export const getSymbolImageUrl = (id: number): string => {
  return `${ARASAAC_IMAGE_BASE}/${id}/${id}_300.png`;
};
