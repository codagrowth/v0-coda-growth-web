"use client"

import { useState } from "react"
import { ExternalLink, Copy, Check, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { AffiliateLink } from "@/lib/affiliate-links"

interface AffiliateDashboardProps {
  links: AffiliateLink[]
  categories: string[]
}

export function AffiliateDashboard({ links, categories }: AffiliateDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filteredLinks = links.filter((link) => {
    const matchesSearch =
      link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.slug.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || link.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Affiliate Links Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage and track your partner affiliate links. Copy the pretty URL to share with your audience.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardDescription className="text-muted-foreground">Total Links</CardDescription>
            <CardTitle className="text-3xl text-primary">{links.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardDescription className="text-muted-foreground">Categories</CardDescription>
            <CardTitle className="text-3xl text-primary">{categories.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardDescription className="text-muted-foreground">Active Redirects</CardDescription>
            <CardTitle className="text-3xl text-primary">{links.length}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-card border-border mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or slug..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-border"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] bg-muted border-border">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Links Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Affiliate Links</CardTitle>
          <CardDescription className="text-muted-foreground">
            Click the copy button to copy the pretty URL. All links use 301 permanent redirects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="text-foreground font-semibold">Partner</TableHead>
                  <TableHead className="text-foreground font-semibold">Pretty URL</TableHead>
                  <TableHead className="text-foreground font-semibold hidden md:table-cell">Category</TableHead>
                  <TableHead className="text-foreground font-semibold hidden lg:table-cell">Description</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLinks.map((link) => (
                  <TableRow key={link.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium text-foreground">
                      {link.name}
                    </TableCell>
                    <TableCell>
                      <code className="text-sm bg-muted px-2 py-1 rounded text-primary">
                        {link.prettyUrl}
                      </code>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                        {link.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground text-sm max-w-[200px] truncate">
                      {link.description}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(`${baseUrl}${link.prettyUrl}`, link.id)}
                          className="h-8 px-2 text-muted-foreground hover:text-foreground"
                        >
                          {copiedId === link.id ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                          <span className="sr-only">Copy link</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="h-8 px-2 text-muted-foreground hover:text-foreground"
                        >
                          <a
                            href={link.destinationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Visit destination</span>
                          </a>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredLinks.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No affiliate links found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="bg-card border-border mt-6">
        <CardHeader>
          <CardTitle className="text-foreground">Quick Reference</CardTitle>
          <CardDescription className="text-muted-foreground">
            How URL routing works in your vercel.json
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">URL Masking (Rewrites)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Rewrites serve content from a different path without changing the browser URL.
              </p>
              <code className="block text-sm bg-muted p-3 rounded text-coda-teal-soft">
                /tool → /tools/marketing-automation (URL stays as /tool)
              </code>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Affiliate Redirects (301)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                301 redirects permanently redirect visitors to the destination URL.
              </p>
              <code className="block text-sm bg-muted p-3 rounded text-coda-teal-soft">
                /go/hubspot → https://hubspot.com/... (browser URL changes)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
