import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {GetCaseLists, SearchStateTests} from '../../store/actions/caseAction';
import './casesList.scss';
import { useHistory } from "react-router-dom";

const CaseList = ({caseList, GetCaseLists, SearchStateTests})=>{
    let history = useHistory();
    useEffect(()=>{
        GetCaseLists();
    },[]);

    const searchStateCases = (e)=>{
        SearchStateTests(e.currentTarget.value);
    }

    const openDetailView = (state) =>
    {   
        history.push({
            pathname: '/detailsView',
            state: { detail: state }
        });
    }

    let casess = "";
    if(caseList.length !=0){
        casess = caseList && caseList.map((val,index)=>{
            return (<React.Fragment>
                    <tr onClick={()=>openDetailView(val)}>
                        <td>{val.state}</td>
                        <td>{val.active}</td>
                        <td>{val.confirmed}</td>
                        <td>{val.deceased}</td>
                        <td>{val.recovered}</td>
                    </tr>
                    </React.Fragment>)
        });
    }else{
        casess="Loading..."
    }
    
    return(
        <div className="caseList">
            <h4>
                List Of Cases State Wise
            </h4>
            <div className="searchContainer">
                <input type="text" class="form-control" id="stateSearch" onChange={(e)=>searchStateCases(e)} placeholder="Search by State.."/>
            </div>
           <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">State Name</th>
                <th scope="col">Active Cases</th>
                <th scope="col">Confirmed Cases</th>
                <th scope="col">Deceased Cases</th>
                <th scope="col">Recovered Cases</th>
                </tr>
            </thead>
            <tbody>
                {casess}
            </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        caseList: state.case.searchResult
    }
}
export default connect(mapStateToProps,{GetCaseLists, SearchStateTests})(CaseList);