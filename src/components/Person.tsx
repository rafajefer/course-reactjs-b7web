export const Person = () => {
  const name: string = 'Elon Musk';
  const avatar: string = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
  
  return (
    <>
      <h1>Name: {name}</h1>
      <img src={avatar} alt={name} className="w-40" />
      <ul>
        <li>CEO da Tesla</li>
        <li>CEO da SpaceX</li>
        <li>CEO da Neuralink</li>
        <li>CEO da Boring Company</li>
      </ul>
    </>
  );
}