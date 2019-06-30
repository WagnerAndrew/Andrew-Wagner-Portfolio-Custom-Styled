import React from 'react';

import DrawerToggleButton from './DrawerToggleButton';

const navbar = props => (
  <nav className='navbar clearfix'>
    <div className='navbar__navigationItems'>
      <ul>
        <li>
          <a
            href='mailto:andrew@wagnerdev.io'
            target='_blank'
            rel='noreferrer noopener'
          >
            <i class='far fa-envelope' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/wagner-andrew/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <i class='fab fa-linkedin-in' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/WagnerAndrew'
            target='_blank'
            rel='noreferrer noopener'
          >
            <i class='fab fa-github' />
          </a>
        </li>
        <li>
          <a
            href='https://docs.google.com/document/d/e/2PACX-1vQzFrU9Gz453cdXutawZu-dHcXPAhXnlSn2dPBSH9vae1w_K5xlFSrdq7X1JN91kwXLGpbRAaGG_Tld/pub'
            target='_blank'
            rel='noreferrer noopener'
          >
            <i class='far fa-file' />
          </a>
        </li>
      </ul>
    </div>
    <div className='navbar__toggleButton'>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
  </nav>
);

export default navbar;
