import { useEffect, useState } from "react";

export default function Window({ title, children, onClose, onMinimize, isMinimized, style, zIndex, onFocus }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  // Random initial position
  useEffect(() => {
    if (!style?.left && !style?.top) {
      setPosition({
        x: Math.random() * 200 + 50,
        y: Math.random() * 100 + 50
      });
    }
  }, []);
  
  const handleMouseDown = (e) => {
    if (e.target.closest('.title-bar')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
      onFocus();
    }
  };
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);
  
  if (isMinimized) return null;
  
  return (
    <div
      onClick={onFocus}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: style?.width || '600px',
        height: '500px',
        background: '#c0c0c0',
        border: '3px solid',
        borderColor: '#dfdfdf #000000 #000000 #dfdfdf',
        boxShadow: '3px 3px 0 rgba(0,0,0,0.3)',
        zIndex: zIndex,
        display: 'flex',
        flexDirection: 'column',
        ...style
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Title Bar */}
      <div className="title-bar" style={{
        background: 'linear-gradient(to right, #000080, #1084d0)',
        color: 'white',
        padding: '2px 4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'move',
        userSelect: 'none',
        fontFamily: 'MS Sans Serif, sans-serif',
        fontSize: '11px',
        fontWeight: 'bold',
        height: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <img src="/icons/windowsLogo.svg" alt="" width="14" height="14" style={{ marginTop: '1px' }} />
          <span>{title}</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2px' }}>
          {/* Minimize Button */}
          <button onClick={onMinimize} style={{
            width: '16px',
            height: '14px',
            padding: 0,
            background: '#c0c0c0',
            border: '1px solid',
            borderColor: '#ffffff #000000 #000000 #ffffff',
            cursor: 'pointer',
            fontSize: '8px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>_</button>
          
          {/* Maximize Button */}
          <button style={{
            width: '16px',
            height: '14px',
            padding: 0,
            background: '#c0c0c0',
            border: '1px solid',
            borderColor: '#ffffff #000000 #000000 #ffffff',
            cursor: 'pointer',
            fontSize: '9px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>□</button>
          
          {/* Close Button */}
          <button onClick={onClose} style={{
            width: '16px',
            height: '14px',
            padding: 0,
            background: '#c0c0c0',
            border: '1px solid',
            borderColor: '#ffffff #000000 #000000 #ffffff',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>×</button>
        </div>
      </div>
      
      {/* Inner Border */}
      <div style={{
        flex: 1,
        border: '2px solid',
        borderColor: '#808080 #ffffff #ffffff #808080',
        margin: '2px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Window Content */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          background: '#ffffff',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: '11px'
        }}>
          {children}
        </div>
        
        {/* Bottom Status Bar */}
        <div style={{
          height: '20px',
          background: '#c0c0c0',
          borderTop: '1px solid #808080',
          display: 'flex',
          alignItems: 'center',
          padding: '0 4px',
          fontSize: '10px',
          fontFamily: 'MS Sans Serif, sans-serif'
        }}>
          <div style={{
            flex: 1,
            border: '1px solid',
            borderColor: '#808080 #ffffff #ffffff #808080',
            padding: '1px 3px',
            marginRight: '2px'
          }}></div>
          
          <div style={{
            width: '100px',
            border: '1px solid',
            borderColor: '#808080 #ffffff #ffffff #808080',
            padding: '1px 3px'
          }}></div>
        </div>
      </div>
    </div>
  );
}