import { message } from "antd";
// import axiosServer from "./axios";
import axios from "./axios";
import {base_url} from "./baseURL"



export const getAllService = async (params) => {
  try {
    const response = await fetch(`${base_url}/service/all`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }); 
    if (!response.ok) {
      console.error('Failed to fetch services');
      return { data: { items: [] } };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return { data: { items: [] } };
  }
};
export const getServiceById = async (id) => {
  try {
    const response = await fetch(`${base_url}/service/${id}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }); 
    if (!response.ok) {
      console.error(`Failed to fetch service ${id}`);
      return { data: null };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching service ${id}:`, error);
    return { data: null };
  }
};
