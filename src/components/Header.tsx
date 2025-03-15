import React from 'react';
import { Textfit } from 'react-textfit';
import AnimateIn from './AnimateIn';

const Header: React.FC = () => {
    return (
        <div className="header">
            <AnimateIn className="header__title" direction="down">
                <h1>
                    <Textfit
                        mode="single"
                        max={50} // Maximum font size
                        min={24} // Minimum font size for readability
                    >
                        Vinam Arora
                    </Textfit>
                </h1>
            </AnimateIn>
            <div className="header__nav"></div>
        </div>
    );
};

export default Header;
