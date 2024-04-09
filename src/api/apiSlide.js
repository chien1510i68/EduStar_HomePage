import { message } from "antd";
import axios from "./axios";
const base_url = "http://116.104.51.101:8080/EduStarService/"

export const getAllSlide = async () => {

  // const response = await fetch('https://service.edustar.com.vn/slide/all'); 
  const response = await fetch(`${base_url}slide/all`); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
};

export const getSlideById = async (id) => {
  // const response = await fetch(`https://service.edustar.com.vn/slide/${id}`); 
  const response = await fetch(`${base_url}slide/${id}`); 
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
  
};

