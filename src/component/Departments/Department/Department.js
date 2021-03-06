import React from 'react';
import { Link } from 'react-router-dom';
import './Department.css';

const Department = ({ department }) => {
    const { name, description, img, id } = department;
    return (
        <div>
            <div class="col mb-5">
                <div class="card">
                    <img src={img} class="card-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <Link to={`/details/${id}`}>
                            <button type="button" class="btn btn-outline-info m-2">Book:
                                {name.toLowerCase()}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;