import { useQuery } from "@tanstack/react-query";
import productService from "../services/product.service";
import { AxiosResponse } from "axios";
import { IProduct } from "../app.interface";


// const data:AxiosResponse<IProduct[], any> = {
//   data: [
//     {
//       id:1,
//       title:'test'
//     }
//   ]
// }

export const useProducts = () => {
  return useQuery(["products"], () => productService.getAll(), {
    select: ({ data }) => data,
    // initialData() {
    //   return data
    // } 
    // onSuccess(data) {
    //   alert(data[0].title)
    // },
    // onError(err){
    //   alert(err)
    // }
  });

  // // for one item
  //   const productId = 1;

  //   return useQuery(
  //     ["product", productId],
  //     () => productService.getById(productId.toString()),
  //     {
  //       select: ({ data }) => data,
  //       enabled: !!productId,
  //     }
  //   );
};
