import React from 'react';

import SvgIcon from '../../modules/common/ui-kit/SvgIcon';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/pages/index.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SvgIcon kind="google" />
      </header>
    </div>
  );
}

export default App;
