import React from "react";
import Row from "./Row";


function Card(props) {
    return (
        <div className="card">
            <h2 className="h2">{props.name}</h2>
            <Row title="Вселенная" info={props.universe}></Row>
            <Row title="Альтер Эго" info={props.alterego}></Row>
            <Row title="Род деятельности" info={props.occupation}></Row>
            <Row title="Друзья" info={props.friends}></Row>
            <Row title="Суперсилы" info={props.superpowers}></Row>
            <img className="card__img" src={props.url} alt="Постер супер-героя"/>
            <div className="card__column">
                <div className="card__link">Подробная информация</div>
                <div className="card__addinfo">{props.info}</div>
            </div>
        </div>
    )
}

export default Card;