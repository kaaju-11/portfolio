
// import React, { useState, useRef } from 'react';
// import { useDrag, useDrop } from 'react-dnd';

// const CanvasItem: React.FC<{ item: any, index: number, moveItem: (dragIndex: number, hoverIndex: number) => void, onRemove: (index: number) => void }> = ({ item, index, moveItem, onRemove }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [, drop] = useDrop({
//     accept: 'canvasItem',
//     hover: (draggedItem: any) => {
//       if (!ref.current) return;
//       const dragIndex = draggedItem.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) return;

//       moveItem(dragIndex, hoverIndex);
//       draggedItem.index = hoverIndex;
//     },
//   });

//   const [, drag] = useDrag({
//     type: 'canvasItem',
//     item: { id: item.id, index },
//   });

//   drag(drop(ref));

//   return (
//     <div style={{padding:"12px", border:'2px dotted #4d84d4', background:"#c2cdd742", borderRadius:"12px"}}>
//       <div ref={ref} style={{ width:"140px" , height:"76px", position: 'relative', padding: '16px' ,display:"flex", justifyContent:"center", alignItems: 'center',borderRadius:"12px", background: "#8daecc42" }} className="fade-enter">
//       {item.icon}
//       <button onClick={() => onRemove(index)} style={{ position: 'absolute', top: '4px', right: '4px', border: 'none', background: 'none', cursor: 'pointer', color:"blue" , fontWeight:"bold"}}>
//         ✕
//       </button>
//       </div>
//     </div>
//   );
// };

// const Canvas: React.FC<{ onRemoveFromCanvas: (item: any) => void, onItemDropped: (item: any) => void }> = ({ onRemoveFromCanvas, onItemDropped }) => {
//   const [droppedItems, setDroppedItems] = useState<any[]>([]);

//   const [, drop] = useDrop({
//     accept: ['digilocker', 'google', 'apple', 'phone'],
//     drop: (item) => handleDrop(item),
//   });

//   const handleDrop = (item: any) => {
//     if (item.from === 'canvas') return;
//     setDroppedItems((prevItems) => [...prevItems, item]);
//     onItemDropped(item);  // Notify item dropped
//   };

//   const handleRemove = (index: number) => {
//     const itemToRemove = droppedItems[index];
//     setDroppedItems((prevItems) => prevItems.filter((_, i) => i !== index));
//     onRemoveFromCanvas(itemToRemove);  // Remove from canvas
//   };

//   const moveItem = (dragIndex: number, hoverIndex: number) => {
//     const draggedItem = droppedItems[dragIndex];
//     const newItems = [...droppedItems];
//     newItems.splice(dragIndex, 1);
//     newItems.splice(hoverIndex, 0, draggedItem);
//     setDroppedItems(newItems);
//   };

//   return (
//     <div ref={drop} style={{ padding: '16px', border: '1px dashed #ccc', width:'100%', display:"flex", justifyContent:"center", alignItems:"center" }}>
//     <div style={{border:'1px solid gray', width:'100%', maxWidth:'1145px', height:"600px", padding:"30px", borderRadius:"14px"}}>
//     <h2>Funnel 2</h2>
//     <p>Please Select relevant Information sources</p>
//     <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', paddingTop:"50px"}}>
//       {droppedItems.map((item, index) => (
//         <React.Fragment key={index}>
//          <div>
//             <CanvasItem item={item} index={index} moveItem={moveItem} onRemove={handleRemove} />
//           </div>
//           {index < droppedItems.length - 1 && (
//             <div style={{ padding: '41px 6px',background:"#c2cdd742", color: '#4d84d4', textAlign: 'center', border:'2px dotted #00f', borderRadius:"12px", fontWeight:"bold" }}>And</div>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//     </div>
//   </div>
//   );
// };

// export default Canvas;

// import React, { useState, useRef } from 'react';
// import { useDrag, useDrop } from 'react-dnd';

// interface CanvasItemProps {
//   item: any;
//   index: number;
//   moveItem: (dragIndex: number, hoverIndex: number, columnId: string) => void;
//   onRemove: (index: number, columnId: string) => void;
// }

// const CanvasItem: React.FC<CanvasItemProps> = ({ item, index, moveItem, onRemove }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [, drop] = useDrop({
//     accept: 'canvasItem',
//     hover: (draggedItem: { index: number, columnId: string }) => {
//       if (!ref.current) return;
//       const dragIndex = draggedItem.index;
//       const hoverIndex = index;
//       const columnId = draggedItem.columnId;

//       if (dragIndex === hoverIndex) return;

//       moveItem(dragIndex, hoverIndex, columnId);
//       draggedItem.index = hoverIndex;
//     },
//   });

//   const [, drag] = useDrag({
//     type: 'canvasItem',
//     item: { id: item?.id, index, columnId: item?.columnId },
//   });

//   drag(drop(ref));

