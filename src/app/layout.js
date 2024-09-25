'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CommonProvider } from '@/commons/contexts/CommonContext';
import { UserInfoProvider } from '@/commons/contexts/UserInfoContext';
import SiteTitle from '@/commons/SiteTitle';
import Header from '@/outlines/Header';
import Footer from '@/outlines/Footer';
import MainMenu from '@/outlines/MainMenu';
import ModalContainer from '@/chat/containers/ModalContainer';
import { theme } from '@/theme';
import 'react-calendar/dist/Calendar.css'; //calendar 기본 스타일 시트 전역 적용
import '@/i18n';

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <UserInfoProvider>
        <CommonProvider>
          <html lang="en">
          <head>
            <SiteTitle />
          </head>
          <body>
          <Header />
          <MainMenu />
          <main>{children}</main>
            <ModalContainer />
          <Footer />
          </body>
          </html>
        </CommonProvider>
      </UserInfoProvider>
    </ThemeProvider>
  );
}
