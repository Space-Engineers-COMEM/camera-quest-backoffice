import React from 'react';
import ReactDOM from 'react-dom';
import Button from './navigation/Button';

type HomeProps = {
  name: string;
  route: string;
  children: any;
};

function HomeCard(props: HomeProps) {
  return (
    <div className="card">
      <div className="card__title">{props.name}</div>
      {props.children}
      <a href={props.route} className="button">
        Éditer
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Que souhaitez-vous faire ?</h1>
      <HomeCard name="Un objet" route="#">
        Modifier ou créer un objet qui sera présenté dans la collection du musée et ajouté à un
        étage pour être présent dans l’application.
      </HomeCard>
      <HomeCard name="Un étage" route="#">
        Modifier ou créer un étage qui sera présent dans l’application. Possibilité de renommer et
        de ré-ordonner les étages.
      </HomeCard>
    </div>
  );
}
