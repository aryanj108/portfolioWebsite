import { useState, useEffect } from "react";
import DesktopIcon from "./DesktopIcon";

export default function Desktop() {
  const [time, setTime] = useState(new Date());
  
  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const handleIconOpen = (iconName) => {
    alert(`You opened: ${iconName}\n\nWindows coming in the next step!`);
  };
  
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#008080',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Desktop Icons */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <DesktopIcon 
          icon="/icons/folderLogo.svg" 
          label="My Computer" 
          onDoubleClick={() => handleIconOpen('My Computer')}
        />
        <DesktopIcon 
          icon="/icons/folderLogo.svg" 
          label="Projects" 
          onDoubleClick={() => handleIconOpen('Projects')}
        />
        <DesktopIcon 
          icon="/icons/folderLogo.svg" 
          label="About Me" 
          onDoubleClick={() => handleIconOpen('About Me')}
        />
        <DesktopIcon 
          icon="/icons/folderLogo.svg" 
          label="Contact" 
          onDoubleClick={() => handleIconOpen('Contact')}
        />
        <DesktopIcon 
          icon="/icons/folderLogo.svg" 
          label="Resume" 
          onDoubleClick={() => handleIconOpen('Resume')}
        />
      </div>
      
      {/* Taskbar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40px',
        background: '#c0c0c0',
        border: '2px solid',
        borderColor: '#ffffff #000000 #000000 #ffffff',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5px',
        gap: '5px',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.2)'
      }}>
        
        {/* Start Button */}
        <button style={{
        height: '34px',
        padding: '0 6px',
        background: '#c0c0c0',
        border: '2px solid',
        borderColor: '#ffffff #000000 #000000 #ffffff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '3px',
        fontFamily: 'MS Sans Serif, sans-serif',
        fontWeight: 'bold',
        fontSize: '11px'
        }}
        onMouseDown={(e) => {
        e.currentTarget.style.borderColor = '#000000 #ffffff #ffffff #000000';
        e.currentTarget.style.padding = '1px 7px 0 9px';
        }}
        onMouseUp={(e) => {
        e.currentTarget.style.borderColor = '#ffffff #000000 #000000 #ffffff';
        e.currentTarget.style.padding = '0 8px';
        }}
        onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#ffffff #000000 #000000 #ffffff';
        e.currentTarget.style.padding = '0 8px';
        }}
        >
        <img src="/icons/windowsLogo.svg" alt="Windows" width="14" height="14" />
        Start
        </button>

        {/* Empty space for open windows */}
        <div style={{ flex: 1 }}></div>

        {/* System Tray with Clock */}
        <div style={{
        height: '28px',
        padding: '0 10px',
        background: '#c0c0c0',
        border: '1px solid',
        borderColor: '#808080 #ffffff #ffffff #808080',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '11px',
        fontFamily: 'MS Sans Serif, sans-serif'
        }}>
        <img src="/icons/volumeLogo.svg" alt="Volume" width="16" height="16" />
        <span>
            {time.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
            })}
        </span>
        </div>
      </div>
      
    </div>
  );
}