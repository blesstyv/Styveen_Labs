import {
  Monitor,
} from 'lucide-react'

function ProductImage({
  pc,
  className = '',
}) {
  const image = pc.images?.[0]

  if (image) {
    return (
      <div className={`product-image-box ${className}`}>
        <img
          src={image}
          alt={pc.name}
        />
      </div>
    )
  }

  return (
    <div
      className={`product-image-box product-image-placeholder ${className}`}
    >
      <Monitor size={52} />

      <strong>
        {pc.name}
      </strong>

      <span>
        Imagen próximamente
      </span>
    </div>
  )
}

export default ProductImage