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
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Photo Wall</h1>
      <p className="text-lg mb-8">A place to share and view beautiful photos.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden">
            <img src={photo.src} alt={photo.alt} className="w-full h-auto object-cover" />
            <CardHeader>
              <CardTitle>{photo.alt}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{photo.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;