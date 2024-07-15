export const intialState = {
   user:[]

}
const reducer = (state,action)=>{
    console.log(state);
    switch(action.type){
        case "ADDTOCARD":
          return {...state,user: action.product}
          default:return state
    }
}
export default reducer