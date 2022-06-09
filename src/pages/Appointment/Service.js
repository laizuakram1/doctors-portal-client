import React from 'react';

const Service = ({service}) => {
    return (
        <div class="card max-w-lg bg-base-100 shadow-md ">
        <div class="card-body">
          <h2 class="card-title justify-center text-secondary">{service.name}</h2>
        </div>
      </div>
    );
};

export default Service;