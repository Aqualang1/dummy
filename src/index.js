import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';

function App() {
  return (
    
    <div>
      <AppRouter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
