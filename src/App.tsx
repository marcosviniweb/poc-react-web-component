import React, { useEffect, useState } from 'react';
import './App.css';
import './assets/seds-checkboxs.js';


interface Item {
  name: string;
  checked: boolean;
  position: SedsCheckboxOptions;
}


enum SedsCheckboxOptions {
  BEFORE = 'before',
  AFTER = 'after',
}


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'seds-checkbox': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & SEDSCheckboxProps, HTMLElement>;
    }
  }
}


interface SEDSCheckboxProps {
  color?: string;
  defaultColor?: string;
  disabled?: boolean;
  items?: string;
  label?: string;
  labelPosition?: string;
  required?: boolean;
  tabIndex?: number;
  onIndeterminateChange?: (updatedItems: Item[]) => void;
  onModelChange?: (newModel: boolean) => void;
}

const initialItems: Item[] = [
  { name: 'Opção 1', checked: false, position: SedsCheckboxOptions.BEFORE },
  { name: 'Opção 2', checked: false, position: SedsCheckboxOptions.AFTER },
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
    <header className="App-header">
      <seds-checkbox
        label='Checkbox do Seds'
        items={itemCheckbox}
        disabled={false}
        required={true}
      ></seds-checkbox>
    </header>
  );
};

export default App;
