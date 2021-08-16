import React from 'react';
import { useAnimate } from '../../../hooks/useAnimate';
import gitHubLogo from '../../../images/github-logo.png';
import gitLabLogo from '../../../images/gitlab-logo.png';

export const RepoBlock = () => {
  useAnimate({
    classSelector: 'repo-block',
    animationClass: 'animate__animated animate__bounceInDown animate-delay-2s'

  });

  return (
    <div className="bg-gradient-to-r from-yellow-300 to-indigo-800 dark:text-white" id="repositories">
      <div className="container mx-auto repo-block py-8">
        <h1 className="text-3xl text-center py-4">Repositories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mx-auto my-4 md:my-2">
            <a href="https://github.com/dimi7707?tab=repositories" target="_blank" >
              <img src={gitHubLogo} alt={gitHubLogo} className="max-h-40" />
            </a>
          </div>
          <div className="mx-auto my-4 md:my-2">
            <a href="https://gitlab.com/dimitri07" target="_blank">
              <img src={gitLabLogo} alt={gitLabLogo} className="max-h-40" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};
