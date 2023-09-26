import React, { useState } from "react";
import { useGetProductsQuery } from "../../../store/slices/productsSlice";
import Modal from "../../../components/modals/Modal";

import Loading from "../../../components/loading/Loading";
import NewProductForm from "../../../forms/NewProductForm";
import EditProductForm from "../../../forms/EditProductForm";
import DeleteProductForm from "../../../forms/DeleteProductForm";
import { useGetUserQuery } from "../../../store/slices/userSlice";


export default function DashboardProducts() {
  const { data: user } = useGetUserQuery()
  const { products, isFetching } = useGetProductsQuery(undefined,
    {
      selectFromResult: ({ data }) => {
        if (user.role === 'USER') {
          return { products: data?.filter(product => product.userId === user.id) ?? [] }
        } else if (user.role === 'ADMIN') {
          return { products: data ?? [] }
        }
      }
    });
    
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null)

  const [deleteModal, setDeleteModal] = useState(false)
  return (
    <div className="w-full">
      {isFetching ? (<Loading>Gathering Products</Loading>) : (
        <>
          <button
            className="bg-green-600 text-white p-3 rounded mb-1 hover:bg-green-400"
            onClick={() => setShowModal(true)}>
            + Add New Product
          </button>
          <div className="flex justify-between border">
            <div className="w-[25%] flex justify-center">
              <p className="font-extrabold">ID</p>
            </div>
            {user.role === 'ADMIN' &&
              <div className="w-[8%] text-xs">
                <p className="font-semibold">Seller</p>
              </div>}
            <div className="hidden w-[10%] sm:flex justify-center">
              <p className="font-extrabold">Image</p>
            </div>
            <div className="w-[15%] flex justify-center">
              <p className="font-extrabold">Title</p>
            </div>
            <div className="hidden w-[25%] sm:flex justify-center">
              <p className="font-extrabold">Description</p>
            </div>
            <div className="w-[7%] flex justify-center">
              <p className="font-extrabold">Quantity</p>
            </div>
            <div className="w-[7%] flex justify-center">
              <p className="font-extrabold">Price</p>
            </div>
            <div className="w-[7%] flex justify-center"></div>
            <div className="w-[7%] flex justify-center"></div>
          </div>

          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between border  items-center">
              <div className="w-[25%] text-xs">
                <p className="font-semibold">{product.id}</p>
              </div>
              {user.role === 'ADMIN' &&
                <div className="w-[8%] text-xs overflow-hidden">
                  <p className="font-semibold">{product.user.email.split('@')[0]}</p>
                </div>}
              <div className="hidden w-[10%] sm:flex justify-center">
                <img
                  src={product.images[0].url}
                  alt={product.title}
                  className="w-[50px]"
                />
              </div>
              <div className="flex justify-center w-[15%]">
                <p className="font-semibold">{product.title}</p>
              </div>
              <div className="hidden w-[25%] sm:flex flex-wrap justify-center text-start">
                <p className="font-semibold">{product.description}</p>
              </div>
              <div className="w-[7%] flex justify-center">
                <p className="font-semibold">{product.quantity}</p>
              </div>
              <div className="w-[7%] flex justify-center">
                <p className="font-semibold">${product.price}</p>
              </div>
              <div className="w-[7%] flex justify-center ">
                <button className="font-semibold bg-slate-400  rounded p-2 " onClick={() => { setProduct(product); setDeleteModal(false); setShowModal(true) }}>
                  Edit
                </button>
              </div>
              <div className="w-[7%] flex justify-center ">
                <button className="font-semibold bg-red-400 w-[25px] h-[25px]" onClick={() => { setProduct(product); setDeleteModal(true); setShowModal(true) }}>
                  X
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      <Modal show={showModal} setShow={setShowModal} setValue={setProduct}>
        {!product ? (
          <NewProductForm setShow={setShowModal} />
        ) : !deleteModal ? (
          <EditProductForm setShow={setShowModal} product={product} setProduct={setProduct} />
        ) : <DeleteProductForm setShow={setShowModal} product={product} setProduct={setProduct} />}
      </Modal>
    </div>
  );
}
