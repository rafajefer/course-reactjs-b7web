import { Exemplo3 } from '@/components/EmojiRating';

export default () => {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <Exemplo3 rate={1.5} />
      <Exemplo3 rate={2} />
      <Exemplo3 rate={3} />
      <Exemplo3 rate={4} />
      <Exemplo3 rate={5} />
    </div>
  );
}