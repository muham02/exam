import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import s from './SinglePage.module.scss'
import axios from '../../api'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import addCard from '../../images/singlebtn.png'
import addLike from '../../images/singleLike.png'
import face from '../../images/singleIcon.png'
import twit from '../../images/singleIcon2.png'
import infon from '../../images/info.png'
import cards from '../../cards/data'


const SinglePage = () => {
    const [userData,setUserData] = useState([])
    let data = useParams()
  useEffect(()=>{

    const getOneData = async ()=>{
        try{
          let response = await axios(`/products/${data.id}`);
       setUserData(response.data); 
        }
        catch(error){
          alert(error)
        }
        
      }
    console.log(userData);
 getOneData()

 },[data])

  return (
 <>
 <Nav/>
   <div className={s.singlepage}>
    <div className={s.container}>
    {
       userData ? <div className={s.singplageCard}>
       <div className={s.img__parent}>
       <img src={userData.image} alt="" className="s.singlePageImg" />
       </div>
       <div className={s.body}>
       <h1 className={s.singlePageTitle}>
            {userData.name}
        </h1>
   <div className={s.single__texts}>
   <p className={s.all__cardRaiting}>
                  {[...Array(4)].map((_, index) => (
                <span key={index} className={`star ${index < Math.floor(userData.rating) ? 'filled' : (userData.rating % 1 !== 0 && index === Math.floor(userData.rating)) ? 'half-filled' : ''}`}>

                  &#9733; {/* Yulduz belgisi */}
                </span>
              ))}
                  </p>
                  <p className={s.text}>
                    0 reviews
                  </p>
                  <p className={s.btn}>
                  submit reviews
                  </p>
   </div>
                  <div className={s.single__texts}>
                  <p className={s.singlePrice}>
                   $ {
                        userData.price
                    }
                  </p>
                  <p className={s.price}>
                    $534000
                  </p>
                  <p className={s.staff}>
                  24%Off
                  </p>
                  </div>
       <div className={s.single__addParent}>
       <div className={s.singleAddCrad}>
            <div className={s.degree}>
                <p>-</p>
                <p>2</p>
                <p>+</p>
            </div>
            <NavLink to={'/korzinka'} className={s.singleBtn}>
                <img src={addCard} alt="" className={s.addCard} />
            </NavLink>
            <img src={addLike} alt="" />
            </div> </div> 
            <div className={s.single__iconParent}>
                <img src={face} alt="" className={s.singleIcon} />
                <img src={twit} alt="" className={s.singleIcon} />
            </div>
       </div>
       </div>:<></>
    }
   <div className={s.information}>
    <img src={infon} alt="" />
   <p className={s.single__desc}>
    air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
    air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
    air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
        </p>
   </div>
   <div className={s.rated}>
      <div className={s.container}>
        <div className={s.rated__parent}>
         <h1 className={s.rated__tit}>
         MOST TOP RATED PRODUCTS
        <div className={s.rated__cardParent}>
          {
cards.map(products=>{
  return(
    <div className={s.rated__card}>
    <div className={s.img__paernt}>
    <img src={products.img} className={s.rated__img} alt="" />
    </div>
      <div className={s.rated__body}>
        <h2 className={s.rated__tit}>
      {products.name}
        </h2>
        <p className={s.all__cardRaiting}>
                  {[...Array(4)].map((_, index) => (
                <span key={index} className={`star ${index < Math.floor(products.raiting) ? 'filled' : (products.raiting % 1 !== 0 && index === Math.floor(products .raiting)) ? 'half-filled' : ''}`}>
                  &#9733; {/* Yulduz belgisi */}
                </span>
              ))}
                  </p>
   <div className={s.mapper}>
   <p className={s.rated__price}>
          {products.pirce}
        </p>
        <p className={s.rated__aksia}>
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
   </div>
   <Footer/>
 </>
  )
}

export default SinglePage