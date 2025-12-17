import axios from "axios";

const API_URL = "http://172.189.157.245:31900/api";

export const getAllProducts = () => {
  return axios.get(`${API_URL}/products`);
};

export const getProductByName = (name) => {
  return axios.get(`${API_URL}/products/${name}`);
};

export const createProduct = (product) => {
  return axios.post(`${API_URL}`, product);
};
