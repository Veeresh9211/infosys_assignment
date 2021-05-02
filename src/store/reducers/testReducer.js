const intitalState={
    testsList: []
 }
 
 const TestReducer = (state=intitalState, action) =>{
    switch(action.type){
        case 'TEST_LIST':
            debugger
            return{
                ...state,
                testsList: action.val
            }
        default:
            return{
                ...state
            }
    }
 }
 
 export default TestReducer;