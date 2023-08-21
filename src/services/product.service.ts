import axios from "axios";
import { ICreateProduct, IProduct } from "../app.interface";

class ProductService {
  private URL = "https://fakestoreapi.com";

  async getById(id: string) {
    return axios.get<IProduct>(`${this.URL}/products/${id}`);
  }

  async getAll() {
    return axios.get<IProduct[]>(`${this.URL}/products`);
  }

  async create(title:string) {
    return axios.post<any, any, ICreateProduct>(`${this.URL}/products`, {
      title,
    })
  }


}

export default new ProductService();
