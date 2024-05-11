import { message } from "antd";
import axios from "./axios";
const base_url = "https://c9f5-2401-d800-df80-e448-4d1f-e311-1aa1-2f4a.ngrok-free.app/"

// const base_url = "http://localhost:8080/"

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

