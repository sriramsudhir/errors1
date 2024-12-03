export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-center">
              Background Removal Tool
            </h1>
            <p className="text-center text-gray-600">
              Remove backgrounds from images instantly using AI
            </p>
            <div className="mt-8">
              <ImageProcessor />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}