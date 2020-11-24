import React from 'react';

function SearchBar({value, onChange}) {
    return(
        <div className="row">
            <div className="col-md-6 col-md-offset-3 search-bar">
                <div className="input-group">
                    <input
                    className="form-control input-lg"
                    placeholder="Search..."
                    onChange={onChange}
                    value={value}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-info input-lg">
                            <i className="fa fa-search"/>
                        </button>   
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;