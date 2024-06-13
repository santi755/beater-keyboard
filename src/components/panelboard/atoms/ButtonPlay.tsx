import { IconPlay } from '@src/components/common/icons/IconPlay';

export const ButtonPlay = () => {
  return (
    <button
      className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-black hover:bg-gray-200'
      title='Play'
    >
      <IconPlay />
    </button>
  );
};
