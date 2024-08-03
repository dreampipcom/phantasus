/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightVerticalRightStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalRightStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalRightStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalRightStippleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
    >
      <g fill={color}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="memory-box-light-vertical-right-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M6 3H5V2H6M14 4H15V3H14M7 5H8V4H7M17 6H16V5H17M21 6H20V5H21M6 7H5V6H6M14 8H15V7H14M18 8H19V7H18M21 9H20V8H19V9H18V8H17V9H16V8H15V9H14V8H13V7H14V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21M7 9H8V8H7M6 12H5V11H6M7 15H8V14H7M17 15H18V14H17M6 17H5V16H6M20 17H19V16H20M14 18H15V17H14M7 19H8V18H7M17 20H16V19H17M6 21H5V20H6M8 22H7V21H8V20H7V19H6V18H7V17H8V16H7V15H6V14H7V13H8V12H7V11H8V10H7V9H6V8H7V7H8V6H7V5H6V4H7V3H8V2H7V1H6V0H7V1H8V0H9V1H8V2H9V3H8V4H9V5H8V6H9V7H8V8H9V9H8V10H9V11H8V12H9V13H8V14H9V15H8V16H9V17H8V18H9V19H8V20H9V21H8M12 22H10V0H12V10H22V12H12M16 22H15V21H14V22H13V21H14V20H13V19H14V18H13V17H14V16H13V15H14V14H13V13H14V14H15V13H16V14H17V13H18V14H19V13H20V14H21V13H22V14H21V15H22V16H21V15H20V14H19V15H18V16H17V15H16V14H15V15H14V16H15V17H16V18H15V19H14V20H15V21H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalRightStipple;