//   return (
//     <div style={{ padding: "12px", border: '2px dotted #4d84d4', background: "#c2cdd742", borderRadius: "12px" }}>
//       <div ref={ref} style={{ width: "140px", height: "76px", position: 'relative', padding: '16px', display: "flex", justifyContent: "center", alignItems: 'center', borderRadius: "12px", background: "#8daecc42" }} className="fade-enter">
//         {item?.icon}
//         <button onClick={() => onRemove(index, item?.columnId)} style={{ position: 'absolute', top: '4px', right: '4px', border: 'none', background: 'none', cursor: 'pointer', color: "blue", fontWeight: "bold" }}>
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// interface Column {
//   id: string;
//   items: any[];
// }

// interface CanvasProps {
//   onRemoveFromCanvas: (item: any) => void;
//   onItemDropped: (item: any) => void;
// }

// const Canvas: React.FC<CanvasProps> = ({ onRemoveFromCanvas, onItemDropped }) => {
//   const [columns, setColumns] = useState<Column[]>([]);

//   const [, drop] = useDrop({
//     accept: ['digilocker', 'google', 'apple', 'phone'],
//     drop: (item: any, monitor) => handleDrop(item, monitor),
//   });

//   const handleDrop = (item: any, monitor: any) => {
//     const clientOffset = monitor.getClientOffset();
//     let itemDropped = false;

//     if (clientOffset) {
//       const columnId = getColumnIdAtPoint(clientOffset);
//       if (columnId) {
//         setColumns((prevColumns) => {
//           const newColumns = prevColumns.map((col) => {
//             if (col.id === columnId) {
//               if (col.items.length < 2) { // Limit to 2 items
//                 itemDropped = true;
//                 return { ...col, items: [...col.items, { ...item, columnId }] };
//               }
//             }
//             return col;
//           });
//           return newColumns;
//         });
//       } else {
//         const newColumn = { id: `column-${columns.length}`, items: [{ ...item, columnId: `column-${columns.length}` }] };
//         setColumns((prevColumns) => [...prevColumns, newColumn]);
//         itemDropped = true;
//       }
//     } else {
//       const newColumn = { id: `column-${columns.length}`, items: [{ ...item, columnId: `column-${columns.length}` }] };
//       setColumns((prevColumns) => [...prevColumns, newColumn]);
//       itemDropped = true;
//     }

//     if (itemDropped) {
//       onItemDropped(item);
//     }
//   };

//   const getColumnIdAtPoint = (clientOffset: { x: number; y: number }) => {
//     const element = document.elementFromPoint(clientOffset.x, clientOffset.y);
//     if (element) {
//       const columnElement = element.closest('.column');
//       if (columnElement) {
//         return columnElement.getAttribute('data-column-id');
//       }
//     }
//     return null;
//   };

//   const handleRemove = (index: number, columnId: string) => {
//     const itemToRemove = columns.find((col) => col.id === columnId)?.items[index];
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           return { ...col, items: col.items.filter((_, i) => i !== index) };
//         }
//         return col;
//       }).filter(col => col.items.length > 0)
//     );
//     onRemoveFromCanvas(itemToRemove);
//   };

//   const moveItem = (dragIndex: number, hoverIndex: number, columnId: string) => {
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           const newItems = [...col.items];
//           const draggedItem = newItems[dragIndex];
//           newItems.splice(dragIndex, 1);
//           newItems.splice(hoverIndex, 0, draggedItem);
//           return { ...col, items: newItems };
//         }
//         return col;
//       })
//     );
//   };

//   const renderColumns = () => {
//     return columns.map((column, colIndex) => (
//       column.items.length > 0 && (
//         <div key={column.id} className="column" data-column-id={column.id} style={{padding:"5px"}}>
//           {column.items.map((item, index) => (
//             <React.Fragment key={item?.id}>
//               <CanvasItem item={item} index={index} moveItem={(dragIndex, hoverIndex) => moveItem(dragIndex, hoverIndex, column.id)} onRemove={(itemIndex) => handleRemove(itemIndex, column.id)} />
//               {index < column.items.length - 1 && (
//                 <div style={{ textAlign: 'center', padding: '4px 0', fontWeight: 'bold' }}>OR</div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       )
//     ));
//   };

//   const renderConnectors = () => {
//     const connectors: JSX.Element[] = [];
//     for (let i = 0; i < columns.length - 1; i++) {
//       if (columns[i].items.length > 0 && columns[i + 1].items.length > 0) {
//         connectors.push(
//           <div key={`and-${i}`} style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"150px", fontWeight:"bold" }}>
//             AND
//           </div>
//         );
//       }
//     }
//     return connectors;
//   };

//   const columnsWithItems = columns.filter(col => col.items.length > 0);

//   return (
//     <div ref={drop} style={{ padding: '16px', border: '1px dashed #ccc', width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
//     <div style={{ width: '100%', maxWidth: '1145px', height: "600px", padding: "30px", borderRadius: "14px" }}>
//       <h2>Funnel 2</h2>
//       <p>Please Select relevant Information sources</p>
//       <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start' }}>
//         {columnsWithItems.map((column, index) => (
//           <React.Fragment key={column.id}>
//             {renderColumns()[index]}
//             {index < columnsWithItems.length - 1 && renderConnectors()[index]}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Canvas;



