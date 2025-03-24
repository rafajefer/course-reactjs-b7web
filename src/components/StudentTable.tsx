import { Student } from "@/types/Student";

type Props = {
    students: Student[];
}

export const StudentTable = ({ students }: Props) => {
    return (
        <table className="w-full border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800 text-white">
                    <th className="p-3">Nome</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Grade 1</th>
                    <th className="p-3">Grade 2</th>
                    <th className="p-3">Final Grade</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id} className="text-gray-800 bg-gray-400 border-b border-gray-600 hover:bg-gray-300">
                        <td className="p-3 flex items-center">
                            <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <div className="font-bold">{student.name}</div>
                                <div>{student.email}</div>
                            </div>
                        </td>
                        <td className="p-3">
                            <span className={`px-2 py-1 rounded-full ${student.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                {student.active ? 'Ativo' : 'Inativo'}
                            </span>
                        </td>
                        <td className="p-3">{student.grade1.toFixed(1)}</td>
                        <td className="p-3">{student.grade2.toFixed(1)}</td>
                        <td className="p-3 font-bold">{student.active ? ((student.grade1 + student.grade2) / 2).toFixed(1) : '--'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}