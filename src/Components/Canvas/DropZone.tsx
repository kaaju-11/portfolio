import React from 'react';
import { useDrop } from 'react-dnd';
import { Box } from 'style/Education';

interface DropZoneProps {
  onDrop: (item: any, position: string, parentId: string | null) => void;
  position: string;
  parentId: string | null;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop, position, parentId }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item: any) => onDrop(item, position, parentId),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={drop}
      style={{
        border: '1px dashed gray',
        padding: 2,
        margin: 1,
        backgroundColor: isOver ? 'lightblue' : 'white',
        minHeight: '50px',
        textAlign: 'center',
      }}
    >
      <div>Drag and Drop</div>
    </Box>
  );
};

export default DropZone;
