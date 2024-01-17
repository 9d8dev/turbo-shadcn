import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main>
      <h1 className="text-5xl antialiased text-primary">Hello World!</h1>
      <Button variant={"secondary"}>Test</Button>
    </main>
  );
}
