import { BlogPost } from "@/types/blog";

export async function fetchFromBMS(): Promise<BlogPost[]> {
  const url = process.env.BMS_API_URL;
  const apiKey = process.env.BMS_API_KEY;

  if (!url || !apiKey) {
    console.error(" CONFIG ERROR: URL or KEY is missing from .env.local");
    return [];
  }

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json',
      },
      cache: 'no-store' 
    });

    if (!res.ok) {
      console.error(` API ERROR: ${res.status}`);
      return [];
    }

    const data = await res.json();
    
  
    console.log("--- API RAW DATA START ---");
    console.log(JSON.stringify(data).substring(0, 500)); 
    console.log("--- API RAW DATA END ---");
  
    const finalData = Array.isArray(data) ? data : data.data || [];
    
    console.log(` Posts Found: ${finalData.length}`);
    return finalData;

  } catch (error) {
    console.error(" FETCH FAILED:", error);
    return [];
  }
}