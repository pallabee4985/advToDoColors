import React,{useContext} from "react";
import {ContextProduct } from "./CraftContext/ContextData";

function FeturesData() {
let data=useContext(ContextProduct)
  data=data.filter((ele)=>{
    return (ele.feature)
  })
  return (
    <>
      <div className="row d-flex justify-content-center">
          {data.map((data, i) => {
            return (
              <div
                className="card shadow rounded "
                style={{ width: "20rem" }}
                key={i}
              >
                <img
                  className="card-url-top rounded "
                  src={data.url}
                  alt="pic"
                />
                <div className="card-body">
                  <h3 className="card-title">{data.name}</h3>
                  <h1>₹: {data.price}</h1>
                  <a href={data.buy} className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
    </>
  );
}

export default FeturesData;
