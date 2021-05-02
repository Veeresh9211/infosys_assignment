import axios from 'axios';

export const GetTestLists = () =>{
    debugger
    return (dispatch) =>{
        axios.get(`https://api.covid19india.org/state_test_data.json`)
        .then((response)=>{
            dispatch({type: 'TEST_LIST', val: response.data.states_tested_data});
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}