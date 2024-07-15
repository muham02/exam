import React from 'react'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import a from './AllPage.module.scss'
import all from '../../images/allBanner.png'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../api'
import star from '../../images/star.png'
import shoes from '../../images/adidas.png'
import serviceOne from "../../images/service1'.png"
import serviceTwo from "../../images/service2.png"
import serviceThree from "../../images/service3.png"
import korzinka from '../../images/headerImg3.png'
import cards from '../../cards/data'
import { useContext } from 'react'
import AppContext from '../../context/store'
import { NavLink } from 'react-router-dom'


const AllPage = () => {
    const [userData,setUserData] = useState([])
   const [state,dispatch]= useContext(AppContext)
  useEffect(()=>{

    const getData = async ()=>{
        try{
          let response = await axios('/products');
        setUserData(response.data); 
        }
        catch(error){
          alert(error)
        }
        
      }
    getData()
  },[])

const handleAddCard = (product)=>{
  console.log(product);
  console.log(state);

  dispatch({type:"ADDTOCARD",product})
}
  return (
   <>
    <Nav/>
    <div className={a.all}>
     <div className={a.all__imgParent}>
     <img src={all} alt="" className={a.allImg} />
     <div className={a.aallParentCard}>
        <h2 className={a.allParentTit}>
        ALL PRODUCTS
        </h2>
        <div className={a.allParentCards}>
         {
          userData.map(product=>{
           return(
            <div className={a.all__card}>
              <img onClick={()=>handleAddCard(product)} src={korzinka} alt="" className={a.all__icon}/>
          <NavLink to={`/single/${product.id}`}>
          <img src={product.image} alt="" className={a.all__img} />
          </NavLink>
               <div className={a.all__cardBody}>
                  <h1 className={a.all__cardTit}>
                    {product.name}
                  </h1>
                 
                  <p className={a.all__cardRaiting}>
                  {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${index < Math.floor(product.rating) ? 'filled' : (product.rating % 1 !== 0 && index === Math.floor(product.rating)) ? 'half-filled' : ''}`}>
                  &#9733; {/* Yulduz belgisi */}
                </span>
              ))}
                  </p>
                   <div className={a.all__price}>
                  <h2 className={a.all__cardPrice}>
                    ${product.price}
                  </h2>
                  <p className={a.all__sale}>
                     $534000
                  </p>
                  <p className={a.all__skid}>
                     $534000
                  </p>
                  </div>
               </div>
           </div> 
           )
          })
         }
        </div>
     </div>
     </div>
     <div className={a.adiddas}>
      <div className={a.container}>
        <div className={a.adiddas__parent}>
          <div className={a.adiddas__leftCard}>
           <h1 className={a.adiddas__tit}>
           Adidas Men Running <br />
            Sneakers
           </h1>
           <p className={a.adiddas__text}>
           Performance and design. Taken right to the edge.
           <button className={a.adiddas__btn}>
           SHOP NOW
           </button>
           </p>
          </div>
          <div className={a.adiddas__rightBanner}>
           <img src={shoes} alt="" className={a.adiddas__banner} />
          </div>
        </div>
      </div>
     </div>
     <div className={a.service}>
      <div className={a.container}>
        <ul className={a.service__parent}>
            <li className={a.service__list}>
              <img className={a.service__img} src={serviceOne} alt=""/>
            <h3 className={a.service__tit}>
            FREE SHIPPING
            </h3>
            <p className={a.service__text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            </li>
            <li className={a.service__list}>
              <img className={a.service__img} src={serviceTwo} alt=""/>
            <h3 className={a.service__tit}>
            100% REFUND
            </h3>
            <p className={a.service__text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            </li>
            <li className={a.service__list}>
              <img className={a.service__img} src={serviceThree} alt=""/>
            <h3 className={a.service__tit}>
            SUPPORT 24/7
            </h3>
            <p className={a.service__text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            </li>
        </ul>
      </div>
     </div>
     <div className={a.rated}>
      <div className={a.container}>
        <div className={a.rated__parent}>
         <h1 className={a.rated__tit}>
         MOST TOP RATED PRODUCTS
        <div className={a.rated__cardParent}>
          {
cards.map(products=>{
  return(
    <div className={a.rated__card}>
    <div className={a.img__paernt}>
    <img src={products.img} className={a.rated__img} alt="" />
    </div>
      <div className={a.rated__body}>
        <h2 className={a.rated__tit}>
      {products.name}
        </h2>
        <p className={a.all__cardRaiting}>
                  {[...Array(4)].map((_, index) => (
                <span key={index} className={`star ${index < Math.floor(products.raiting) ? 'filled' : (products.raiting % 1 !== 0 && index === Math.floor(products.raiting)) ? 'half-filled' : ''}`}>
                  &#9733; {/* Yulduz belgisi */}
                </span>
              ))}
                  </p>
   <div className={a.mapper}>
   <p className={a.rated__price}>
          {products.pirce}
        </p>
        <p className={a.rated__aksia}>
        {products.sale}
        </p>
   </div>
        
      </div>
    </div>
)
})
          }
        </div>
         </h1>
        </div>
      </div>
     </div>
    </div>
    <Footer/>
   </>
  )
}

export default AllPage