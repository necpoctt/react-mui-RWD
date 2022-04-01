interface IconCardType {
  color: string
}

const IconCard = ({ color = '#6A6A6A' }: IconCardType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 20 21"
    width="20"
    height="21"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.34146 6.10352e-05C5.51304 6.10352e-05 4.84146 0.671634 4.84146 1.50006C4.84146 2.32849 5.51304 3.00006 6.34146 3.00006H16.7578V12.4234C16.7578 13.2518 17.4294 13.9234 18.2578 13.9234C19.0863 13.9234 19.7578 13.2518 19.7578 12.4234V2.50006C19.7578 1.11935 18.6386 6.10352e-05 17.2578 6.10352e-05H6.34146ZM2 4.9147H13.122C14.2265 4.9147 15.122 5.81013 15.122 6.9147V18.0366C15.122 19.1412 14.2265 20.0366 13.122 20.0366H2C0.895432 20.0366 0 19.1412 0 18.0366V6.9147C0 5.81013 0.89543 4.9147 2 4.9147Z"
      fill={color}
    />
  </svg>
);

export default IconCard;