// import React, { useState, useRef } from 'react';
// import { useDrag, useDrop } from 'react-dnd';

// interface CanvasItemProps {
//   item: any;
//   index: number;
//   moveItem: (dragIndex: number, hoverIndex: number) => void;
//   onRemove: (index: number) => void;
// }

// const CanvasItem: React.FC<CanvasItemProps> = ({ item, index, moveItem, onRemove }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [, drop] = useDrop({
//     accept: 'canvasItem',
//     hover: (draggedItem: { index: number }) => {
//       if (!ref.current) return;
//       const dragIndex = draggedItem.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) return;

//       moveItem(dragIndex, hoverIndex);
//       draggedItem.index = hoverIndex;
//     },
//   });

//   const [, drag] = useDrag({
//     type: 'canvasItem',
//     item: { id: item.id, index },
//   });

//   drag(drop(ref));

//   return (
//     <div style={{ padding: "12px", border: '2px dotted #4d84d4', background: "#c2cdd742", borderRadius: "12px" }}>
//       <div ref={ref} style={{ width: "140px", height: "76px", position: 'relative', padding: '16px', display: "flex", justifyContent: "center", alignItems: 'center', borderRadius: "12px", background: "#8daecc42" }} className="fade-enter">
//         {item.icon}
//         <button onClick={() => onRemove(index)} style={{ position: 'absolute', top: '4px', right: '4px', border: 'none', background: 'none', cursor: 'pointer', color: "blue", fontWeight: "bold" }}>
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// interface Column {
//   id: string;
//   items: any[];
// }

// interface CanvasProps {
//   onRemoveFromCanvas: (item: any) => void;
//   onItemDropped: (item: any) => void;
// }

// const Canvas: React.FC<CanvasProps> = ({ onRemoveFromCanvas, onItemDropped }) => {
//   const [columns, setColumns] = useState<Column[]>([]);

//   const [, drop] = useDrop({
//     accept: ['digilocker', 'google', 'apple', 'phone'],
//     drop: (item: any, monitor) => handleDrop(item, monitor),
//   });

//   const handleDrop = (item: any, monitor: any) => {
//     const clientOffset = monitor.getClientOffset();

//     if (clientOffset) {
//       const columnId = getColumnIdAtPoint(clientOffset);
//       if (columnId) {
//         setColumns((prevColumns) => {
//           const newColumns = prevColumns.map((col) => {
//             if (col.id === columnId) {
//               if (col.items.length < 2) { // Limit to 2 items
//                 return { ...col, items: [...col.items, item] };
//               } else {
//                 return col;
//               }
//             }
//             return col;
//           });
//           return newColumns;
//         });
//       } else {
//         const newColumn = { id: `column-${columns.length}`, items: [item] };
//         setColumns((prevColumns) => [...prevColumns, newColumn]);
//       }
//     } else {
//       const newColumn = { id: `column-${columns.length}`, items: [item] };
//       setColumns((prevColumns) => [...prevColumns, newColumn]);
//     }

//     onItemDropped(item);
//   };

//   const getColumnIdAtPoint = (clientOffset: { x: number; y: number }) => {
//     const element = document.elementFromPoint(clientOffset.x, clientOffset.y);
//     if (element) {
//       const columnElement = element.closest('.column');
//       if (columnElement) {
//         return columnElement.getAttribute('data-column-id');
//       }
//     }
//     return null;
//   };

//   const handleRemove = (index: number, columnId: string) => {
//     const itemToRemove = columns.find((col) => col.id === columnId)?.items[index];
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           return { ...col, items: col.items.filter((_, i) => i !== index) };
//         }
//         return col;
//       })
//     );
//     onRemoveFromCanvas(itemToRemove);
//   };

//   const moveItem = (dragIndex: number, hoverIndex: number, columnId: string) => {
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           const newItems = [...col.items];
//           const draggedItem = newItems[dragIndex];
//           newItems.splice(dragIndex, 1);
//           newItems.splice(hoverIndex, 0, draggedItem);
//           return { ...col, items: newItems };
//         }
//         return col;
//       })
//     );
//   };

//   const renderColumns = () => {
//     return columns.map((column, colIndex) => (
//       <div key={column.id} className="column" data-column-id={column.id} style={{ margin: '16px', padding: '16px', borderRadius: '8px' }}>
//         {column.items.map((item, index) => (
//           <React.Fragment key={item.id}>
//             <CanvasItem item={item} index={index} moveItem={(dragIndex, hoverIndex) => moveItem(dragIndex, hoverIndex, column.id)} onRemove={(itemIndex) => handleRemove(itemIndex, column.id)} />
//             {index < column.items.length - 1 && (
//               <div style={{ textAlign: 'center', padding: '4px 0', fontWeight: 'bold' }}>OR</div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     ));
//   };

