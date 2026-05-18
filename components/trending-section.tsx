"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const trendingStyles = [
  { id: 1, name: "北欧极简", count: 15234, image: "/images/gallery-1.jpg" },
  { id: 2, name: "工业复古", count: 12876, image: "/images/gallery-2.jpg" },
  { id: 3, name: "日式禅意", count: 11432, image: "/images/gallery-3.jpg" },
  { id: 4, name: "波西米亚", count: 10987, image: "/images/gallery-4.jpg" },
  { id: 5, name: "中古世纪", count: 9654, image: "/images/gallery-5.jpg" },
  { id: 6, name: "现代温馨", count: 8932, image: "/images/gallery-6.jpg" },
  { id: 7, name: "法式优雅", count: 8234, image: "/images/hero-living-room.jpg" },
  { id: 8, name: "沿海风情", count: 7654, image: "/images/gallery-1.jpg" },
  { id: 9, name: "乡村田园", count: 6987, image: "/images/gallery-3.jpg" },
  { id: 10, name: "艺术装饰", count: 6234, image: "/images/gallery-5.jpg" },
]

export function TrendingSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-20 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                今日热门风格
              </h2>
              <p className="text-muted-foreground text-sm mt-1">Top 10 设计风格排行</p>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-border/50 hover:border-primary/30"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-border/50 hover:border-primary/30"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trendingStyles.map((style, index) => (
            <div 
              key={style.id}
              className="flex-shrink-0 w-[260px] group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent"></div>
                  
                  {/* Rank Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-soft">
                      <span className="text-sm font-bold text-foreground">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-medium text-primary-foreground text-lg">{style.name}</h3>
                    <p className="text-primary-foreground/80 text-sm mt-1">
                      {style.count.toLocaleString()} 个设计
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
