import DesktopIcon from "./DesktopIcon";

export default function Desktop() {
  
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
        icon="../icons/folder.svg" 
        label="My Computer" 
        onDoubleClick={() => handleIconOpen('My Computer')}
        />
        <DesktopIcon 
          icon="../icons/folder.svg" 
          label="Projects" 
          onDoubleClick={() => handleIconOpen('Projects')}
        />
        <DesktopIcon 
          icon="../icons/folder.svg" 
          label="About Me" 
          onDoubleClick={() => handleIconOpen('About Me')}
        />
        <DesktopIcon 
          icon="../icons/folder.svg" 
          label="Contact" 
          onDoubleClick={() => handleIconOpen('Contact')}
        />
        <DesktopIcon 
          icon="../icons/folder.svg" 
          label="Resume" 
          onDoubleClick={() => handleIconOpen('Resume')}
        />
      </div>
      
    </div>
  );
}