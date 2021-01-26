import React from 'react';

import './form-input.styles.sass';


const FormInput = ({handleChanged, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChanged} {...otherProps} />
        {
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
    
)


export default FormInput;