// import React,{useContext} from 'react'
// import { ContextProduct } from '../Context/ContextData';
// function SingleProduct() {
//   let Items=useContext(ContextProduct)
//   return (
//     <>
//         <div className="row d-flex justify-content-center">
//           {Items.map((data, i) => {
//             return (
//               <div
//                 className="card shadow p-4 m-3  rounded "
//                 style={{ width: "17rem" }}
//                 key={i}
//               >
//                 <img
//                   className="card-url-top rounded "
//                   src={data.url}
//                   alt="pic"
//                 />
//                 <div className="card-body">
//                   <h3 className="card-title">{data.name}</h3>
//                   <h1>₹: {data.price}</h1>
//                   <ul className="card-text" type="circle">
//                     <li>BRAND :{data.brand}</li>
//                     <li>MATERIAL :{data.material}</li>
//                     <li>COLOR :{data.color}</li>
//                     <li>CATAGORY :{data.catagory}</li>
//                   </ul>
                  
//                   <a href={data.buy} className="btn btn-primary">
//                     Buy Now
//                   </a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//     </>
//   )
// }

// export default SingleProduct
