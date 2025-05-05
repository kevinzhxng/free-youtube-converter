"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Download, Clock, Music, Video } from "lucide-react";

type VideoItem = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  author: string;
};

type VideoResultsProps = {
  type?: "video" | "playlist" | "channel";
  items?: VideoItem[];
  onAddToQueue?: (selectedIds: string[], format: string) => void;
};

export default function VideoResults({
  type = "playlist",
  items = [],
  onAddToQueue,
}: VideoResultsProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [format, setFormat] = useState<string>("mp3");

  // Sample data for demonstration
  const sampleItems: VideoItem[] = [
    {
      id: "1",
      title: "Introduction to Web Development",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80",
      duration: "12:34",
      author: "Code Academy",
    },
    {
      id: "2",
      title: "JavaScript Fundamentals",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&q=80",
      duration: "18:22",
      author: "Code Academy",
    },
    {
      id: "3",
      title: "CSS Layouts and Flexbox",
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=300&q=80",
      duration: "15:45",
      author: "Code Academy",
    },
    {
      id: "4",
      title: "Responsive Design Principles",
      thumbnail:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&q=80",
      duration: "21:18",
      author: "Code Academy",
    },
  ];

  const displayItems = items.length > 0 ? items : sampleItems;

  const handleSelectAll = () => {
    if (selectedIds.length === displayItems.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(displayItems.map((item) => item.id));
    }
  };

  const handleSelectItem = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleAddToQueue = () => {
    if (selectedIds.length > 0 && onAddToQueue) {
      onAddToQueue(selectedIds, format);
    }
  };

  const getTitle = () => {
    switch (type) {
      case "video":
        return "Video Information";
      case "playlist":
        return "Playlist Videos";
      case "channel":
        return "Channel Videos";
      default:
        return "Search Results";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
        <h3 className="font-semibold text-gray-900">
          {getTitle()} ({displayItems.length})
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="select-all"
              checked={
                selectedIds.length === displayItems.length &&
                displayItems.length > 0
              }
              onCheckedChange={handleSelectAll}
            />
            <label htmlFor="select-all" className="text-sm font-medium">
              Select All
            </label>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {displayItems.map((item) => (
          <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex gap-4">
              <div className="flex items-center">
                <Checkbox
                  id={`item-${item.id}`}
                  checked={selectedIds.includes(item.id)}
                  onCheckedChange={() => handleSelectItem(item.id)}
                />
              </div>

              <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow">
                <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">
                  {item.title}
                </h4>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{item.author}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={`${format === "mp3" ? "bg-blue-50 border-blue-200 text-blue-700" : ""}`}
              onClick={() => setFormat("mp3")}
            >
              <Music className="h-4 w-4 mr-1" />
              MP3
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`${format === "mp4" ? "bg-blue-50 border-blue-200 text-blue-700" : ""}`}
              onClick={() => setFormat("mp4")}
            >
              <Video className="h-4 w-4 mr-1" />
              MP4
            </Button>
          </div>
        </div>

        <Button
          onClick={handleAddToQueue}
          disabled={selectedIds.length === 0}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download
        </Button>
      </div>
    </div>
  );
}
