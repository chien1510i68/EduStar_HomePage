import { message } from "antd";
import axios from "./axios";
const base_url = "http://116.104.51.101:8080/EduStarService/"

export const getDataDisplay = async () => {
    const response = await fetch(`${base_url}display/all`); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
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