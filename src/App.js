import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './routes/Home';
import CalculatorRoute from './routes/CalculatorRoute';
import Quotes from './routes/Quotes';
import Error from './routes/Error';

const App = () => (
  <Router>
    <header id="header">
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home |</Link>
        <Link to="/calculator">Calculator |</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorRoute />} />
      <Route path="/quote" element={<Quotes />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default App;
