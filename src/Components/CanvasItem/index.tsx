import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableItem: React.FC<{ item: { id: number, name: string, parentId: number | null, dropType: 'root' | 'left' | 'bottom' }, items: any[], addNewItem: (item: { id: number, name: string }, parentId: number, dropType: 'root' | 'left' | 'bottom') => void }> = ({ item, items, addNewItem }) => {
  const [, drag] = useDrag(() => ({
    type: 'CANVAS_ITEM',
    item: { id: item.id, name: item.name },
  }));

  const [, dropLeft] = useDrop(() => ({
    accept: 'SIDEBAR_ITEM',
    drop: (droppedItem: { id: number, name: string }) => addNewItem(droppedItem, item.id, 'left'),
  }));

  const [, dropBottom] = useDrop(() => ({
    accept: 'SIDEBAR_ITEM',
    drop: (droppedItem: { id: number, name: string }) => addNewItem(droppedItem, item.id, 'bottom'),
  }));

  return (
    <div ref={drag} className="canvas-item">
      {item.name}
      <div ref={dropLeft} className="drop-box left"></div>
      <div ref={dropBottom} className="drop-box bottom"></div>
      {items
        .filter(childItem => childItem.parentId === item.id)
        .map((childItem, index) => (
          <DraggableItem key={index} item={childItem} items={items} addNewItem={addNewItem} />
        ))}
    </div>
  );
};

export default DraggableItem;
