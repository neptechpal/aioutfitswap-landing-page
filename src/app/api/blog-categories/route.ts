import { fetchFromBMS } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await fetchFromBMS();
  
  const categories = Array.from(
    new Set(posts.map(p => p.category_name || "General"))
  ).map(name => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-')
  }));

  return NextResponse.json(categories);
}