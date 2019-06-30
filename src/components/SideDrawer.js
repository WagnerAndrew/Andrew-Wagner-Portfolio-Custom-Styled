import React from 'react';

const sideDrawer = props => {
  let drawerClasses = ['sideDrawer'];
  if (props.show) {
    drawerClasses = ['sideDrawer open'];
  }
  return (
    <nav>
      <ul className={drawerClasses}>
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
    </nav>
  );
};

export default sideDrawer;
