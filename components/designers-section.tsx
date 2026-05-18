"use client"

import { useState } from "react"
import { UserPlus, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const topDesigners = [
  { id: 1, name: "设计师小林", avatar: "林", followers: 12453, designs: 234, specialty: "北欧风格" },
  { id: 2, name: "创意空间", avatar: "创", followers: 10876, designs: 189, specialty: "工业复古" },
  { id: 3, name: "和风设计", avatar: "和", followers: 9432, designs: 156, specialty: "日式禅意" },
  { id: 4, name: "自然之家", avatar: "自", followers: 8765, designs: 201, specialty: "波西米亚" },
  { id: 5, name: "复古美学", avatar: "复", followers: 7543, designs: 145, specialty: "中古世纪" },
  { id: 6, name: "舒适空间", avatar: "舒", followers: 6892, designs: 178, specialty: "现代温馨" },
  { id: 7, name: "光影工作室", avatar: "光", followers: 6234, designs: 132, specialty: "法式优雅" },
  { id: 8, name: "城市绿洲", avatar: "城", followers: 5876, designs: 121, specialty: "植物装饰" },
  { id: 9, name: "极简生活", avatar: "极", followers: 5432, designs: 98, specialty: "极简主义" },
  { id: 10, name: "温馨小窝", avatar: "温", followers: 4987, designs: 87, specialty: "小户型设计" },
]

export function DesignersSection() {
  const [followedDesigners, setFollowedDesigners] = useState<number[]>([])

  const toggleFollow = (id: number) => {
    setFollowedDesigners(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-20 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 lg:mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-chart-2/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-chart-2" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                热门设计师
              </h2>
              <p className="text-muted-foreground text-sm mt-1">关注优秀创作者，获取灵感</p>
            </div>
          </div>
          <Button variant="outline" className="rounded-full hidden sm:flex">
            查看全部
          </Button>
        </div>

        {/* Designers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {topDesigners.map((designer, index) => (
            <div
              key={designer.id}
              className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-soft-lg transition-all border border-border/50 group"
            >
              {/* Rank Badge */}
              {index < 3 && (
                <div className="flex justify-end mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    index === 0 ? 'bg-amber-100 text-amber-700' :
                    index === 1 ? 'bg-slate-100 text-slate-600' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    #{index + 1}
                  </span>
                </div>
              )}

              {/* Avatar */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto flex items-center justify-center text-2xl font-serif text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {designer.avatar}
                </div>
                <h3 className="mt-3 font-medium text-foreground">{designer.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{designer.specialty}</p>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                <span>{designer.followers.toLocaleString()} 粉丝</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span>{designer.designs} 作品</span>
              </div>

              {/* Follow Button */}
              <Button
                variant={followedDesigners.includes(designer.id) ? "secondary" : "outline"}
                size="sm"
                className="w-full mt-4 rounded-full"
                onClick={() => toggleFollow(designer.id)}
              >
                {followedDesigners.includes(designer.id) ? (
                  "已关注"
                ) : (
                  <>
                    <UserPlus className="w-4 h-4 mr-1" />
                    关注
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
