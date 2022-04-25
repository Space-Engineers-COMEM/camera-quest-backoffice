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
  buttonText: string;
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
    <div className="col-8 mx-auto">
      <div className="card p-4 my-4">
        <h2 className="card__title">{props.title}</h2>
        <p>{props.children}</p>
        <div className="text-right">
          <Link to={props.route}>
            <button type="button" className="button primary">
              Éditer {props.buttonText} &gt;
            </button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Main component for the home page. Contains the cards to go on different pages
 * @returns A React component
 */
export default function Home() {
  return (
    <div>
      <h1 className="text-center mb-5">Que souhaitez-vous éditer ?</h1>
      <HomeCard title="Un objet" buttonText="les objets" route="/objets">
        Modifier ou créer un objet qui sera présenté dans la collection du musée et ajouté à un
        étage pour être présent dans l’application.
      </HomeCard>
      <HomeCard title="Un étage" buttonText="les etages" route="/etages">
        Modifier ou créer un étage qui sera présent dans l’application. Possibilité de renommer et
        de ré-ordonner les étages.
      </HomeCard>
    </div>
  );
}
