
type Props = {
  rate: number;
}

export const Exemplo1 = ({ rate }: Props) => {
  const emojis = ['😡', '😠', '😐', '😊', '😍'];
  if (rate < 0) rate = 0;
  if (rate > 5) rate = 5;
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">{emojis[rate - 1]}</h1>
      <p className="text-2xl font-bold">Sua avaliação: {rate}</p>
      </div>
  );
}

export const Exemplo2 = ({ rate }: Props) => {
  if (rate < 0) rate = 0;
  if (rate > 5) rate = 5;
  const emojis = ['😐', '😐', '😐', '😐', '😐'].map((emoji, index) => index < Math.floor(rate) ? '😍' : '😐')
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <p className="text-2xl font-bold">Sua avaliação: {rate} - {emojis}</p>
      </div>
  );
}

export const Exemplo3 = ({ rate }: Props) => {
  if (rate < 0) rate = 0;
  if (rate > 5) rate = 5;
  
  const rateInt = Math.floor(rate);

  const start = '😍'.repeat(rateInt) + '😐'.repeat(5 - rateInt);
  return (
    <div className="w-full h-screen flex items-center justify-center text-2xl">
      <div className="bg-blue-700 text-white p-2 rounded-lg font-bold">{rate.toFixed(1)}</div>
      <p className="text-2xl font-bold ml-2">{start}</p>
    </div>
  );
}