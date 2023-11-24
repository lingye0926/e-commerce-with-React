import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card"

const FeaturedProducts = ({type}) => {
  const data = [
    {   
        id: 1,
        img:"https://tshop.r10s.com/4a1/54e/3750/59b6/4024/c972/57a5/112ced83c30242ac110003.jpg?_ex=486x486",
        img2:"https://img.alicdn.com/i2/396861761/O1CN01paAsr01Osa0oGHy3h_!!396861761.jpg_500x500q90.jpg",
        title:"Guqin",
        isNew:true,
        oldPrice:19,
        price:12,
    },
    {
        id: 2,
        img:"https://picx.zhimg.com/v2-382b0b5947890a37593ee93390aa8d7d_720w.jpg?source=172ae18b",
        img2:"",
        title:"Guzheng",
        isNew:true,
        oldPrice:19,
        price:12,
    },
    {
        id: 3,
        img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2:"",
        title:"Flute",
        isNew:true,
        oldPrice:19,
        price:12,
    },
    {
        id: 4,
        img:"https://img.lajifenleiapp.com/static/cover_img/1455.jpg",
        img2:"https://p7.itc.cn/images01/20200804/59256f29ec3e4e11aba8913d8dfec54f.jpeg",
        title:"Pipa",
        isNew:true,
        oldPrice:19,
        price:12,
    },
  ]
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type}Products</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi perspiciatis, nulla inventore voluptates illo nam fugit sed architecto tenetur, 
            iure accusamus praesentium incidunt repellendus consequuntur eum quaerat numquam explicabo hic!
        </p>
         
      </div>
      <div className="bottom">
        {data.map(item=>{
            return <Card item={item} key={item.id}/>
        })}
      </div>
    </div>
  )
}

export default FeaturedProducts
