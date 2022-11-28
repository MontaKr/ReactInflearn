export const yesClick = () => {
  return{
    type : 'Yes',
  }
} 

export const noClick = () => {
  return{
    type : 'No',
  }
} 

const initialState = {
  isClick : false
}

const loginClick = (state = initialState, action) => {
  switch(action.type) {
    case "Yes" :
      return {
        ...state,
        isClick : true
      }

    case "No" :
      return {
        ...state,
        isClick : false
      }

    default :
      return {
        ...state,
      }  
  }
}

export default loginClick;