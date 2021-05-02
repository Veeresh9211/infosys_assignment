import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {GetTestLists} from '../../store/actions/testAction';

import './testList.scss';

const TestList = ({testList, GetTestLists})=>{

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
           <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">State</th>
                <th scope="col">Total Tested</th>
                <th scope="col">Unconfirmed</th>
                <th scope="col">Updated Date</th>
                </tr>
            </thead>
            <tbody>
                {testss}
            </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        testList: state.test.testsList
    }
}
export default connect(mapStateToProps,{GetTestLists})(TestList);