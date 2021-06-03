import { useState } from 'react';
import { Dropdown } from './components/Dropdown';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div>
      {selectedPokemon && <div>Seu pokemon é: {selectedPokemon}</div>}

      <Dropdown 
        title="Selecione"
        options={['Bulbasauro', 'Squirtle', 'Charmander']}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
