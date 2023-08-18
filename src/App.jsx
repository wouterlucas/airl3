import { useFocusManager } from '@lightningjs/solid';
import { Route, Routes } from "@solidjs/router";

import Home from './pages/Home';

const App = () => {
  useFocusManager();

  return (
    <view onLast={() => history.back()}>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </view>
  );
}

export default App;
