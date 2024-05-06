import { message } from "antd";
import axios from "./axios";
const base_url = "http://116.104.51.101:8080/EduStarService/"
// const base_url = "http://localhost:8080/"

export const getAllExamSchedule = async (params) => {
  const response = await fetch(`${base_url}exam/schedule/all`); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
 
};