//   const renderConnectors = () => {
//     const connectors: JSX.Element[] = [];
//     for (let i = 0; i < columns.length - 1; i++) {
//       if (columns[i].items.length > 0 && columns[i + 1].items.length > 0) {
//         connectors.push(
//           <div key={`and-${i}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px", fontWeight: "bold" }}>
//             AND
//           </div>
//         );
//       }
//     }
//     return connectors;
//   };

//   const columnsWithItems = columns.filter(col => col.items.length > 0);

//   return (
//     <div ref={drop} style={{ padding: '16px', border: '1px dashed #ccc', width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <div style={{ width: '100%', maxWidth: '1145px', height: "600px", padding: "30px", borderRadius: "14px" }}>
//         <h2>Funnel 2</h2>
//         <p>Please Select relevant Information sources</p>
//         <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start' }}>
//           {columnsWithItems.map((column, index) => (
//             <React.Fragment key={column.id}>
//               {renderColumns()[index]}
//               {index < columnsWithItems.length - 1 && renderConnectors()[index]}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Canvas;


// import React, { useState, useRef } from 'react';
// import { useDrag, useDrop } from 'react-dnd';

// interface CanvasItemProps {
//   item: any;
//   index: number;
//   columnId: string;
//   moveItem: (dragIndex: number, hoverIndex: number, columnId: string) => void;
//   onRemove: (index: number, columnId: string) => void;
// }

// const CanvasItem: React.FC<CanvasItemProps> = ({ item, index, columnId, moveItem, onRemove }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [, drop] = useDrop({
//     accept: 'canvasItem',
//     hover: (draggedItem: { index: number; columnId: string }) => {
//       if (!ref.current) return;
//       if (draggedItem.columnId !== columnId) return;

//       const dragIndex = draggedItem.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) return;

//       moveItem(dragIndex, hoverIndex, columnId);
//       draggedItem.index = hoverIndex;
//     },
//   });

//   const [, drag] = useDrag({
//     type: 'canvasItem',
//     item: { id: item.id, index, columnId },
//   });

//   drag(drop(ref));

//   return (
//     <div style={{ padding: "12px", border: '2px dotted #4d84d4', background: "#c2cdd742", borderRadius: "12px" }}>
//       <div ref={ref} style={{ width: "140px", height: "76px", position: 'relative', padding: '16px', display: "flex", justifyContent: "center", alignItems: 'center', borderRadius: "12px", background: "#8daecc42" }} className="fade-enter">
//         {item.icon}
//         <button onClick={() => onRemove(index, columnId)} style={{ position: 'absolute', top: '4px', right: '4px', border: 'none', background: 'none', cursor: 'pointer', color: "blue", fontWeight: "bold" }}>
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// interface Column {
//   id: string;
//   items: any[];
// }

// interface CanvasProps {
//   onRemoveFromCanvas: (item: any) => void;
//   onItemDropped: (item: any) => void;
// }

// const Canvas: React.FC<CanvasProps> = ({ onRemoveFromCanvas, onItemDropped }) => {
//   const [columns, setColumns] = useState<Column[]>([]);

//   const [, drop] = useDrop({
//     accept: ['digilocker', 'google', 'apple', 'phone', 'column'],
//     drop: (item: any, monitor) => handleDrop(item, monitor),
//   });

//   const handleDrop = (item: any, monitor: any) => {
//     const clientOffset = monitor.getClientOffset();

//     if (monitor.getItemType() === 'column') {
//       return;
//     }

//     if (clientOffset) {
//       const columnId = getColumnIdAtPoint(clientOffset);
//       if (columnId) {
//         setColumns((prevColumns) => {
//           const newColumns = prevColumns.map((col) => {
//             if (col.id === columnId) {
//               if (col.items.length < 2) { // Limit to 2 items
//                 return { ...col, items: [...col.items, item] };
//               } else {
//                 return col;
//               }
//             }
//             return col;
//           });
//           return newColumns;
//         });
//       } else {
//         const newColumn = { id: `column-${columns.length}`, items: [item] };
//         setColumns((prevColumns) => [...prevColumns, newColumn]);
//       }
//     } else {
//       const newColumn = { id: `column-${columns.length}`, items: [item] };
//       setColumns((prevColumns) => [...prevColumns, newColumn]);
//     }

//     onItemDropped(item);
//   };

//   const getColumnIdAtPoint = (clientOffset: { x: number; y: number }) => {
//     const element = document.elementFromPoint(clientOffset.x, clientOffset.y);
//     if (element) {
//       const columnElement = element.closest('.column');
//       if (columnElement) {
//         return columnElement.getAttribute('data-column-id');
//       }
//     }
//     return null;
//   };

//   const handleRemove = (index: number, columnId: string) => {
//     const itemToRemove = columns.find((col) => col.id === columnId)?.items[index];
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           return { ...col, items: col.items.filter((_, i) => i !== index) };
//         }
//         return col;
//       })
//     );
//     onRemoveFromCanvas(itemToRemove);
//   };

