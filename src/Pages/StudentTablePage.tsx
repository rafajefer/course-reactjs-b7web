import { StudentTable } from '@/components/StudentTable';
import { students } from '@/data/students';

export default () => {
  return (
    <div className='w-full h-screen justify-center flex-col'>
      <h1 className="text-5xl py-5">Lista de Estudantes</h1>
      <div className="container max-w-5xl mx-auto">
        <StudentTable students={students} />
      </div>
    </div>
  );
}