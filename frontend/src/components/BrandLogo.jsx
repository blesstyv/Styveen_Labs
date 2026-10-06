function BrandLogo({
  variant = 'full',
  className = '',
}) {
  const iconOnly = variant === 'icon'

  return (
    <div
      className={`brand-logo ${
        iconOnly
          ? 'brand-logo--icon'
          : 'brand-logo--full'
      } ${className}`}
    >
      <svg
        className="brand-logo__symbol"
        viewBox="0 0 120 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="styveenGradient"
            x1="15%"
            y1="10%"
            x2="90%"
            y2="90%"
          >
            <stop
              offset="0%"
              stopColor="#ed2b83"
            />

            <stop
              offset="48%"
              stopColor="#8c35c5"
            />

            <stop
              offset="100%"
              stopColor="#d0a32f"
            />
          </linearGradient>

          <linearGradient
            id="styveenSGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#f33591"
            />

            <stop
              offset="50%"
              stopColor="#9d36d1"
            />

            <stop
              offset="100%"
              stopColor="#e2af36"
            />
          </linearGradient>
        </defs>

        <polygon
          points="60,5 106,31 106,87 60,113 14,87 14,31"
          fill="#09090d"
          stroke="url(#styveenGradient)"
          strokeWidth="5"
        />

        <polygon
          points="60,15 97,36 97,82 60,103 23,82 23,36"
          fill="none"
          stroke="#24232a"
          strokeWidth="3"
        />

        <path
          d="
            M84 32
            H50
            C39 32 31 39 31 49
            C31 59 39 65 50 65
            H70
            C75 65 78 68 78 72
            C78 76 75 79 69 79
            H34
            L26 92
            H71
            C83 92 91 83 91 72
            C91 60 83 52 70 52
            H50
            C46 52 43 50 43 47
            C43 44 46 42 50 42
            H77
            Z
          "
          fill="url(#styveenSGradient)"
        />

        <circle
          cx="60"
          cy="19"
          r="3.5"
          fill="#d0a32f"
        />

        <circle
          cx="93"
          cy="40"
          r="3"
          fill="#ed2b83"
        />

        <circle
          cx="27"
          cy="79"
          r="3"
          fill="#792eb1"
        />

        <polygon
          points="48,119 72,119 60,134"
          fill="#d0a32f"
        />
      </svg>

      {!iconOnly && (
        <div className="brand-logo__text">
          <strong>STYVEEN</strong>
          <span>LABS</span>
        </div>
      )}
    </div>
  )
}

export default BrandLogo