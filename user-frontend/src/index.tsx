import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import App from './App';
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.render(
    <AuthProvider>
      <BrowserRouter>
      <ChakraProvider>
        <CSSReset />
          <App/>
      </ChakraProvider>
      </BrowserRouter>
    </AuthProvider>

  ,document.getElementById('root')
);
