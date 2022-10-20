import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItemDetails, updateActiveImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailItemDetails
  const onClickImage = () => {
    updateActiveImageId(id)
  }

  const activeClassName = isActive ? 'active-image' : ''

  return (
    <div>
      <li className="thumnail-list-item">
        <button
          className={`button ${activeClassName}`}
          type="button"
          onClick={onClickImage}
        >
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </div>
  )
}

export default ThumbnailItem
