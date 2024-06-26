import { useEffect, useState } from "react";
import { API_SERVER_HOST } from "../../api/todoApi";
import { getOne } from "../../api/productsApi";
import FetchingModal from "../common/FetchingModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
  uploadFileNames: [],
};

const host = API_SERVER_HOST;

const ReadComponent = ({ pno }) => {
  const [product, setProduct] = useState(initState);

  // 이동과 관련된 기능은 모두 useCustomMove()로 이동
  const { moveToList, moveToModify } = useCustomMove();

  // for FetchingModal
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    getOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
  }, [pno]);

  console.log("useEffect-getOne-product: ", product);

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {fetching ? <FetchingModal /> : <></>}
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">PNO</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.pno}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Product Name</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.pname}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">PRICE</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.price}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">DESC</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.pdesc}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col m-auto items-center justify-center">
        {product.uploadFileNames.map((imageFile, i) => (
          <img
            alt="product"
            key={i}
            className="p-4 w-1/2"
            src={`${host}/api/products/view/${imageFile}`}
          />
        ))}
      </div>
      <div className="flex justify-end p-4">
        <button
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={() => moveToModify(pno)}
        >
          Modify
        </button>
        <button
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={() => moveToList()}
        >
          List
        </button>
      </div>
    </div>
  );
};

export default ReadComponent;
