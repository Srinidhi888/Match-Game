import './index.css'

const TabItem = props => {
  const {details, onSelect, tab} = props
  const {tabId, displayText} = details
  const onStatus = () => {
    onSelect(tabId)
  }
  const colorClass = tab === tabId ? 'btn-1' : ''

  return (
    <li>
      <button className={`btn ${colorClass}`} onClick={onStatus}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
