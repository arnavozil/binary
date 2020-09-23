import React, { useState } from 'react';
import MasterButton from '../../widgets/Button/Button';
import { PrimaryInput } from '../../widgets/Input/Input';
import { GiEarthAmerica } from 'react-icons/gi';

import s from './Header.module.scss';

const Header = () => {

    const [value, setValue] = useState('');

    return (
        <div className = {s.main}>
            <span className = {s.main_logo}>
                Cinemeye
            </span>
            <span className = {s.main_other}>
                <div className = {s.main_other_search}>
                    <PrimaryInput
                        placeholder = 'Search'
                        value = {value}
                        onChange = {setValue}
                    />
                </div>
                <div className = {s.main_other_buttons}>
                    <div className = {s.main_other_buttons_tertiary}>
                        <MasterButton 
                            type = 'tertiary'
                            text = ' en'
                            iconJSX = {<GiEarthAmerica size = {10} />}
                        />
                    </div>
                    <div className = {s.main_other_buttons_primary}>
                        <MasterButton 
                            type = 'secondary'
                            text = 'Login'
                        />
                    </div>
                    <div className = {s.main_other_buttons_primary}>
                        <MasterButton 
                            text = 'Try Now'
                        />
                    </div>
                </div>
            </span>
        </div>
    )
};

export default Header;