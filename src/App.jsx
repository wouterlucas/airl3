import { useFocusManager } from '@lightningjs/solid';
import { Route, Routes } from "@solidjs/router";

import { Home } from './pages/Home';

function App() {
  useFocusManager();

  return (
    <view onLast={() => history.back()} style={{ width: 1920, height: 1080 }}>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </view>
  );
}

export default App;
