import { IconBackward } from '@src/components/common/icons/IconBackward';

export const ButtonBackward = () => {
  return (
    <button
      className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-black hover:bg-gray-200'
      title='Backward'
    >
      <IconBackward />
    </button>
  );
};