//   const moveItem = (dragIndex: number, hoverIndex: number, columnId: string) => {
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           const newItems = [...col.items];
//           const draggedItem = newItems[dragIndex];
//           newItems.splice(dragIndex, 1);
//           newItems.splice(hoverIndex, 0, draggedItem);
//           return { ...col, items: newItems };
//         }
//         return col;
//       })
//     );
//   };

//   const moveColumn = (dragIndex: number, hoverIndex: number) => {
//     setColumns((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const draggedColumn = newColumns[dragIndex];
//       newColumns.splice(dragIndex, 1);
//       newColumns.splice(hoverIndex, 0, draggedColumn);
//       return newColumns;
//     });
//   };

//   const renderColumns = () => {
//     return columns.map((column, index) => (
//       <ColumnComponent
//         key={column.id}
//         column={column}
//         index={index}
//         moveColumn={moveColumn}
//         moveItem={moveItem}
//         onRemove={handleRemove}
//       />
//     ));
//   };

//   const renderConnectors = () => {
//     const connectors: JSX.Element[] = [];
//     for (let i = 0; i < columns.length - 1; i++) {
//       if (columns[i].items.length > 0 && columns[i + 1].items.length > 0) {
//         connectors.push(
//           <div key={`and-${i}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px", fontWeight: "bold" }}>
//             AND
//           </div>
//         );
//       }
//     }
//     return connectors;
//   };

//   const columnsWithItems = columns.filter(col => col.items.length > 0);

//   return (
//     <div ref={drop} style={{ padding: '16px', border: '1px dashed #ccc', width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <div style={{ width: '100%', maxWidth: '1145px', height: "600px", padding: "30px", borderRadius: "14px" }}>
//         <h2>Funnel 2</h2>
//         <p>Please Select relevant Information sources</p>
//         <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start' }}>
//           {columnsWithItems.map((column, index) => (
//             <React.Fragment key={column.id}>
//               {renderColumns()[index]}
//               {index < columnsWithItems.length - 1 && renderConnectors()[index]}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ColumnComponent: React.FC<{
//   column: Column;
//   index: number;
//   moveColumn: (dragIndex: number, hoverIndex: number) => void;
//   moveItem: (dragIndex: number, hoverIndex: number, columnId: string) => void;
//   onRemove: (index: number, columnId: string) => void;
// }> = ({ column, index, moveColumn, moveItem, onRemove }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [, drop] = useDrop({
//     accept: 'column',
//     hover: (draggedColumn: { index: number }) => {
//       if (!ref.current) return;

//       const dragIndex = draggedColumn.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) return;

//       moveColumn(dragIndex, hoverIndex);
//       draggedColumn.index = hoverIndex;
//     },
//   });

//   const [, drag] = useDrag({
//     type: 'column',
//     item: { id: column.id, index },
//   });

//   drag(drop(ref));

//   return (
//     <div ref={ref} className="column" data-column-id={column.id} style={{ margin: '16px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', background: '#f5f5f5' }}>
//       {column.items.map((item, itemIndex) => (
//         <React.Fragment key={item.id}>
//           <CanvasItem item={item} index={itemIndex} columnId={column.id} moveItem={moveItem} onRemove={onRemove} />
//           {itemIndex < column.items.length - 1 && <div style={{ textAlign: 'center', fontWeight: 'bold' }}>OR</div>}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default Canvas;


// import React, { useState, useRef } from 'react';
// import { useDrag, useDrop } from 'react-dnd';

// interface CanvasItemProps {
//   item: any;
//   index: number;
//   columnId: string;
//   moveItem: (dragIndex: number, hoverIndex: number, columnId: string) => void;
//   onRemove: (index: number, columnId: string) => void;
// }

// const CanvasItem: React.FC<CanvasItemProps> = ({ item, index, columnId, moveItem, onRemove }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [, drop] = useDrop({
//     accept: 'canvasItem',
//     hover: (draggedItem: { index: number; columnId: string }) => {
//       if (!ref.current) return;
//       if (draggedItem.columnId !== columnId) return;

//       const dragIndex = draggedItem.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) return;

//       moveItem(dragIndex, hoverIndex, columnId);
//       draggedItem.index = hoverIndex;
//     },
//   });

//   const [, drag] = useDrag({
//     type: 'canvasItem',
//     item: { id: item.id, index, columnId },
//   });

//   drag(drop(ref));

//   return (
//     <div style={{ padding: "12px", border: '2px dotted #4d84d4', background: "#c2cdd742", borderRadius: "12px" }}>
//       <div ref={ref} style={{ width: "140px", height: "76px", position: 'relative', padding: '16px', display: "flex", justifyContent: "center", alignItems: 'center', borderRadius: "12px", background: "#8daecc42" }} className="fade-enter">
//         {item.icon}
//         <button onClick={() => onRemove(index, columnId)} style={{ position: 'absolute', top: '4px', right: '4px', border: 'none', background: 'none', cursor: 'pointer', color: "blue", fontWeight: "bold" }}>
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// interface Column {
//   id: string;
//   items: any[];
// }

// interface CanvasProps {
//   onRemoveFromCanvas: (item: any) => void;
//   onItemDropped: (item: any) => void;
// }


