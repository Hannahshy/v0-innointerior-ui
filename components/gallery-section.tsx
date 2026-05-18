"use client"

import Image from "next/image"
import { Heart, Bookmark, MessageCircle } from "lucide-react"
import { useState } from "react"

const galleryItems = [
  {
    id: 1,
    image: "/images/gallery-1.jpg",
    prompt: "北欧风卧室，自然光线，白色亚麻床品，极简装饰",
    style: "北欧风格",
    likes: 2834,
    saves: 892,
    comments: 156,
    author: "设计师小林",
    avatar: "L"
  },
  {
    id: 2,
    image: "/images/gallery-2.jpg",
    prompt: "工业风书房，裸露砖墙，胡桃木书桌，复古灯具",
    style: "工业风",
    likes: 3421,
    saves: 1203,
    comments: 234,
    author: "创意空间",
    avatar: "C"
  },
  {
    id: 3,
    image: "/images/gallery-3.jpg",
    prompt: "日式禅意厨房，原木橱柜，白色大理石台面，极简设计",
    style: "日式禅意",
    likes: 1956,
    saves: 678,
    comments: 98,
    author: "和风设计",
    avatar: "H"
  },
  {
    id: 4,
    image: "/images/gallery-4.jpg",
    prompt: "沙漠波西米亚风浴室，赤陶砖，拱形镜，藤编元素",
    style: "波西米亚",
    likes: 4102,
    saves: 1567,
    comments: 312,
    author: "自然之家",
    avatar: "Z"
  },
  {
    id: 5,
    image: "/images/gallery-5.jpg",
    prompt: "中古世纪餐厅，胡桃木餐桌，鼠尾草绿天鹅绒椅",
    style: "中古世纪",
    likes: 2567,
    saves: 934,
    comments: 178,
    author: "复古美学",
    avatar: "F"
  },
  {
    id: 6,
    image: "/images/gallery-6.jpg",
    prompt: "温馨阅读角落，内嵌窗座，落地书架，柔和灯光",
    style: "现代温馨",
    likes: 3789,
    saves: 1432,
    comments: 267,
    author: "舒适空间",
    avatar: "S"
  }
]

export function GallerySection() {
  const [likedItems, setLikedItems] = useState<number[]>([])
  const [savedItems, setSavedItems] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const toggleSave = (id: number) => {
    setSavedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <section id="explore" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            精选设计作品
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            探索社区中最受欢迎的AI生成室内设计方案
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className={`break-inside-avoid group ${index % 3 === 1 ? 'pt-8' : ''}`}
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all border border-border/50">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.prompt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-primary-foreground text-sm line-clamp-2">{item.prompt}</p>
                    </div>
                  </div>
                  {/* Style Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-sm font-medium text-foreground shadow-soft">
                      {item.style}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4">
                  {/* Author */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-secondary-foreground">
                      {item.avatar}
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.author}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => toggleLike(item.id)}
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Heart 
                        className={`w-5 h-5 ${likedItems.includes(item.id) ? 'fill-destructive text-destructive' : ''}`} 
                      />
                      <span className="text-sm">{likedItems.includes(item.id) ? item.likes + 1 : item.likes}</span>
                    </button>
                    <button 
                      onClick={() => toggleSave(item.id)}
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Bookmark 
                        className={`w-5 h-5 ${savedItems.includes(item.id) ? 'fill-accent text-accent' : ''}`} 
                      />
                      <span className="text-sm">{savedItems.includes(item.id) ? item.saves + 1 : item.saves}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{item.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full border border-primary/30 text-foreground hover:border-primary hover:bg-primary/5 transition-all font-medium shadow-soft">
            探索更多设计
          </button>
        </div>
      </div>
    </section>
  )
}
