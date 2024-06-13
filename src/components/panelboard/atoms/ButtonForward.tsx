import { IconForward } from '@src/components/common/icons/IconForward';

export const ButtonForward = () => {
  return (
    <button
      className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-black hover:bg-gray-200'
      title='Forward'
    >
      <IconForward />
    </button>
  );
};
