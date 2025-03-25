import { Exemplo3 as EmojiRating } from '@/components/EmojiRating';


export const EmojiRatingPage = () => {
    return (
      <div className='w-full h-screen flex items-center justify-center flex-col'>
        <EmojiRating rate={1.5} />
        <EmojiRating rate={2} />
        <EmojiRating rate={3} />
        <EmojiRating rate={4} />
        <EmojiRating rate={5} />
      </div>
    );
}