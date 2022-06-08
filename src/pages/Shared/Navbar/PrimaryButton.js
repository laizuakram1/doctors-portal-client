import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
             <button class="btn btn-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;