import {base_url} from "./baseURL"
// const base_url = "http://localhost:8080/"

export const getAllNews = async (params) => {
  try {
    const response = await fetch(`${base_url}/news/all`, {
      next: { revalidate: 3600 },
    }); 
    if (!response.ok) {
      console.error('Failed to fetch news');
      return { data: { items: [] } };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return { data: { items: [] } };
  }
};
export const getNewsById = async (id) => {
  try {
    const response = await fetch(`${base_url}/news/${id}`, {
      next: { revalidate: 3600 },
    }); 
    if (!response.ok) {
      console.error(`Failed to fetch news ${id}`);
      return { data: null };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching news ${id}:`, error);
    return { data: null };
  }
};

