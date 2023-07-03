// async function getTest() {
//   const response = await fetch('http://localhost:8000/test', { next: { revalidate: 15 } })
//   return response.json()
// }

import { ClientComponent } from "@/components/client-component";
import { ListTest } from "@/components/list-test";

export default function TestingPage() {
  // const tests = await getTest()

  return (
    <div>
      <h1>Testing</h1>
      <ClientComponent />
      <ListTest />
    </div>
  );
}