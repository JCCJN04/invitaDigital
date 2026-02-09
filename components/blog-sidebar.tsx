"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Star, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import { BlogPost } from "@/lib/blog-data"

interface BlogSidebarProps {
    relatedPosts: BlogPost[]
    categories: { name: string; count: number }[]
}

export function BlogSidebar({ relatedPosts, categories }: BlogSidebarProps) {
    return (
        <aside className="space-y-8">
            {/* Primary CTA - Sticky */}
            <div className="sticky top-24 space-y-8">
                <Card className="bg-[#1c1917] text-[#fdfcfb] border-none overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a373] rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ffb5a7] rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

                    <CardHeader>
                        <CardTitle className="font-serif text-2xl text-[#d4a373]">
                            ¿Te casas pronto?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
                        <p className="text-gray-300 leading-relaxed">
                            Diseñamos invitaciones digitales que emocionan a tus invitados desde el primer clic.
                        </p>
                        <ul className="space-y-2">
                            {[
                                "Diseños Premium Personalizados",
                                "Confirmación de Asistencia (RSVP)",
                                "Ubicación con Mapas",
                                "Mesa de Regalos",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-sm text-gray-400">
                                    <Star className="w-4 h-4 text-[#d4a373] mr-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button className="w-full bg-[#d4a373] hover:bg-[#c09265] text-[#1c1917] font-semibold h-12 text-lg" asChild>
                            <a href="https://wa.me/528111230266?text=Hola,%20vi%20su%20blog%20y%20quiero%20cotizar%20mis%20invitaciones" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Cotizar Gratis
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card className="bg-white border border-[#f3eee8] shadow-sm">
                    <CardHeader>
                        <CardTitle className="font-serif text-xl text-[#1c1917]">
                            Más Leídos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {relatedPosts.map((post) => (
                                <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                                    <div className="flex gap-4 items-start">
                                        <span className="text-2xl font-serif text-[#d4a373]/50 font-bold group-hover:text-[#d4a373] transition-colors">
                                            •
                                        </span>
                                        <div>
                                            <h4 className="font-semibold text-[#1c1917] line-clamp-2 group-hover:text-[#d4a373] transition-colors leading-tight">
                                                {post.title}
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">{post.readTime} lectura</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Categories */}
                <Card className="bg-white border border-[#f3eee8] shadow-sm">
                    <CardHeader>
                        <CardTitle className="font-serif text-xl text-[#1c1917]">
                            Explorar Temas
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <Link key={cat.name} href={`/blog?category=${cat.name}`}>
                                    <Badge variant="secondary" className="bg-[#f3eee8] text-[#1c1917] hover:bg-[#d4a373] hover:text-white transition-colors cursor-pointer px-3 py-1.5 font-normal">
                                        {cat.name} ({cat.count})
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </aside>
    )
}
