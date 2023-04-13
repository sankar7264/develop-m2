import React from 'react'

function YoutubeIcon(props) {
  const { color, height, width } = props
  return (
    <svg
      width={width || '21'}
      height={height || '17'}
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.293 3.02193C20.75 4.80393 20.75 8.52393 20.75 8.52393C20.75 8.52393 20.75 12.2439 20.293 14.0259C20.039 15.0109 19.296 15.7859 18.355 16.0479C16.646 16.5239 10.75 16.5239 10.75 16.5239C10.75 16.5239 4.857 16.5239 3.145 16.0479C2.2 15.7819 1.458 15.0079 1.207 14.0259C0.75 12.2439 0.75 8.52393 0.75 8.52393C0.75 8.52393 0.75 4.80393 1.207 3.02193C1.461 2.03693 2.204 1.26193 3.145 0.999926C4.857 0.523926 10.75 0.523926 10.75 0.523926C10.75 0.523926 16.646 0.523926 18.355 0.999926C19.3 1.26593 20.042 2.03993 20.293 3.02193ZM8.75 12.0239L14.75 8.52393L8.75 5.02393V12.0239Z"
        fill={color || '#FEFCF8'}
      />
    </svg>
  )
}

export default YoutubeIcon
