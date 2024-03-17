import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import '@experian-design-system/seds-tags';
import { SedsChipItem } from '@experian-design-system/seds-tags';

const initialChipItems: SedsChipItem[] = [
  { color: 'success', iconName: 'alarm', remove: true, title: 'Urgent' },
  { color: 'warning', iconName: 'check_circle', remove: false, title: 'Approved' },
  { color: 'error', iconName: 'check_circle', remove: false, title: 'Error' }
];

const chipItemsString = JSON.stringify(initialChipItems);

const TagsApp = () => {
  const [chipItems, setChipItems] = useState<SedsChipItem[]>(initialChipItems);

  const tagsRef = useRef<HTMLElement & { chipItem: string }>(null);

useEffect(() => {
  const tagsElement = tagsRef.current;

  const handleChipItemChange = (event: Event) => {
    const chips = event as CustomEvent;
    console.log('chipItemChange event fired:', chips.detail);
  };

  return () => {
    tagsElement?.removeEventListener('chipItemChange', handleChipItemChange as EventListener);
  };

}, []);

  return (
    <div className="App">
      <seds-tags ref={tagsRef} chipItem={chipItemsString}></seds-tags>
    </div>
  );
};

export default TagsApp;