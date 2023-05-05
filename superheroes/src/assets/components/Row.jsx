import React from "react";

function Row(props) {
    return (
        <div className="card__row">
            <p className="card__title">{props.title}</p>
            <p className="card__desc">{props.info}</p>
        </div>
    )
}

export default Row;