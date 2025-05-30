import Link from "next/link";
import { ArrowUpRight, Check, Download, Music, Video } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />
      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            <Image className="mx-auto" src="/youtubemp3tomp4v1.png" alt="Logo" width={160} height={160} />
              YouTube{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                MP3/MP4
              </span>{" "}
              Downloader
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Download MP3 or MP4 files from YouTube videos with our intuitive
              interface for FREE.
            </p>

            <div className="flex sm:flex-row gap-4 justify-center items-center flex-col">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Start Downloading
                <Download className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-blue-500" />
                <span>MP3 Audio Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-blue-500" />
                <span>MP4 Video Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Easy to Use</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
