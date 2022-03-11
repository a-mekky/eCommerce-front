import React from "react";
import Rating from "./Rating";
import { Link, useNavigate ,useSearchParams} from "react-router-dom";


function RateFilter() {
//   const navigate = useNavigate();

  const [searchParam] = useSearchParams();
  let keyword = searchParam.get("keyword");
  if (!keyword) {
    keyword = "";
  }
  let minPrice = searchParam.get("minPrice");
  if (!minPrice) {
    minPrice = 0;
  }
  let maxPrice = searchParam.get("maxPrice");
  if (!maxPrice) {
    maxPrice = 10000;
  }
  let catValue = searchParam.get("category");
  if (!catValue) {
    catValue = "";
  }


  return (
    <>
      <h2>Rate Fiter</h2>
      <Link to={`/?keyword=${keyword}&category=${catValue}&minPrice=${minPrice}&maxPrice=${maxPrice}&rate=5&page=1`}>
      <Rating value={5} color={"#f8e825"}  />
      </Link>
      <Link to={`/?keyword=${keyword}&category=${catValue}&minPrice=${minPrice}&maxPrice=${maxPrice}&rate=4&page=1`} >
        <Rating value={4} color={"#f8e825"} text={'&Up'}/>
      </Link>
      <Link to={`/?keyword=${keyword}&category=${catValue}&minPrice=${minPrice}&maxPrice=${maxPrice}&rate=3&page=1`} >
        <Rating value={3} color={"#f8e825"} text={'&Up'}/>
      </Link>
      <Link to={`/?keyword=${keyword}&category=${catValue}&minPrice=${minPrice}&maxPrice=${maxPrice}&rate=2&page=1`} >
        <Rating value={2} color={"#f8e825"} text={'&Up'}/>
      </Link>
      <Link to={`/?keyword=${keyword}&category=${catValue}&minPrice=${minPrice}&maxPrice=${maxPrice}&rate=1&page=1`} >
        <Rating value={1} color={"#f8e825"} text={'&Up'}/>
      </Link>
    </>
  );
}

export default RateFilter;
