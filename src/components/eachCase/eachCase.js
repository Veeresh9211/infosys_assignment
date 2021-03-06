import React, { useEffect, useState } from 'react';
import './eachCase.scss';
import { useTranslation} from 'react-i18next';

const EachCase = (props)=>{
    const [eachdetail, setEachDetail] =useState(null);
    const [stateName, setStateName] =useState(null);
    const { t, i18n } = useTranslation();
    useEffect(()=>{
        let finalDetails = [];
        Object.keys(props.history.location.state.detail.districtDetails).forEach((eachS)=>{
            finalDetails.push({eachState: eachS,
                               active: props.history.location.state.detail.districtDetails[eachS].active,
                               confirmed: props.history.location.state.detail.districtDetails[eachS].confirmed,
                               deceased: props.history.location.state.detail.districtDetails[eachS].deceased,
                               recovered: props.history.location.state.detail.districtDetails[eachS].recovered
                            })
        })
        setEachDetail(finalDetails);
        setStateName(props.history.location.state.detail.state);
        debugger
    },[props]);

    let eachCasess = eachdetail && eachdetail.map((val,index)=>{
        return (<React.Fragment>
                <tr>
                    <td>{val.eachState}</td>
                    <td>{val.active}</td>
                    <td>{val.confirmed}</td>
                    <td>{val.deceased}</td>
                    <td>{val.recovered}</td>
                </tr>
                </React.Fragment>)
    });

    return(
        <div className="eachState">
            <p>{t('stateNameHeader')} <b>{stateName}</b></p>
            <div className="table-responsive">
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">District Name</th>
                    <th scope="col">Active Case</th>
                    <th scope="col">Confirmed Case</th>
                    <th scope="col">Deceased Case</th>
                    <th scope="col">Recovered Case</th>
                    </tr>
                </thead>
                <tbody>
                    {eachCasess}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default EachCase;