// const Canvas: React.FC<CanvasProps> = ({ onRemoveFromCanvas, onItemDropped }) => {
//   const [columns, setColumns] = useState<Column[]>([]);

//   const [, drop] = useDrop({
//     accept: ['digilocker', 'google', 'apple', 'phone', 'column'],
//     drop: (item: any, monitor) => handleDrop(item, monitor),
//   });

  // const handleDrop = (item: any, monitor: any) => {
  //   const clientOffset = monitor.getClientOffset();

  //   if (monitor.getItemType() === 'column') {
  //     return;
  //   }

  //   if (clientOffset) {
  //     const columnId = getColumnIdAtPoint(clientOffset);
  //     if (columnId) {
  //       setColumns((prevColumns) => {
  //         const newColumns = prevColumns.map((col) => {
  //           if (col.id === columnId) {
  //             if (col.items.length < 2) { // Limit to 2 items
  //               return { ...col, items: [...col.items, item] };
  //             } else {
  //               return col;
  //             }
  //           }
  //           return col;
  //         });
  //         return newColumns;
  //       });
  //     } else {
  //       const newColumn = { id: `column-${columns.length}`, items: [item] };
  //       setColumns((prevColumns) => [...prevColumns, newColumn]);
  //     }
  //   } else {
  //     const newColumn = { id: `column-${columns.length}`, items: [item] };
  //     setColumns((prevColumns) => [...prevColumns, newColumn]);
  //   }

  //   onItemDropped(item);
  // };

//   const getColumnIdAtPoint = (clientOffset: { x: number; y: number }) => {
//     const element = document.elementFromPoint(clientOffset.x, clientOffset.y);
//     if (element) {
//       const columnElement = element.closest('.column');
//       if (columnElement) {
//         return columnElement.getAttribute('data-column-id');
//       }
//     }
//     return null;
//   };

//   const handleRemove = (index: number, columnId: string) => {
//     const itemToRemove = columns.find((col) => col.id === columnId)?.items[index];
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           return { ...col, items: col.items.filter((_, i) => i !== index) };
//         }
//         return col;
//       })
//     );
//     onRemoveFromCanvas(itemToRemove);
//   };

//   const moveItem = (dragIndex: number, hoverIndex: number, columnId: string) => {
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           const newItems = [...col.items];
//           const draggedItem = newItems[dragIndex];
//           newItems.splice(dragIndex, 1);
//           newItems.splice(hoverIndex, 0, draggedItem);
//           return { ...col, items: newItems };
//         }
//         return col;
//       })
//     );
//   };

//   const moveColumn = (dragIndex: number, hoverIndex: number) => {
//     setColumns((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const draggedColumn = newColumns[dragIndex];
//       newColumns.splice(dragIndex, 1);
//       newColumns.splice(hoverIndex, 0, draggedColumn);
//       return newColumns;
//     });
//   };

//   const renderColumns = () => {
//     return columns.map((column, index) => (
//       <ColumnComponent
//         key={column.id}
//         column={column}
//         index={index}
//         moveColumn={moveColumn}
//         moveItem={moveItem}
//         onRemove={handleRemove}
//       />
//     ));
//   };

//   const renderConnectors = () => {
//     const connectors: JSX.Element[] = [];
//     for (let i = 0; i < columns.length - 1; i++) {
//       if (columns[i].items.length > 0 && columns[i + 1].items.length > 0) {
//         connectors.push(
//           <div key={`and-${i}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px", fontWeight: "bold" }}>
//             AND
//           </div>
//         );
//       }
//     }
//     return connectors;
//   };

//   const columnsWithItems = columns.filter(col => col.items.length > 0);

//   return (
//     <div ref={drop} style={{ padding: '16px', border: '1px dashed #ccc', width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <div style={{ width: '100%', maxWidth: '1145px', height: "600px", padding: "30px", borderRadius: "14px" }}>
//         <h2>Funnel 2</h2>
//         <p>Please Select relevant Information sources</p>
//         <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start' }}>
//           {columnsWithItems.map((column, index) => (
//             <React.Fragment key={column.id}>
//               {renderColumns()[index]}
//               {index < columnsWithItems.length - 1 && renderConnectors()[index]}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ColumnComponent: React.FC<{
//   column: Column;
//   index: number;
//   moveColumn: (dragIndex: number, hoverIndex: number) => void;
//   moveItem: (dragIndex: number, hoverIndex: number, columnId: string) => void;
//   onRemove: (index: number, columnId: string) => void;
// }> = ({ column, index, moveColumn, moveItem, onRemove }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [, drop] = useDrop({
//     accept: 'column',
//     hover: (draggedColumn: { index: number }) => {
//       if (!ref.current) return;

//       const dragIndex = draggedColumn.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) return;

//       moveColumn(dragIndex, hoverIndex);
//       draggedColumn.index = hoverIndex;
//     },
//   });

//   const [, drag] = useDrag({
//     type: 'column',
//     item: { id: column.id, index },
//   });

