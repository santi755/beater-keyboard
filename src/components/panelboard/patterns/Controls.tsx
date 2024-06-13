import { ButtonPlay } from '@src/components/panelboard/atoms/ButtonPlay';
import { ButtonBackward } from '@src/components/panelboard/atoms/ButtonBackward';
import { ButtonForward } from '@src/components/panelboard/atoms/ButtonForward';

export const Controls = () => {
  return (
    <div className='flex space-x-2'>
      <ButtonBackward />
      <ButtonPlay />
      <ButtonForward />
    </div>
  );
};
