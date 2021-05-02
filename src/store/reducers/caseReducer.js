const intitalState={
   casesList: [],
   searchResult: []
}

const CaseReducer = (state=intitalState, action) =>{
    switch(action.type){
        case 'CASE_LIST':
            debugger
            return{
                ...state,
                casesList: action.val,
                searchResult: action.val
            }
        case 'SEARCH_LIST':
            const filteredData = state.casesList.filter(cases => {
                       let res = cases.state.toLowerCase().includes(action.val.toLowerCase());
                        if (res)
                        {
                            return true;
                        }
              });
              debugger
              let finalRes = action.val === "" ? state.casesList : [...filteredData]; 
            return{
                ...state,
                searchResult: finalRes
            }
        default:
            return{
                ...state
            }
    }
}

export default CaseReducer;