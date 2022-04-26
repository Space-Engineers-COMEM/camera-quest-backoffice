import React from 'react';

type Props = {
  children: string;
};

export default function Error(props: Props) {
  return <div>Erreur: {props.children}</div>;
}
