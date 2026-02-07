export default function Desktop() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#008080c0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '24px',
        fontFamily: 'MS Sans Serif, sans-serif',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        <p>🖥️</p>
        <p>Desktop loaded successfully!</p>
        <p style={{ fontSize: '14px', marginTop: '10px', opacity: 0.8 }}>
          (Desktop icons and taskbar coming in next steps)
        </p>
      </div>
    </div>
  );
}