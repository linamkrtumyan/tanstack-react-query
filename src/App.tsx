import React, { SyntheticEvent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IProduct } from "./app.interface";
import productService from "./services/product.service";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { isLoading, error, data, refetch } = useProducts();
  const [title, setTitle] = useState("");

  // //can call anywhere
  // const queryClient = useQueryClient();

  const {mutate} = useMutation(['create product'], (title: string) => productService.create(title), {
    onSuccess() {
      alert('product created')
      setTitle('')
      refetch()
    }
  })

  const submitHandler = (e:SyntheticEvent) => {
    e.preventDefault()
    mutate(title)
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
      }}
    >
      {/* {error as string && <div>{error}</div>} */}

      {/* <button onClick={() => refetch()} >Refresh</button> */}

      {/* <button onClick={() => queryClient.invalidateQueries(["products"])}>
        Refresh
      </button> */}
      <div>
        <h2>Create product</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter product title"
          />
          <button type="submit">Create</button>
        </form>
      </div>
      <div>
        <h1>Products:</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : data?.length ? (
          data.map((product) => (
            <div key={product.id}>
              <b>{product.id}</b> {product.title}
            </div>
          ))
        ) : (
          <h2>not found</h2>
        )}
      </div>
    </div>
  );
}

export { App };
