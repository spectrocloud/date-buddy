import DateForm from './Form';
import SuggestComponent from './SuggestionArea';
import './App.css';
import { useState } from 'react';

function App() {
  const [suggestion, setSuggestion] = useState()
  return (
    <div className="App">
      <section className='form-section'>
        <DateForm setSuggestion={setSuggestion} />
        <SuggestComponent suggestion={suggestion} />
      </section>
    </div>
  );
}

export default App;
