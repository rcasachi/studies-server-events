import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = await fetch('http://localhost:8000/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: body.name,
    })
  });

  const newTest = await response.json();
  // revalidatePath('/testing') // mutate cache/server
  revalidateTag('test');
  return NextResponse.json(newTest);
}