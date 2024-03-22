import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import '@experian-design-system/seds-tags';
import '@experian-design-system/seds-tags/styles.css';
import { SedsChipItem } from '@experian-design-system/seds-tags';

const initialChipItems: SedsChipItem[] = [
  { color: 'success', iconName: 'alarm', remove: true, title: 'Urgent' },
  { color: 'warning', iconName: 'check_circle', remove: false, title: 'Approved' },
  { color: 'error', iconName: 'check_circle', remove: false, title: 'Error' },
  { color: 'default', iconName: 'check_circle', remove: false, title: 'Default' }
];

const Tags = () => {
  const [chipItems, setChipItems] = useState<SedsChipItem[]>(initialChipItems);
  const tagsRef = useRef<HTMLElement & { chipItem: string }>(null);

  useEffect(() => {
    const tagsElement = tagsRef.current;
    if (tagsElement) {
      tagsElement.chipItem = JSON.stringify(chipItems);
    }


  }, [chipItems, tagsRef]);

  return (
    <div className="App">
      <seds-tags ref={tagsRef} chipItem={JSON.stringify(chipItems)}></seds-tags>
    </div>
  );
};

export default Tags;
