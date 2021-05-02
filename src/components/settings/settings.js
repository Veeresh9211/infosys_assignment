import React, { useState } from 'react';
import {connect} from 'react-redux';
import {ChangeTheme} from '../../store/actions/themeAction';
import './settings.scss';

const Settings = ({ChangeTheme}) =>{

    const changeTheme =(e) =>{
        debugger
        ChangeTheme(e.currentTarget.checked);
    }
    const [checked, setChecked] = useState(true);
    return(<div className="settings">
                <div>
                    <span>Theme Change: &nbsp;</span>
                    <label class="switch">
                        <input type="checkbox" defaultChecked={true} onChange={(e)=>changeTheme(e)}/>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <span>Language Selector: &nbsp;</span>
                </div>
            </div>)
}

export default connect(null,{ChangeTheme})(Settings);