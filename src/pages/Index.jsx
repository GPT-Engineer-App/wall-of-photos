import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const photos = [
  { id: 1, src: "/images/photo1.jpg", alt: "Photo 1", description: "A beautiful sunrise over the mountains." },
  { id: 2, src: "/images/photo2.jpg", alt: "Photo 2", description: "A serene beach with crystal clear water." },
  { id: 3, src: "/images/photo3.jpg", alt: "Photo 3", description: "A bustling cityscape at night." },
  { id: 4, src: "/images/photo4.jpg", alt: "Photo 4", description: "A tranquil forest path in autumn." },
  { id: 5, src: "/images/photo5.jpg", alt: "Photo 5", description: "A picturesque village in the countryside." },
  { id: 6, src: "/images/photo6.jpg", alt: "Photo 6", description: "A stunning waterfall in a tropical rainforest." },
];

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Photo Wall</h1>
      <p className="text-lg mb-8">A place to share and view beautiful photos.</p>
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
              {selectedPhoto && selectedPhoto.id === photo.id && (
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

export default Index;