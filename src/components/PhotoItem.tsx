import { Photo } from "@/types/Photo";


type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({ photo, onClick }: Props) => {
    return (
        <div className="rounded-md overflow-hidden shadow-md cursor-pointer hover:opacity-85" onClick={onClick}>
            <img src={photo.url} alt="{photo.title}" className="w-full h-60 object-cover" />
        </div>
    );
}