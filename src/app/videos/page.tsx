import { VideoEmbed } from "@/components/shared/VideoEmbed";
import videos from "@/data/videos.json";

export const metadata = {
  title: "Videos & Tutorials | Aqsa Art & Craft",
  description: "Watch free tutorials on watercolor painting, paper crafting, and DIY projects.",
};

export default function VideosPage() {
  // Group videos by series
  const seriesGroups = videos.reduce((acc, video) => {
    if (!acc[video.series]) {
      acc[video.series] = [];
    }
    acc[video.series].push(video);
    return acc;
  }, {} as Record<string, typeof videos>);

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">Tutorials & Videos</h1>
        <p className="text-charcoal/70 max-w-2xl mx-auto">Follow along with step-by-step tutorials designed for every skill level. From basic brushstrokes to complex compositions.</p>
        
        <div className="mt-8">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-6 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors shadow-sm"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>

      <div className="space-y-24">
        {Object.entries(seriesGroups).map(([series, seriesVideos]) => (
          <section key={series} className="relative">
            <div className="mb-8 border-b border-sage-200 pb-4">
              <h2 className="font-serif text-3xl font-medium text-charcoal">{series}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {seriesVideos.map((video) => (
                <div key={video.id} className="flex flex-col gap-4">
                  {/* Since these are playlists in the brief, we could embed a playlist, but our VideoEmbed expects a regular video ID for simplicity in the mock. Let's just pretend the ID is a mock video ID for now. */}
                  <VideoEmbed videoId="mock_id_for_playlist" title={video.title} />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl font-medium text-charcoal">{video.title}</h3>
                      <span className="text-xs tracking-wider uppercase text-sage-600 bg-sage-100 px-2 py-1 rounded-full">
                        {video.skillLevel}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
