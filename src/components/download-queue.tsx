"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Trash2, Pause, Play, Music, Video } from "lucide-react";

type DownloadItem = {
  id: string;
  title: string;
  progress: number;
  status: "queued" | "downloading" | "paused" | "completed" | "error";
  type: "mp3" | "mp4";
  thumbnail: string;
};

type DownloadQueueProps = {
  initialItems?: DownloadItem[];
};

export default function DownloadQueue({
  initialItems = [],
}: DownloadQueueProps) {
  const [items, setItems] = useState<DownloadItem[]>(
    initialItems.length > 0
      ? initialItems
      : [
          {
            id: "1",
            title: "Sample YouTube Video",
            progress: 65,
            status: "downloading",
            type: "mp3",
            thumbnail:
              "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&q=80",
          },
          {
            id: "2",
            title: "Another Sample Video with a Longer Title to Test Wrapping",
            progress: 100,
            status: "completed",
            type: "mp4",
            thumbnail:
              "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=300&q=80",
          },
          {
            id: "3",
            title: "Queued Video Example",
            progress: 0,
            status: "queued",
            type: "mp3",
            thumbnail:
              "https://images.unsplash.com/photo-1611162616305-c69b3267e129?w=300&q=80",
          },
        ],
  );

  const togglePause = (id: string) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status:
              item.status === "paused"
                ? "downloading"
                : item.status === "downloading"
                  ? "paused"
                  : item.status,
          };
        }
        return item;
      }),
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <h3 className="font-semibold text-gray-900">
          Download Queue ({items.length})
        </h3>
      </div>

      <div className="divide-y divide-gray-100">
        {items.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No downloads in queue
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-gray-900 truncate">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1 ml-2">
                      {item.type === "mp3" ? (
                        <Music className="h-4 w-4 text-blue-500" />
                      ) : (
                        <Video className="h-4 w-4 text-purple-500" />
                      )}
                      <span className="text-xs font-medium uppercase">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <Progress value={item.progress} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs font-medium">
                        {item.status === "downloading" && "Downloading..."}
                        {item.status === "queued" && "Queued"}
                        {item.status === "paused" && "Paused"}
                        {item.status === "completed" && "Completed"}
                        {item.status === "error" && "Error"}
                      </span>
                      {item.status === "downloading" && (
                        <span className="text-xs text-gray-500 ml-2">
                          {item.progress}%
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {(item.status === "downloading" ||
                        item.status === "paused") && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => togglePause(item.id)}
                        >
                          {item.status === "paused" ? (
                            <Play className="h-4 w-4" />
                          ) : (
                            <Pause className="h-4 w-4" />
                          )}
                        </Button>
                      )}

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
