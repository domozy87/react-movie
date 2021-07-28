import React from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';

// Global Style
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <GlobalStyle />
        </div>
    );
}

export default App;
