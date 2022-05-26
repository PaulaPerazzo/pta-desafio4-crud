import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home, Page } from './pages';

function App() {
  return (
    <>
      <Page></Page>
    </>
  );
}

export default App;
