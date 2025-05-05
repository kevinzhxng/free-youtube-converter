"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export default function YouTubeUrlInput() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    // This would be replaced with actual API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful URL processing
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow">
          <Input
            type="text"
            placeholder="Paste YouTube video URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full h-12"
          />
        </div>
        <Button
          type="submit"
          disabled={!url || isLoading}
          className="h-12 px-6"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
