import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  Music,
  Video,
  List,
  Clock,
  Layers,
} from "lucide-react";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful YouTube Downloader
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download multiple videos simultaneously with our advanced batch
              processing technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Download className="w-6 h-6" />,
                title: "Easy Downloads",
                description: "Download videos with just a few clicks",
              },
              {
                icon: <Music className="w-6 h-6" />,
                title: "MP3 Audio",
                description:
                  "Extract high-quality audio from any YouTube video",
              },
              {
                icon: <Video className="w-6 h-6" />,
                title: "MP4 Video",
                description: "Download videos in various quality options",
              },
              {
                icon: <List className="w-6 h-6" />,
                title: "Simple Interface",
                description:
                  "User-friendly design for quick and easy downloads",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three simple steps to download your favorite YouTube content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter URL</h3>
              <p className="text-gray-600">
                Paste a YouTube video URL, playlist link, or channel URL
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Format</h3>
              <p className="text-gray-600">
                Select MP3 audio or MP4 video and your preferred quality
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Download</h3>
              <p className="text-gray-600">
                Start the download process and manage your queue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our YouTube downloader makes downloading simple and fast
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="text-blue-600 mt-1">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Simple Download Process
                </h3>
                <p className="text-gray-600">
                  Start, pause, or cancel downloads at any time with our
                  easy-to-use interface.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-blue-600 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Quality Selection
                </h3>
                <p className="text-gray-600">
                  Choose from various quality options for both audio and video
                  downloads to suit your needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-blue-600 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Intuitive Interface
                </h3>
                <p className="text-gray-600">
                  Clean, user-friendly design makes downloading content quick
                  and easy for everyone.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-blue-600 mt-1">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Audio Extraction</h3>
                <p className="text-gray-600">
                  Extract high-quality MP3 audio from any YouTube video with a
                  single click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your downloading needs. No hidden
              fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Download?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start downloading your favorite YouTube content in bulk today.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Now
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
