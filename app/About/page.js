 "use client"
 const details =[
  {
    id: 1,
    name: " Tshirts ",
    price: 50,
    special: true,
    image:
      "https://hangten.com.pk/cdn/shop/files/DSC09217.jpg?v=1690452693",
  },
  {
    special: false,

    id: 2,
    name: "Trousers",
    price: 80,
    image:
      "https://hangten.com.pk/cdn/shop/products/WB02018-LTPEACH-min.jpg?v=1646812130",
  },
  {
    id: 3,
    name: "Jackets",
    price: 120,
    special: true,

    image:
      "https://pakistantradeportal.gov.pk/storage/product_images/621c88bc153a71646037180.jpg",
  },
  {
    special: false,

    id: 4,
    name: "Shoes",
    price: 65,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f6bb75e3-f86b-4031-9265-4343b1e14bd7/jumpman-two-trey-shoes-rhmBzG.png",
  },

  {
    id: 1,
    name: " Tshirts ",
    price: 50,
    special: true,
    image:
      "https://hangten.com.pk/cdn/shop/files/DSC09217.jpg?v=1690452693",
  },
  {
    special: false,

    id: 2,
    name: "Trousers",
    price: 80,
    image:
      "https://hangten.com.pk/cdn/shop/products/WB02018-LTPEACH-min.jpg?v=1646812130",
  },
  {
    id: 3,
    name: "Jackets",
    price: 120,
    special: true,

    image:
      "https://pakistantradeportal.gov.pk/storage/product_images/621c88bc153a71646037180.jpg",
  },
  {
    special: false,

    id: 4,
    name: "Shoes",
    price: 65,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f6bb75e3-f86b-4031-9265-4343b1e14bd7/jumpman-two-trey-shoes-rhmBzG.png",
  },
  {
    id: 1,
    name: " Tshirts ",
    price: 50,
    special: true,
    image:
      "https://hangten.com.pk/cdn/shop/files/DSC09217.jpg?v=1690452693",
  },
  {
    special: false,

    id: 2,
    name: "Trousers",
    price: 80,
    image:
      "https://hangten.com.pk/cdn/shop/products/WB02018-LTPEACH-min.jpg?v=1646812130",
  },
  {
    id: 3,
    name: "Jackets",
    price: 120,
    special: true,

    image:
      "https://pakistantradeportal.gov.pk/storage/product_images/621c88bc153a71646037180.jpg",
  },
  {
    special: false,

    id: 4,
    name: "Shoes",
    price: 65,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f6bb75e3-f86b-4031-9265-4343b1e14bd7/jumpman-two-trey-shoes-rhmBzG.png",
  },
  {
    id: 1,
    name: " Tshirts ",
    price: 50,
    special: true,
    image:
      "https://hangten.com.pk/cdn/shop/files/DSC09217.jpg?v=1690452693",
  },
  {
    special: false,

    id: 2,
    name: "Trousers",
    price: 80,
    image:
      "https://hangten.com.pk/cdn/shop/products/WB02018-LTPEACH-min.jpg?v=1646812130",
  },
  {
    id: 3,
    name: "Jackets",
    price: 120,
    special: true,

    image:
      "https://pakistantradeportal.gov.pk/storage/product_images/621c88bc153a71646037180.jpg",
  },
  {
    special: false,

    id: 4,
    name: "Shoes",
    price: 65,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f6bb75e3-f86b-4031-9265-4343b1e14bd7/jumpman-two-trey-shoes-rhmBzG.png",
  },
]


import React, { useState } from "react";
import'./about.css'
import Mycard from "@/Components/Mycard";


const About = () => {
  const [data, setdata] = useState(details)
  const [inputvalue, setinputvalue] = useState("");


  return (
    <>
      <section className="aboutsection">
        <div className="container">

          <div className="productparentssearchsection">


           <h1 className="PROHEAD">PRODUCTS</h1>

           <input type="text"
           className="searchinput"
           placeholder="search your product"
           onChange={(e)=>{
            setinputvalue(e.target.value.toLowerCase());
           }}


           />
           </div>

          <div className="cardabout">
            {data.filter((e)=>{
              return  inputvalue===""|| e.name.toLowerCase().includes(inputvalue);

            }).map((e,index)=>(

              <Mycard  key={index} name={e.name} price={e.price} image={e.image} />

            ))}
            


            



          </div>
        </div>
      </section>
    </>
  );
};

export default About;
