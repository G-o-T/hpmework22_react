import React from "react";
import Card from "./Card";
import { heroes } from "../../data";


function CardList() {
    return (
        <React.Fragment>
            {heroes.map((el,ind) => <Card key={ind} name={el.name} universe={el.universe} alterego={el.alterego} occupation={el.occupation} friends={el.friends} superpowers={el.superpowers} url={el.url} info={el.info}></Card>)}
        </React.Fragment>
    )
}

export default CardList;

