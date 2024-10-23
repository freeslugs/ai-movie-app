import React from 'react';
import MainContent from './components/MainContent';
import Player from './components/Player';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="flex flex-col h-screen">
        <MainContent />
        <Player />
      </div>
    </ErrorBoundary>
  );
}

export default App;
