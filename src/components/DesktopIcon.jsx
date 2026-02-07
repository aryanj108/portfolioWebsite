export default function DesktopIcon({ icon, label, onDoubleClick }) {
  return (
    <div
      onDoubleClick={onDoubleClick}
      style={{
        width: '70px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      <img 
        src={icon} 
        alt={label}
        style={{
          width: '40px',
          height: '40px',
          marginBottom: '5px'
        }}
      />
      <div style={{
        color: 'white',
        fontSize: '11px',
        fontFamily: 'MS Sans Serif, sans-serif',
        textAlign: 'center',
        textShadow: '1px 1px 2px black',
        wordBreak: 'break-word'
      }}>
        {label}
      </div>
    </div>
  );
}