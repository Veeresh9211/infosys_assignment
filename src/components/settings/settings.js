import React, { useState, Suspense, useEffect } from 'react';
import {connect} from 'react-redux';
import {ChangeTheme} from '../../store/actions/themeAction';
import './settings.scss';
import { useTranslation, Trans } from 'react-i18next';


const Loader = () => (
      <div>loading...</div>
  );

const Settings = ({ChangeTheme}) =>{
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState("en");
    const changeTheme =(e) =>{
        ChangeTheme(e.currentTarget.checked);
    }

    const changeLanguage = (e) => {
        setLang(e.currentTarget.value);
        i18n.changeLanguage(e.currentTarget.value);
    };

    return(
        <Suspense fallback={<Loader />}>
            <div className="settings">
                <div>
                    <span>Theme Change: &nbsp;</span>
                    <label class="switch">
                        <input type="checkbox" defaultChecked={false} onChange={(e)=>changeTheme(e)}/>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <span>{t('changeLanguage')}: &nbsp;</span>
                    <span>
                    <select value={lang} className="form-select" onChange={(e)=>changeLanguage(e)} >
                        <option value="en">EN</option>
                        <option value="KAN">KAN</option>
                    </select>
                    </span>
                </div>
            </div>
        </Suspense>)
}



export default connect(null,{ChangeTheme})(Settings);