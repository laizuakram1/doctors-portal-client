import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
             <button class="bg-gradient-to-r from-primary to-secondary btn btn-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;