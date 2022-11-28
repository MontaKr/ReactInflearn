export const addNumber = () => {
  return{
    type : 'ADD',
  }
} 

const initialState = {
  goods : 0
}

const goodsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD" :
      return {
        ...state,
        goods : state.goods+1,
      }
    default :
      return {
        ...state,
      }  
  }
}

export default goodsReducer;