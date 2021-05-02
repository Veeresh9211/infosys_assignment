import React from 'react';
import './home.scss';
import {GetCaseLists} from '../../store/actions/caseAction';
import {GetTestLists} from '../../store/actions/testAction';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";

const Home = ({GetCaseLists, GetTestLists})=>{
    let history = useHistory();
  
    const getCaseList =()=>{
        GetCaseLists();
        history.push("/caseList");
    }

    const getTestList =()=>{
        GetTestLists();
        history.push("/testList");
    }

    return(
        <div className="row home">
            <div className="col-md-5 cases" onClick={getCaseList}>
                Cases
            </div>
            <div className="col-md-5 testing" onClick={getTestList}>
                Testing
            </div>
        </div>
    )
}

export default connect(null,{GetCaseLists,GetTestLists})(Home);