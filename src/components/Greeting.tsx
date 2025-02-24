const getCurrentTime = () => {
  const date = new Date();
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Sao_Paulo' });
}

const getGreeting = () => {
  const hour = Number(new Date().toLocaleString('pt-BR', { hour: '2-digit', timeZone: "America/Sao_Paulo",  }));
  if (hour >= 0 && hour < 12) {
    return 'Bom dia 😀';
  }
  if (hour >= 12 && hour < 18) {
    return 'Boa tarde 😄';
  }
  return 'Boa noite 🌙';
}

export const Exemplo1 = () => {
  const hour = new Date().getHours();
  return (
    <div className="text-white bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-8xl drop-shadow-xl">{getCurrentTime()}</h1>
      <p className="text-4xl font-bold drop-shadow-xl">{ getGreeting() }</p>
    </div>
  );
}

export const Exemplo2 = () => {
  const hour = new Date().getHours();
  return (
    <div className="text-white bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-8xl drop-shadow-xl">{getCurrentTime()}</h1>
      <p className="text-4xl font-bold drop-shadow-xl">
        {hour >= 0 && hour < 12 ? 'Bom dia 😀' : hour >= 12 && hour < 18 ? 'Boa tarde 😄' : 'Boa noite 🌙'}
      </p>
    </div>
  );
}

export const Exemplo3 = () => {
  const hour = new Date().getHours();
  return (
    <div className="text-white bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-8xl drop-shadow-xl">{getCurrentTime()}</h1>
      <p className="text-4xl font-bold drop-shadow-xl">
        {hour >= 0 && hour < 12 && 'Bom dia 😀'}
        {hour >= 12 && hour < 18 && 'Boa tarde 😄'}
        {hour >= 18 && hour <= 23 &&  'Boa noite 🌙'}
      </p>
    </div>
  );
}