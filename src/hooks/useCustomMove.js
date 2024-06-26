import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, defaultValue) => {
  // console.log("useCustomMove.js-- getNum()", "param = 숫자?: ", isNaN(param));
  if (!param) {
    return defaultValue;
  }

  return parseInt(param);
};

const useCustomMove = () => {
  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(false); // refresh추가(동일 페이지, 사이즈에서 호출 시 서버호출 안하는 문제 해결)

  const [queryParams] = useSearchParams();

  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = (pageParam) => {
    // console.log("moveToList-pageParam:", pageParam);

    let queryStr = "";

    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 10);

      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    // console.log("moveToList(pageParam) -> queryStr: ", queryStr);

    navigate({
      pathname: `../list`,
      search: queryStr,
    });

    // console.log("!refresh: ", !refresh);
    setRefresh(!refresh); //추가
  };

  const moveToModify = (num) => {
    // console.log(queryDefault);

    navigate({ pathname: `../modify/${num}`, search: queryDefault }); // 수정시에 기존의 쿼리스트링 유지를 위해
  };

  const moveToRead = (num) => {
    console.log(queryDefault);

    navigate({ pathname: `../read/${num}`, search: queryDefault });
  };

  return { moveToList, moveToModify, moveToRead, page, size, refresh }; // refresh 추가
};

export default useCustomMove;
