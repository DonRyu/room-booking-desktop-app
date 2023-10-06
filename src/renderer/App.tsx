import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

const Calendar = () => {
  return(
    <div>
      asd
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </Router>
  );
}
