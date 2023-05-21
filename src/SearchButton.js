import React from "react";

const SearchButton = (props) => {
    return <button className="btn btn-primary">{props.children}</button>;
};

export default SearchButton;