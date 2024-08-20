// import React from "react";
// import { useDrag} from "react-dnd";

// const SidebarItem: React.FC<{ item: any; disabled: boolean }> = ({
//   item,
//   disabled,
// }) => {
//   const [, drag] = useDrag(
//     () => ({
//       type: item.type,
//       item: { id: item.id, type: item.type, icon: item.icon },
//       canDrag: !disabled,
//     }),
//     [disabled]
//   );

//   return (
//     <div
//       ref={drag}
//       style={{
//         opacity: disabled ? 0.5 : 1,
//         margin: "4px",
//         padding: "8px",
//         border: "1px solid #ccc",
//         cursor: disabled ? "not-allowed" : "grab",
//         backgroundColor: disabled ? "#aca4b8" : "white",
//         display: "flex",
//         alignItems: "center",
//         gap: "5px",
//         borderRadius: "10px",
//         marginBottom:'12px'
//       }}
//       className={`sidebar-item ${disabled ? 'disabled' : 'enabled'}`}
//     >
//       {item.icon}
//       <div>{item.name}</div>
//     </div>
//   );
// };

// const Sidebar: React.FC<{
//   items: any[];
//   onDrop: (item: any) => void;
//   disabledItems: Set<number>;
// }> = ({ items, disabledItems }) => {

//   return (
//     <div style={{ width: "330px", padding: "16px", border: "1px solid #ccc" }}>
//       {/* <input type="text" placeholder="Search By Identities" style={{ width: '100%', marginBottom: '16px' }} /> */}
//       <h3 style={{ paddingBottom: "20px" }}>Content</h3>
//       {items.map((item) => (
//         <SidebarItem
//           key={item.id}
//           item={item}
//           disabled={disabledItems.has(item.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Sidebar;


// import React from "react";
// import { useDrag } from "react-dnd";

// const SidebarItem: React.FC<{ item: any; disabled: boolean;  onDrop: (item: any) => void; }> = ({
//   item,
//   disabled,
//   onDrop,
// }) => {
//   // const [, drag] = useDrag({
//   //   type: item.type,
//   //   item: { id: item?.id, type: item?.type, icon: item?.icon },
//   //   canDrag: !disabled,
//   // }, [disabled]);
//   const [, drag] = useDrag({
//     type: item.type,
//     item: { id: item?.id, type: item?.type, icon: item?.icon },
//     canDrag: !disabled,
//     end: (item, monitor) => {
//       // If item was dropped outside of the drop targets (columns), return it to the sidebar
//       if (!monitor.didDrop()) {
//         onDrop(item); // Notify parent component that item is dropped back to sidebar
//       }
//     }
//   });

//   return (
//     <div
//       ref={drag}
//       style={{
//         opacity: disabled ? 0.5 : 1,
//         margin: "4px",
//         padding: "8px",
//         border: "1px solid #ccc",
//         cursor: disabled ? "not-allowed" : "grab",
//         backgroundColor: disabled ? "#aca4b8" : "white",
//         display: "flex",
//         alignItems: "center",
//         gap: "5px",
//         borderRadius: "10px",
//         marginBottom: '12px'
//       }}
//       className={`sidebar-item ${disabled ? 'disabled' : 'enabled'}`}
//     >
//       {item.icon}
//       <div>{item.name}</div>
//     </div>
//   );
// };

// const Sidebar: React.FC<{
//   items: any[];
//   onDrop: (item: any) => void;
//   disabledItems: Set<number>;
// }> = ({ items,onDrop, disabledItems }) => {
//   return (
//     <div style={{ width: "330px", padding: "16px", border: "1px solid #ccc" }}>
//       <h3 style={{ paddingBottom: "20px" }}>Content</h3>
//       {items.map((item) => (
//         <SidebarItem
//           key={item.id}
//           item={item}
//           disabled={disabledItems.has(item.id)}
//           onDrop={onDrop}
//         />
//       ))}
//     </div>
//   );
// };

// export default Sidebar;


// import React from "react";
// import { useDrag} from "react-dnd";

// const SidebarItem: React.FC<{ item: any; disabled: boolean }> = ({
//   item,
//   disabled,
// }) => {
//   const [, drag] = useDrag(
//     () => ({
//       type: item.type,
//       item: { id: item.id, type: item.type, icon: item.icon },
//       canDrag: !disabled,
//     }),
//     [disabled]
//   );

//   return (
//     <div
//       ref={drag}
//       style={{
//         opacity: disabled ? 0.5 : 1,
//         margin: "4px",
//         padding: "8px",
//         border: "1px solid #ccc",
//         cursor: disabled ? "not-allowed" : "grab",
//         backgroundColor: disabled ? "#aca4b8" : "white",
//         display: "flex",
//         alignItems: "center",
//         gap: "5px",
//         borderRadius: "10px",
//         marginBottom:'12px'
//       }}
//       className={`sidebar-item ${disabled ? 'disabled' : 'enabled'}`}
//     >
//       {item.icon}
//       <div>{item.name}</div>
//     </div>
//   );
// };

// const Sidebar: React.FC<{
//   items: any[];
//   onDrop: (item: any) => void;
//   disabledItems: Set<number>;
// }> = ({ items, onDrop, disabledItems }) => {
//   //   const [, drop] = useDrop(() => ({
//   //     accept: ['digilocker', 'google', 'apple', 'phone'],
//   //     drop: (item) => onDrop(item),
//   //   }));

//   return (
//     <div style={{ width: "330px", padding: "16px", border: "1px solid #ccc" }}>
//       {/* <input type="text" placeholder="Search By Identities" style={{ width: '100%', marginBottom: '16px' }} /> */}
//       <h3 style={{ paddingBottom: "20px" }}>Content</h3>
//       {items.map((item) => (
//         <SidebarItem
//           key={item.id}
//           item={item}
//           disabled={disabledItems.has(item.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { useDrag } from 'react-dnd';

const items = [
  { id: 1, name: 'DigiLocker' },
  { id: 2, name: 'Google' },
  { id: 3, name: 'Apple ID' },
  // Add more items here
];

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {items.map((item) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const SidebarItem: React.FC<{ item: { id: number, name: string } }> = ({ item }) => {
  const [, drag] = useDrag(() => ({
    type: 'SIDEBAR_ITEM',
    item: { id: item.id, name: item.name }
  }));

  return (
    <div ref={drag} className="sidebar-item">
      {item.name}
    </div>
  );
};

export default Sidebar;
