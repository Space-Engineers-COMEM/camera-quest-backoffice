import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Define types for the component props
 * @property {string} title - The title of the element, like "object" or "floor".
 * @property {string} route - The route that the component will be rendered at.
 * @property {string} children - The content of the component.
 */
type HomeProps = {
  title: string;
  route: string;
  children: string;
};

/**
 * Component card for the home page
 * @param {HomeProps} props - HomeProps
 * @returns A React component
 */

function HomeCard(props: HomeProps) {
  return (
    <div className="card">
      <h2 className="card__title">{props.title}</h2>
      <p>{props.children}</p>
      <Link to={props.route} className="button button__edit">
        Éditer <i className="fa-solid fa-angle-right" />
      </Link>
    </div>
  );
}

/**
 * Main component for the home page. Contains the cards to go on different pages
 * @returns A React component
 */
export default function Home() {
  return (
    <div className="pageContainer homeContainer">
      <h1>Que souhaitez-vous éditer ?</h1>
      <HomeCard title="Un objet" route="/objects">
        Modifier ou créer un objet qui sera présenté dans la collection du musée et ajouté à un
        étage pour être présent dans l’application.
      </HomeCard>
      <HomeCard title="Un étage" route="#">
        Modifier ou créer un étage qui sera présent dans l’application. Possibilité de renommer et
        de ré-ordonner les étages.
      </HomeCard>
    </div>
  );
}
