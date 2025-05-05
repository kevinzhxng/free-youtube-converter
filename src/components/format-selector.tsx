"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Music, Video } from "lucide-react";

type FormatSelectorProps = {
  onFormatChange?: (format: string, quality: string) => void;
};

export default function FormatSelector({
  onFormatChange,
}: FormatSelectorProps) {
  const [format, setFormat] = useState("mp3");
  const [audioQuality, setAudioQuality] = useState("high");
  const [videoQuality, setVideoQuality] = useState("720p");

  const handleFormatChange = (value: string) => {
    setFormat(value);
    const quality = value === "mp3" ? audioQuality : videoQuality;
    onFormatChange?.(value, quality);
  };

  const handleAudioQualityChange = (value: string) => {
    setAudioQuality(value);
    if (format === "mp3") {
      onFormatChange?.(format, value);
    }
  };

  const handleVideoQualityChange = (value: string) => {
    setVideoQuality(value);
    if (format === "mp4") {
      onFormatChange?.(format, value);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Select Format</h3>

      <Tabs
        defaultValue="mp3"
        value={format}
        onValueChange={handleFormatChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="mp3" className="flex items-center gap-2">
            <Music className="h-4 w-4" />
            MP3 Audio
          </TabsTrigger>
          <TabsTrigger value="mp4" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            MP4 Video
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mp3" className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-3">Audio Quality</h4>
            <RadioGroup
              defaultValue="high"
              value={audioQuality}
              onValueChange={handleAudioQualityChange}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="audio-low" />
                <Label htmlFor="audio-low">Low (64 kbps)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="audio-medium" />
                <Label htmlFor="audio-medium">Medium (128 kbps)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="audio-high" />
                <Label htmlFor="audio-high">High (256 kbps)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="best" id="audio-best" />
                <Label htmlFor="audio-best">Best (320 kbps)</Label>
              </div>
            </RadioGroup>
          </div>
        </TabsContent>

        <TabsContent value="mp4" className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-3">Video Quality</h4>
            <RadioGroup
              defaultValue="720p"
              value={videoQuality}
              onValueChange={handleVideoQualityChange}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="360p" id="video-360p" />
                <Label htmlFor="video-360p">360p</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="480p" id="video-480p" />
                <Label htmlFor="video-480p">480p</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="720p" id="video-720p" />
                <Label htmlFor="video-720p">720p HD</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1080p" id="video-1080p" />
                <Label htmlFor="video-1080p">1080p Full HD</Label>
              </div>
            </RadioGroup>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
