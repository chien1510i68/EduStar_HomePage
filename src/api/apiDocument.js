import { message } from "antd";
import axios from "./axios";
// const base_url = "http://116.104.51.101:8080/EduStarService/"
const base_url = "http://localhost:8080/"


export const getAllDocument = async (params) => {
  const response = await fetch(`${base_url}document/all`); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  
};

export const downloadDocument = async (params) => {
  try {
    const res = await axios.get(`/file/?filename=${params}`);
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
