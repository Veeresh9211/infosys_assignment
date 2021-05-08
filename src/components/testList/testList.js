import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {GetTestLists} from '../../store/actions/testAction';
import { useTranslation} from 'react-i18next';
import './testList.scss';

const TestList = ({testList, GetTestLists})=>{
    const { t, i18n } = useTranslation();
    useEffect(()=>{
        GetTestLists();
    },[]);

    let testss ="";
    if(testList.length != 0){
        testss = testList.map((val,index)=>{
            return (<React.Fragment>
                    <tr>
                        <td>{val.state}</td>
                        <td>{val.totaltested}</td>
                        <td>{val.unconfirmed}</td>
                        <td>{val.updatedon}</td>
                    </tr>
                    </React.Fragment>)
        });
    }
    else{
        testss="Loading..."
    } 
    
    return(
        <div className="caseList">
            <div className=" table-responsive">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">{t('stateNameHeader')}</th>
                    <th scope="col">{t('totalTested')}</th>
                    <th scope="col">{t('unconfirmed')}</th>
                    <th scope="col">{t('updatedDate')}</th>
                    </tr>
                </thead>
                <tbody>
                    {testss}
                </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        testList: state.test.testsList
    }
}
export default connect(mapStateToProps,{GetTestLists})(TestList);