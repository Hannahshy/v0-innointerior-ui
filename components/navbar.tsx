"use client"

import Link from "next/link"
import { Home, Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-warm border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-soft group-hover:shadow-soft-lg transition-shadow">
              <Home className="w-5 h-5 text-primary-foreground" />
              <span className="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold text-primary-foreground bg-accent rounded px-1">AI</span>
            </div>
            <span className="text-xl font-serif font-medium text-foreground">InnoInterior</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#explore" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              探索
            </Link>
            <Link href="#community" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              社区
            </Link>
            <Link href="#studio" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              设计工作室
            </Link>
            <Link href="#space" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              我的空间
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>
            <Button variant="outline" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5">
              登录
            </Button>
            <Button className="rounded-full shadow-soft hover:shadow-soft-lg transition-shadow bg-primary hover:bg-primary/90">
              注册
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              <Link href="#explore" className="px-4 py-2 rounded-xl hover:bg-secondary transition-colors font-medium">
                探索
              </Link>
              <Link href="#community" className="px-4 py-2 rounded-xl hover:bg-secondary transition-colors font-medium">
                社区
              </Link>
              <Link href="#studio" className="px-4 py-2 rounded-xl hover:bg-secondary transition-colors font-medium">
                设计工作室
              </Link>
              <Link href="#space" className="px-4 py-2 rounded-xl hover:bg-secondary transition-colors font-medium">
                我的空间
              </Link>
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" className="flex-1 rounded-full">登录</Button>
                <Button className="flex-1 rounded-full">注册</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
