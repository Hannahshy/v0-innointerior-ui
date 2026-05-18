import Link from "next/link"
import { Home, Instagram, Twitter, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Home className="w-5 h-5 text-primary-foreground" />
                <span className="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold text-primary-foreground bg-accent rounded px-1">AI</span>
              </div>
              <span className="text-xl font-serif font-medium text-foreground">InnoInterior</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              用AI的力量，让每个人都能成为室内设计师。创造属于你的温馨空间。
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shadow-soft">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shadow-soft">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shadow-soft">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shadow-soft">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-foreground mb-4">产品服务</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">AI 设计工作室</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">风格探索</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">设计社区</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">会员订阅</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">企业版</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium text-foreground mb-4">资源中心</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">设计指南</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">风格百科</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">装修课程</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">设计师入驻</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">合作伙伴</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium text-foreground mb-4">帮助支持</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">帮助中心</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">联系我们</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">隐私政策</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">服务条款</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">关于我们</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 InnoInterior. 保留所有权利。
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">简体中文</Link>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <Link href="#" className="hover:text-foreground transition-colors">English</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
