import { Button } from "@repo/ui/ui/button";
import { Separator } from "@repo/ui/ui/separator";

export default function Page(): JSX.Element {
  return (
    <main className="p-12 flex flex-col gap-8">
      <h1 className="text-5xl antialiased text-primary">Hello World!</h1>
      <Separator />
      <Button className="w-fit" variant={"secondary"}>
        Test
      </Button>
    </main>
  );
}
