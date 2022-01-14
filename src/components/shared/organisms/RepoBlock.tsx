import React from 'react';
import PropTypes from 'prop-types';
import { useAnimate } from '../../../hooks/useAnimate';

export const RepoBlock = ({ reposList }) => {
  useAnimate({
    classSelector: 'repo-block',
    animationClass: 'animate__animated animate__bounceInDown animate-delay-2s'

  });

  const repos = reposList.map((repo, index) => (
    <div className="mx-auto my-4 md:my-2" key={ `repo-${ index }` } >
      <a href={ repo.linkRepo } target="_blank" >
        <img src={ repo.image.url } alt={ repo.name } className="max-h-40" />
      </a>
    </div>
  ));

  return (
    <div className="bg-gradient-to-r from-yellow-300 to-indigo-800 dark:text-white" id="repositories">
      <div className="container mx-auto repo-block py-8">
        <h1 className="text-3xl text-center py-4">Repositories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          { repos }
        </div>
      </div>
    </div>
  )
};

RepoBlock.propTypes = {
  reposList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      linkRepo: PropTypes.string,
      image: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string
      })
    })
  )
};