//   drag(drop(ref));

//   return (
//     <div ref={ref} className="column" data-column-id={column.id} style={{ margin: '16px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', background: '#f5f5f5' }}>
//       {column.items.map((item, itemIndex) => (
//         <React.Fragment key={item.id}>
//           <CanvasItem item={item} index={itemIndex} columnId={column.id} moveItem={moveItem} onRemove={onRemove} />
//           {itemIndex < column.items.length - 1 && <div style={{ textAlign: 'center', fontWeight: 'bold' }}>OR</div>}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default Canvas



// interface CanvasItemProps {
//   item: any;
//   index: number;
//   columnId: string;
//   moveItem: (dragIndex: number, hoverIndex: number, columnId: string) => void;
//   onRemove: (index: number, columnId: string) => void;
// }

// const CanvasItem: React.FC<CanvasItemProps> = ({ item, index, columnId, moveItem, onRemove }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [, drop] = useDrop({
//     accept: 'canvasItem',
//     hover: (draggedItem: { index: number; columnId: string }) => {
//       if (!ref.current) return;
//       if (draggedItem.columnId !== columnId) return;

//       const dragIndex = draggedItem.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) return;

//       moveItem(dragIndex, hoverIndex, columnId);
//       draggedItem.index = hoverIndex;
//     },
//   });

//   const [, drag] = useDrag({
//     type: 'canvasItem',
//     item: { id: item.id, index, columnId },
//   });

//   drag(drop(ref));

//   return (
//     <div style={{ padding: "12px", border: '2px dotted #4d84d4', background: "#c2cdd742", borderRadius: "12px" }}>
//       <div ref={ref} style={{ width: "140px", height: "76px", position: 'relative', padding: '16px', display: "flex", justifyContent: "center", alignItems: 'center', borderRadius: "12px", background: "#8daecc42" }} className="fade-enter">
//         {item.icon}
//         <button onClick={() => onRemove(index, columnId)} style={{ position: 'absolute', top: '4px', right: '4px', border: 'none', background: 'none', cursor: 'pointer', color: "blue", fontWeight: "bold" }}>
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// interface Column {
//   id: string;
//   items: any[];
// }

// interface CanvasProps {
//   onRemoveFromCanvas: (item: any) => void;
//   onItemDropped: (item: any) => void;
// }

// // Canvas component
// const Canvas: React.FC<CanvasProps> = ({ onRemoveFromCanvas, onItemDropped }) => {
//   const [columns, setColumns] = useState<Column[]>([]);

//   const [, drop] = useDrop({
//     accept: ['digilocker', 'google', 'apple', 'phone', 'column'],
//     drop: (item: any, monitor) => handleDrop(item, monitor),
//   });

//   const handleDrop = (item: any, monitor: any) => {
//     const clientOffset = monitor.getClientOffset();

//     if (monitor.getItemType() === 'column') {
//       return;
//     }

//     if (clientOffset) {
//       const columnId = getColumnIdAtPoint(clientOffset);
//       if (columnId) {
//         setColumns((prevColumns) => {
//           const newColumns = prevColumns.map((col) => {
//             if (col.id === columnId) {
//               if (col.items.length < 2) {
//                 return { ...col, items: [...col.items, item] };
//               } else {
//                 return col;
//               }
//             }
//             return col;
//           });
//           return newColumns;
//         });
//       } else {
//         const newColumn = { id: `column-${columns.length}`, items: [item] };
//         setColumns((prevColumns) => [...prevColumns, newColumn]);
//       }
//     } else {
//       const newColumn = { id: `column-${columns.length}`, items: [item] };
//       setColumns((prevColumns) => [...prevColumns, newColumn]);
//     }

//     onItemDropped(item);
//     fetchDataAndLog();
//   };

//   const fetchDataAndLog = async () => {
//     const apiData = {
//       "type": "AND",
//       "elements": [
//         {
//           "type": "OR",
//           "elements": [
//             {
//               "type": "RULE",
//               "rule": "digilocker",
//               "available": true
//             },
//             {
//               "type": "RULE",
//               "rule": "microsoft",
//               "available": true
//             }
//           ]
//         },
//         {
//           "type": "AND",
//           "elements": [
//             {
//               "type": "RULE",
//               "rule": "google",
//               "available": true
//             },
//             {
//               "type": "RULE",
//               "rule": "phone",
//               "available": true
//             }
//           ]
//         }
//       ]
//     };
//     console.log("Fetched Data:", apiData);
//     const mappedData = mapData(apiData);
//     console.log("Mapped Data:", mappedData);
//   };

//   const mapData = (data: any) => {
//     if (data.type === 'RULE') {
//       return data.rule;
//     }
//     if (data.elements && data.elements.length > 0) {
//       return data.elements.map(mapData);
//     }
//     return data;
//   };

//   const getColumnIdAtPoint = (clientOffset: { x: number; y: number }) => {
//     const element = document.elementFromPoint(clientOffset.x, clientOffset.y);
//     if (element) {
//       const columnElement = element.closest('.column');
//       if (columnElement) {
//         return columnElement.getAttribute('data-column-id');
//       }
//     }
//     return null;
//   };

