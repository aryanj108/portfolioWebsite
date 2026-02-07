// Centered layout with navigation buttons
export function AboutContent() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '40px'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontFamily: 'serif',
        marginBottom: '10px',
        letterSpacing: '2px'
      }}>
        ARYAN JALOTA
      </h1>
      
      <p style={{ 
        fontSize: '14px',
        marginBottom: '30px',
        color: '#666'
      }}>
        SOFTWARE ENGINEER
      </p>
      
      {/* Navigation Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button style={{
          padding: '8px 16px',
          background: '#c0c0c0',
          border: '2px solid',
          borderColor: '#ffffff #000000 #000000 #ffffff',
          cursor: 'pointer',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <img src="/icons/user.svg" width="16" height="16" alt="" />
          About
        </button>
        
        <button style={{
          padding: '8px 16px',
          background: '#c0c0c0',
          border: '2px solid',
          borderColor: '#ffffff #000000 #000000 #ffffff',
          cursor: 'pointer',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <img src="/icons/folder.svg" width="16" height="16" alt="" />
          Experience
        </button>
        
        <button style={{
          padding: '8px 16px',
          background: '#c0c0c0',
          border: '2px solid',
          borderColor: '#ffffff #000000 #000000 #ffffff',
          cursor: 'pointer',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <img src="/icons/document.svg" width="16" height="16" alt="" />
          Projects
        </button>
        
        <button style={{
          padding: '8px 16px',
          background: '#c0c0c0',
          border: '2px solid',
          borderColor: '#ffffff #000000 #000000 #ffffff',
          cursor: 'pointer',
          fontFamily: 'MS Sans Serif, sans-serif',
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <img src="/icons/mail.svg" width="16" height="16" alt="" />
          Contact
        </button>
      </div>
    </div>
  );
}

export function ProjectsContent() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '20px'
    }}>
      <h2 style={{ marginBottom: '20px' }}>My Projects</h2>
      <p>Projects content goes here...</p>
    </div>
  );
}

export function ContactContent() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '20px'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Contact Me</h2>
      <p>Contact info goes here...</p>
    </div>
  );
}

export function ResumeContent() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '20px'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Resume</h2>
      <p>Resume content goes here...</p>
    </div>
  );
}

export function MyComputerContent() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '20px'
    }}>
      <h2 style={{ marginBottom: '20px' }}>My Computer</h2>
      <p>System info goes here...</p>
    </div>
  );
}