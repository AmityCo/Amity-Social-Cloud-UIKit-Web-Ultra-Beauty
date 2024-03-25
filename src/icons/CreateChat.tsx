import React from 'react';

const CreateChat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path
      d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0
      4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2
      16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0
      16 7.2 16 16v288zM336 184h-56v-56c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v56h-56c-8.8
      0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h56v56c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2
      16-16v-56h56c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"
    />
  </svg>
);

export default CreateChat;