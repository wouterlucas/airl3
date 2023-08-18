
import { Route, Routes } from "@solidjs/router";

import Home from './pages/Home';
import Banana from "./pages/Banana";

const App = () => {
  return (
    <view id="container">
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/banana" component={Banana} />
      </Routes>
    </view>
  );
}

export default App;
