"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const communityPosts = [
  {
    id: 1,
    author: "设计师小林",
    avatar: "林",
    time: "2小时前",
    content: "终于完成了这个北欧风客厅的改造！从最初的想法到AI生成，再到实际装修，整个过程充满乐趣。分享给大家看看效果如何～",
    image: "/images/gallery-1.jpg",
    likes: 432,
    comments: 56,
    shares: 23,
    tags: ["北欧风格", "客厅改造", "AI设计"]
  },
  {
    id: 2,
    author: "自然之家",
    avatar: "自",
    time: "5小时前",
    content: "这个波西米亚风格的浴室真的太治愈了！每次进去都感觉像在度假 🌿",
    image: "/images/gallery-4.jpg",
    likes: 678,
    comments: 89,
    shares: 45,
    tags: ["波西米亚", "浴室设计", "治愈系"]
  },
  {
    id: 3,
    author: "和风设计",
    avatar: "和",
    time: "昨天",
    content: "分享一下我最近在研究的日式禅意厨房设计。极简的线条、原木的质感，让做饭变成一种享受。",
    image: "/images/gallery-3.jpg",
    likes: 523,
    comments: 67,
    shares: 34,
    tags: ["日式风格", "厨房", "极简设计"]
  }
]

export function CommunitySection() {
  const [activeTab, setActiveTab] = useState<'featured' | 'following'>('featured')
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLikedPosts(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <section id="community" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            设计社区
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            与志同道合的设计爱好者分享灵感、交流心得
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'featured' 
                ? 'bg-primary text-primary-foreground shadow-soft' 
                : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            精选内容
          </button>
          <button
            onClick={() => setActiveTab('following')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'following' 
                ? 'bg-primary text-primary-foreground shadow-soft' 
                : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            我的关注
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all border border-border/50"
            >
              {/* Post Header */}
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg font-serif text-muted-foreground">
                    {post.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{post.author}</h4>
                    <p className="text-xs text-muted-foreground">{post.time}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              {/* Post Content */}
              <div className="px-5 pb-4">
                <p className="text-foreground text-sm leading-relaxed">{post.content}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.content}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Post Actions */}
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1.5 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-destructive text-destructive' : ''}`}
                    />
                    <span className="text-sm">{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                </div>
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">{post.shares}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-10 text-center">
          <Button variant="outline" className="rounded-full px-8">
            查看更多动态
          </Button>
        </div>
      </div>
    </section>
  )
}