//   const handleRemove = (index: number, columnId: string) => {
//     const itemToRemove = columns.find((col) => col.id === columnId)?.items[index];
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           return { ...col, items: col.items.filter((_, i) => i !== index) };
//         }
//         return col;
//       })
//     );
//     onRemoveFromCanvas(itemToRemove);
//   };

//   const moveItem = (dragIndex: number, hoverIndex: number, columnId: string) => {
//     setColumns((prevColumns) =>
//       prevColumns.map((col) => {
//         if (col.id === columnId) {
//           const newItems = [...col.items];
//           const draggedItem = newItems[dragIndex];
//           newItems.splice(dragIndex, 1);
//           newItems.splice(hoverIndex, 0, draggedItem);
//           return { ...col, items: newItems };
//         }
//         return col;
//       })
//     );
//   };

//   const moveColumn = (dragIndex: number, hoverIndex: number) => {
//     setColumns((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const draggedColumn = newColumns[dragIndex];
//       newColumns.splice(dragIndex, 1);
//       newColumns.splice(hoverIndex, 0, draggedColumn);
//       return newColumns;
//     });
//   };

//   const renderColumns = () => {
//     return columns.map((column, index) => (
//       <ColumnComponent
//         key={column.id}
//         column={column}
//         index={index}
//         moveColumn={moveColumn}
//         moveItem={moveItem}
//         onRemove={handleRemove}
//       />
//     ));
//   };

//   const renderConnectors = () => {
//     const connectors: JSX.Element[] = [];
//     for (let i = 0; i < columns.length - 1; i++) {
//       if (columns[i].items.length > 0 && columns[i + 1].items.length > 0) {
//         connectors.push(
//           <div key={`and-${i}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px", fontWeight: "bold" }}>
//             AND
//           </div>
//         );
//       }
//     }
//     return connectors;
//   };

//   const columnsWithItems = columns.filter(col => col.items.length > 0);

//   return (
//     <div ref={drop} style={{ padding: '16px', border: '1px dashed #ccc', width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <div style={{ width: '100%', maxWidth: '1145px', height: "600px", padding: "30px", borderRadius: "14px" }}>
//         <h2>Funnel 2</h2>
//         <p>Please Select relevant Information sources</p>
//         <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start' }}>
//           {columnsWithItems.map((column, index) => (
//             <React.Fragment key={column.id}>
//               {renderColumns()[index]}
//               {index < columnsWithItems.length - 1 && renderConnectors()[index]}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// interface ColumnComponentProps {
//   column: Column;
//   index: number;
//   moveColumn: (dragIndex: number, hoverIndex: number) => void;
//   moveItem: (dragIndex: number, hoverIndex: number, columnId: string) => void;
//   onRemove: (index: number, columnId: string) => void;
// }

// // ColumnComponent component
// const ColumnComponent: React.FC<ColumnComponentProps> = ({ column, index, moveColumn, moveItem, onRemove }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const [, drop] = useDrop({
//     accept: 'column',
//     hover: (draggedColumn: { index: number }) => {
//       if (!ref.current) return;

//       const dragIndex = draggedColumn.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) return;

//       moveColumn(dragIndex, hoverIndex);
//       draggedColumn.index = hoverIndex;
//     },
//   });

//   const [, drag] = useDrag({
//     type: 'column',
//     item: { id: column.id, index },
//   });

//   drag(drop(ref));

//   return (
//     <div ref={ref} className="column" data-column-id={column.id} style={{ margin: '16px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', background: '#f5f5f5' }}>
//       {column.items.map((item, itemIndex) => (
//         <React.Fragment key={item.id}>
//           <CanvasItem item={item} index={itemIndex} columnId={column.id} moveItem={moveItem} onRemove={onRemove} />
//           {itemIndex < column.items.length - 1 && <div style={{ textAlign: 'center', fontWeight: 'bold' }}>OR</div>}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default Canvas;


import DraggableItem from 'Components/CanvasItem';
import React from 'react';
import { useDrop } from 'react-dnd';

const Canvas: React.FC = () => {
  const [items, setItems] = React.useState<Array<{ id: number, name: string, parentId: number | null, dropType: 'root' | 'left' | 'bottom' }>>([]);

  const [, drop] = useDrop(() => ({
    accept: 'SIDEBAR_ITEM',
    drop: (item: { id: number, name: string }) => addNewItem(item),
  }));

  const addNewItem = (item: { id: number, name: string }, parentId: number | null = null, dropType: 'root' | 'left' | 'bottom' = 'root') => {
    setItems((prevItems) => [...prevItems, { ...item, parentId, dropType }]);
  };

  return (
    <div ref={drop} className="canvas">
      {items
        .filter(item => item.parentId === null && item.dropType === 'root')
        .map((item, index) => (
          <DraggableItem key={index} item={item} items={items} addNewItem={addNewItem} />
      ))}
    </div>
  );
};

export default Canvas;
