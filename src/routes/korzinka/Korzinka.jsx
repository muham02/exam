import { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import AppContext from '../../context/store'
import k from './Korzinka.module.scss'
const Korzinka = () => {
    const addCard = []
    const [state,dispatch]= useContext(AppContext)
  
 console.log(state,addCard);
  return (
    <>
    <Nav/>
   <div className={k.korzinka}>
    <span className={k.span}>korzinka/ nomi</span>
    <div className={k.container}>
{
       <div className={k.allParentCards}>
       {
state.map(items=>{
    console.log(items);
})

       }
 
                

 
      </div>
}
    </div>
   </div>
    <Footer/>
    </>
  )
}

export default Korzinka