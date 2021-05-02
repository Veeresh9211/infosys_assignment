import axios from 'axios';

export const GetCaseLists = () =>{
    debugger
    return (dispatch) =>{
        axios.get(`https://api.covid19india.org/state_district_wise.json`)
        .then((response)=>{
            console.log(response)
            let stateNames = Object.keys(response.data);
            let finalObject  = [];
            stateNames.forEach((state)=>{
                finalObject.push({state,
                    active: Object.values(response.data[state].districtData).reduce((accumulator, current) => accumulator + current.active, 0),
                    confirmed: Object.values(response.data[state].districtData).reduce((accumulator, current) => accumulator + current.confirmed, 0),
                    deceased: Object.values(response.data[state].districtData).reduce((accumulator, current) => accumulator + current.deceased, 0),
                    recovered: Object.values(response.data[state].districtData).reduce((accumulator, current) => accumulator + current.recovered, 0),
                    districtDetails: response.data[state].districtData
                  })
            })

           console.log(finalObject);
            dispatch({type: 'CASE_LIST', val: finalObject});
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}


export const SearchStateTests = (key) =>{
    return (dispatch) =>{
        dispatch({type: 'SEARCH_LIST', val: key});
    }
}