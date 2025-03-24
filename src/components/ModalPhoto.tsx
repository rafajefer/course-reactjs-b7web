
type Props = {
    image: string;
    onClose: () => void;
}

export const ModalPhoto = ({ image, onClose }: Props) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <img src={image} alt="Foto" className="w-full h-96 object-cover" />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4" onClick={onClose}>Fechar</button>
          </div>
        </div>
    );
}