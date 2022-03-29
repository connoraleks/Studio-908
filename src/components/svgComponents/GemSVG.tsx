import * as React from "react"

const SvgComponent = (props) => (
    <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 575.98 512.025"
        {...props}
    >
        <title>{"header-gem"}</title>
        <path
            d="M464 0H112a11.913 11.913 0 0 0-10 5.4L2 152.6a12.01 12.01 0 0 0 .7 14.2l276 340.8a11.985 11.985 0 0 0 18.6 0l276-340.8a12.018 12.018 0 0 0 .7-14.2L474.1 5.4A12.087 12.087 0 0 0 464 0Zm-19.3 48 63.3 96h-68.4l-51.7-96h56.8Zm-202.1 0h90.7l51.7 96H191Zm-111.3 0h56.8l-51.7 96H68Zm-43 144h51.4L208 352Zm102.9 0h193.6L288 435.3 191.2 192ZM368 352l68.2-160h51.4Z"
            transform="translate(-.01)"
            style={{
            fill: props.color,
            }}
        />
    </svg>
)

export default SvgComponent;
