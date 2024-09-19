import React, { useContext } from 'react';
import CommonContext from '../contexts/CommonContext';
const SiteTitle = () => {
  const {
    states: { mainTitle },
  } = useContext(CommonContext);

  return <title>{mainTitle}</title>;
};

export default SiteTitle;
