import { message } from "antd";
import axios from "./axios";
import {base_url} from "./baseURL"


// const base_url = "http://localhost:8080/"

export const getDataDisplay = async () => {
  try {
    const response = await fetch(`${base_url}/display/all`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }); 
    if (!response.ok) {
      console.error('Failed to fetch display data');
      return { data: { items: [] } };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching display data:', error);
    return { data: { items: [] } };
  }
};




export const getDisplayById = async (id) => {
  try {
    const res = await axios.get(`/display/${id}`);
    const { data, success, error } = res?.data;
    if (success) {
      return {
        data: data || [],
      };
    } else {
      message.error(error || "Lỗi không lấy được dữ liệu");
    }
  } catch (error) {}
};