import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';

const Header = ()=>{
    const { t, i18n } = useTranslation();
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to="/" class="nav-link">{t('home')}</Link>
                </li>
                <li class="nav-item">
                    <Link to="/settings" class="nav-link">{t('settings')}</Link>
                </li>
                <li class="nav-item">
                    <Link to="/caseList" class="nav-link">{t('cases')}</Link>
                </li>
                <li class="nav-item">
                    <Link to="/testList" class="nav-link">{t('testing')}</Link>
                </li>
                </ul>
            </div>
            </nav>
    )
}

export default Header;