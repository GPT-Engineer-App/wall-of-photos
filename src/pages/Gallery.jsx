import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Image } from "lucide-react";

const photos = [
  { id: 1, src: "/images/photo1.jpg", alt: "Photo 1" },
  { id: 2, src: "/images/photo2.jpg", alt: "Photo 2" },
  { id: 3, src: "/images/photo3.jpg", alt: "Photo 3" },
  // Add more photos as needed
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Dialog key={photo.id} onOpenChange={(isOpen) => !isOpen && setSelectedPhoto(null)}>
            <DialogTrigger asChild>
              <img
                src={photo.src}
                alt={photo.alt}
                className="cursor-pointer w-full h-auto object-cover"
                onClick={() => setSelectedPhoto(photo)}
              />
            </DialogTrigger>
            <DialogContent>
              {selectedPhoto && (
                <div className="flex flex-col items-center">
                  <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="w-full h-auto object-cover mb-4" />
                  <button onClick={() => setSelectedPhoto(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                    Close
                  </button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Gallery;