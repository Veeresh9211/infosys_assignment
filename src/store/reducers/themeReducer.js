const intitalState={
    theme: false
 }
 
 const ThemeReducer = (state=intitalState, action) =>{
     switch(action.type){
         case 'CHANGE_THEME':
             debugger
             return{
                 ...state,
                 theme: action.val
             }
         default:
             return{
                 ...state
             }
     }
 }
 
 export default ThemeReducer;