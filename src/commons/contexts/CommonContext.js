import React, { createContext, useState, useContext } from 'react';

const CommonContext = createContext({
  mainTitle: '',
  subTitle: '',
  showHeader: true, // 헤더 보임 통제
  showFooter: true, // 푸터 보임 통제
  showMainMenu: true, // 메뉴 보임 통제
});

const CommonProvider = ({ children }) => {
  const [mainTitle, setMainTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showMainMenu, setShowMainMenu] = useState(true);

  const value = {
    states: { mainTitle, subTitle, showHeader, showFooter, showMainMenu },
    actions: {
      setMainTitle,
      setSubTitle,
      setShowHeader,
      setShowFooter,
      setShowMainMenu,
    },
  };

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  );
};

const { Consumer: CommonConsumer } = CommonContext;

export { CommonProvider, CommonConsumer };

export const getCommonStates = () => {
  const { states } = useContext(CommonContext);
  return states;
};

export const getCommonActions = () => {
  const { actions } = useContext(CommonContext);
  return actions;
};

export default CommonContext;
