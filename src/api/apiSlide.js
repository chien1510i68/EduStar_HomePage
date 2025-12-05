import { message } from "antd";
import axios from "./axios";
import {base_url} from "./baseURL"
// const base_url = "http://localhost:8080/"

export const getAllSlide = async () => {
  try {
    const response = await fetch(`${base_url}/slide/all`, {
      next: { revalidate: 3600 },
    }); 
    if (!response.ok) {
      console.error('Failed to fetch slides');
      return { data: { items: [] } };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching slides:', error);
    return { data: { items: [] } };
  }
};

export const getSlideById = async (id) => {
  try {
    const response = await fetch(`${base_url}/slide/${id}`, {
      next: { revalidate: 3600 },
    }); 
    if (!response.ok) {
      console.error(`Failed to fetch slide ${id}`);
      return { data: null };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching slide ${id}:`, error);
    return { data: null };
  }
};

