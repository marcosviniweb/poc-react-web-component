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

  useEffect(() => {

    const handleIndeterminateChange = (event: CustomEvent) => {
      console.log('Indeterminate state changed for items:', event.detail);
      setItems(event.detail);
    };

    const handleModelChange = (event: CustomEvent) => {
      console.log('Model changed:', event.detail);
      setModel(event.detail);
    };

    const checkboxElement = document.querySelector('seds-checkbox')!;

    checkboxElement.addEventListener('indeterminateChange', handleIndeterminateChange as EventListener);
    checkboxElement.addEventListener('modelChange', handleModelChange as EventListener);

    return () => {
      checkboxElement.removeEventListener('indeterminateChange', handleIndeterminateChange as EventListener);
      checkboxElement.removeEventListener('modelChange', handleModelChange as EventListener);
    };
  }, []);

  return (

      <seds-checkbox
        label='Checkbox do Seds'
        items={itemCheckbox}
        disabled={false}
        required={true}
      ></seds-checkbox>

  );
};

export default App;
