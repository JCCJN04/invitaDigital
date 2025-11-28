"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

interface ShareButtonProps {
  title: string
  text: string
  variant?: "floating" | "inline"
}

export function ShareButton({ title, text, variant = "inline" }: ShareButtonProps) {
  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title,
        text,
        url: window.location.href
      })
    } else if (typeof window !== "undefined") {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("¡Link copiado al portapapeles!")
    }
  }

  if (variant === "floating") {
    return (
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-20">
        <button 
          onClick={handleShare}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    )
  }

  return (
    <Button 
      variant="outline" 
      className="gap-2 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all group"
      onClick={handleShare}
    >
      <Share2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
      Compartir artículo
    </Button>
  )
}
