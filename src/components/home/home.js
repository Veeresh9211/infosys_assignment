import React from 'react';
import './home.scss';
import {GetCaseLists} from '../../store/actions/caseAction';
import {GetTestLists} from '../../store/actions/testAction';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import { useTranslation} from 'react-i18next';

const Home = ({GetCaseLists, GetTestLists})=>{
    let history = useHistory();
    const { t, i18n } = useTranslation();
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
                {t('cases')}
            </div>
            <div className="col-md-5 testing" onClick={getTestList}>
                {t('testing')}
            </div>
        </div>
    )
}

export default connect(null,{GetCaseLists,GetTestLists})(Home);