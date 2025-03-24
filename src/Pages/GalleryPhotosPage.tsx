"use client";

import { ModalPhoto } from "@/components/ModalPhoto";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { Photo } from "@/types/Photo";
import { useState } from "react";

export default () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo.url);
    setShowModal(true);
  }


  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">Fotos Intergalacticas</h1>

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
    </div>
  );
}