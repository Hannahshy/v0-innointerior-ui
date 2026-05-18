"use client"

import { useState } from "react"
import Image from "next/image"
import { Upload, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StudioSection() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 2000)
  }

  return (
    <section id="studio" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            AI 设计工作室
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            上传你的房间照片，描述你想要的风格，让AI为你打造全新空间
          </p>
        </div>

        {/* Studio Interface */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - Input */}
          <div className="space-y-6">
            {/* Prompt Input */}
            <div className="bg-card rounded-3xl p-6 shadow-soft border border-border/50">
              <label className="text-sm font-medium text-foreground mb-3 block">
                描述你的理想空间
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="例如：我想要一个温暖的北欧风客厅，有大窗户、木质家具、柔和的灯光和室内绿植..."
                className="w-full h-32 bg-secondary/50 rounded-2xl p-4 text-foreground placeholder:text-muted-foreground/70 border-none outline-none resize-none"
              />
            </div>

            {/* Upload Area */}
            <div className="bg-card rounded-3xl p-6 shadow-soft border border-border/50">
              <label className="text-sm font-medium text-foreground mb-3 block">
                上传当前房间照片（可选）
              </label>
              <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-14 h-14 rounded-2xl bg-secondary mx-auto flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Upload className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">
                  拖拽图片到此处或 <span className="text-primary font-medium">点击上传</span>
                </p>
                <p className="text-muted-foreground/70 text-xs mt-2">
                  支持 JPG, PNG 格式，最大 10MB
                </p>
              </div>
            </div>

            {/* Generate Button */}
            <Button 
              size="lg"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full rounded-2xl h-14 text-lg shadow-soft-lg hover:shadow-soft transition-all bg-primary hover:bg-primary/90 gap-2"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                  正在生成...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  生成设计方案
                </>
              )}
            </Button>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:pl-6">
            <div className="bg-card rounded-3xl overflow-hidden shadow-soft-lg border border-border/50 h-full min-h-[500px]">
              {/* Preview Header */}
              <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">设计预览</span>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                    改造前
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-xs font-medium text-accent">
                    改造后
                  </span>
                </div>
              </div>

              {/* Preview Content */}
              <div className="relative aspect-[4/3] bg-secondary/30">
                <Image
                  src="/images/hero-living-room.jpg"
                  alt="设计预览"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-card/90 backdrop-blur-sm mx-auto flex items-center justify-center shadow-soft mb-4">
                      <Sparkles className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">输入描述后</p>
                    <p className="text-muted-foreground text-sm">AI 将在这里展示设计效果</p>
                  </div>
                </div>
              </div>

              {/* Preview Footer */}
              <div className="p-6 bg-secondary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="rounded-full">
                      下载图片
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      分享到社区
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary">
                    重新生成
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
