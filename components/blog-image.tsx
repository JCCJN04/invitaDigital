"use client"

import { Sparkles, Heart, FileText, TrendingUp, Eye, Stars } from "lucide-react"
import { useEffect, useState } from "react"

interface BlogImageProps {
  category: string
  title: string
  className?: string
}

const categoryStyles: Record<string, { 
  gradient: string
  secondaryGradient: string
  icon: typeof Sparkles
  emoji: string
  particles: string[]
}> = {
  "Tendencias": {
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    secondaryGradient: "from-violet-400/20 via-purple-400/20 to-fuchsia-400/20",
    icon: TrendingUp,
    emoji: "✨",
    particles: ["🌟", "💫", "✨"]
  },
  "Consejos": {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    secondaryGradient: "from-emerald-400/20 via-teal-400/20 to-cyan-400/20",
    icon: Eye,
    emoji: "💡",
    particles: ["💡", "🔍", "💭"]
  },
  "Bodas": {
    gradient: "from-rose-400 via-pink-500 to-red-400",
    secondaryGradient: "from-rose-300/20 via-pink-300/20 to-red-300/20",
    icon: Heart,
    emoji: "💒",
    particles: ["💖", "👰", "💐"]
  },
  "XV Años": {
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    secondaryGradient: "from-amber-300/20 via-orange-300/20 to-rose-300/20",
    icon: Stars,
    emoji: "👑",
    particles: ["👑", "🎉", "✨"]
  },
  "default": {
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    secondaryGradient: "from-blue-400/20 via-indigo-400/20 to-purple-400/20",
    icon: FileText,
    emoji: "📝",
    particles: ["📝", "📖", "📰"]
  }
}

export function BlogImage({ category, title, className = "" }: BlogImageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const style = categoryStyles[category] || categoryStyles["default"]
  const Icon = style.icon

  useEffect(() => {
    // Effect is ready but not used in this implementation
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    })
  }

  return (
    <div 
      className={`group relative w-full h-full bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center p-6 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main decorative circles */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/15 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-700" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000" />
        
        {/* Interactive light effect */}
        <div 
          className="absolute w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Animated particles */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-${500 + i * 100} animate-bounce`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 200}ms`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className={`absolute inset-0 bg-gradient-to-t ${style.secondaryGradient} group-hover:opacity-50 transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Enhanced Icon Container */}
        <div className="relative mb-4 group-hover:scale-110 transition-transform duration-500">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-lg animate-pulse" />
          <div className="relative bg-white/25 backdrop-blur-md rounded-full p-5 border border-white/30 shadow-lg">
            <Icon className="w-10 h-10 text-white drop-shadow-lg group-hover:rotate-12 transition-transform duration-500" />
          </div>
          
          {/* Floating secondary icons */}
          <div className="absolute -top-2 -right-2 text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
            {style.particles[0]}
          </div>
          <div className="absolute -bottom-1 -left-3 text-sm opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce" style={{ animationDelay: '200ms' }}>
            {style.particles[1]}
          </div>
        </div>
        
        {/* Enhanced Emoji */}
        <div className="relative mb-4">
          <span className="relative z-10 text-5xl group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl">
            {style.emoji}
          </span>
          <div className="absolute inset-0 text-5xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-500">
            {style.emoji}
          </div>
        </div>
        
        {/* Enhanced Category Label */}
        <div className="relative text-center">
          <span className="relative z-10 text-white font-bold text-base uppercase tracking-wider drop-shadow-lg group-hover:text-white/95 transition-colors duration-300">
            {category}
          </span>
          
          {/* Glowing underline effect */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-500 rounded-full" />
        </div>

        {/* Subtle title preview on hover */}
        {isHovered && (
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full">
            <p className="text-white/80 text-xs text-center font-medium px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg truncate animate-fade-in">
              {title}
            </p>
          </div>
        )}
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -skew-x-12 opacity-0 group-hover:opacity-30 transition-all duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full" />
    </div>
  )
}
