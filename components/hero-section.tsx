"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const trendingStyles = [
  "北欧风格",
  "现代极简",
  "工业风",
  "日式禅意",
  "波西米亚",
  "中古世纪",
  "沙漠风情",
  "法式优雅"
]

export function HeroSection() {
  const [prompt, setPrompt] = useState("")

  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-living-room.jpg"
          alt="温馨的客厅设计"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal text-foreground leading-tight text-balance">
            用AI打造
            <br />
            <span className="italic">你的梦想空间</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            描述你心中的理想房间，让AI为你实现独一无二的室内设计方案
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative glass-warm rounded-2xl shadow-soft-lg p-2 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-3 pl-4">
                  <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="描述你的梦想房间（如：极简工业风书房、沙漠风情浴室...）"
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/70 py-3 text-base"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="rounded-xl shadow-soft hover:shadow-soft-lg transition-all px-6 bg-primary hover:bg-primary/90 gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  生成设计
                </Button>
              </div>
            </div>
          </div>

          {/* Trending Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">热门风格：</span>
            {trendingStyles.map((style) => (
              <button
                key={style}
                onClick={() => setPrompt(style)}
                className="px-4 py-1.5 rounded-full bg-card/80 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card transition-all shadow-soft"
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
