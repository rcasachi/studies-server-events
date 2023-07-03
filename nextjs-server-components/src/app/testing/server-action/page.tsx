import { prisma } from "@/app/prisma";
import { revalidatePath } from "next/cache";

async function getTests() {
  return await prisma.test.findMany();
}

export default async function TestingCreateServerActionPage() {
  async function handleSubmit(data: FormData) {
    'use server';
    const name = data.get('name');
    prisma.$queryRaw`INSERT INTO test (name) VALUES (${name})`;
    revalidatePath('/testing/server-action');
  }

  const tests = await getTests();

  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" placeholder="Name" name="name"/>
        <button type="submit">Create</button>
      </form>
      <br />

      {tests.map((test) => (
        <li key={test.id}>{test.name}</li>
      ))}
    </div>
  )
}