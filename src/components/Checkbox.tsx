import React, { useEffect, useRef, useState, Component } from 'react';
import '../App.css';
import '@experian-design-system/seds-checkbox';
import { Item } from '@experian-design-system/seds-checkbox';


const initialItems: Item[] = [
  { name: 'Opção 1', checked: false, position: 'before' },
  { name: 'Opção 2', checked: false, position: 'after' },
];

const App = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [model, setModel] = useState<boolean>(false);

  const itemCheckbox = JSON.stringify(items);
  const checkboxRef = useRef<HTMLElement>(null); 

  useEffect(() => {
    const checkboxElement = checkboxRef.current;

    if (checkboxElement) {
      const handleIndeterminateChange = (event: CustomEvent) => {
        console.log('Indeterminate state changed for items:', event.detail);
        setItems(event.detail);
      };

      const handleModelChange = (event: CustomEvent) => {
        console.log('Model changed:', event.detail);
        setModel(event.detail);
      };

      checkboxElement.addEventListener('indeterminateChange', handleIndeterminateChange as EventListener);
      checkboxElement.addEventListener('modelChange', handleModelChange as EventListener);

      return () => {
        checkboxElement.removeEventListener('indeterminateChange', handleIndeterminateChange as EventListener);
        checkboxElement.removeEventListener('modelChange', handleModelChange as EventListener);
      };
    }
  }, [checkboxRef]);


  return (
    <header className="App-header">
      <seds-checkbox
        ref={checkboxRef}
        label='Checkbox do Seds'
        items={items}
        disabled={false}
        required={true}
      ></seds-checkbox>
    </header>
  );
};

export default App;
