import NihLogo from '../images/nih-logo.svg'

export const NihRadxLogo = () => {
  return (
    <a style={{ display: 'block', position: 'relative' }}>
      <img src={ NihLogo } alt="NIH Logo" height="68" />
      <div style={{
        display: 'inline-block',
        width: '180px',
        fontSize: '1rem',
        color: '#63656a',
        position: 'absolute',
        top: '44px',
        left: '103px',
        fontWeight: 'bold',
        fontStyle: 'italic',
      }}>COVID RADx Data Hub</div>
    </a>
  )
}
