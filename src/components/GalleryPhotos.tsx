import { ModalPhoto } from "@/components/ModalPhoto";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { Photo } from "@/types/Photo";
import { useState } from "react";

export const GalleryPhotos = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo.url);
    setShowModal(true);
  }

  return (
    <>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {photoList.map(photo => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
      </section>

      {showModal && (
        <ModalPhoto image={selectedPhoto} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}