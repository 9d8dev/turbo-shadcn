// @ts-expect-error bc turbo
import { Button } from "@repo/ui/ui/button";
// @ts-expect-error bc turbo
import { Separator } from "@repo/ui/ui/separator";
// @ts-expect-error bc turbo
import * as Craft from "@repo/ui/craft/layout";
import { Main } from "@repo/ui/craft/layout";

export default function Page(): JSX.Element {
  return (
    <Main className="p-12 flex flex-col gap-8">
      <h1 className="text-5xl antialiased text-primary">Hello World!</h1>
      <Separator />
      <Craft.Section>
        <Craft.Container>
          <h2>Here is a Button from shadcn/ui</h2>
          <Button className="w-fit" variant={"primary"}>
            Test
          </Button>
        </Craft.Container>
      </Craft.Section>
    </Main>
  );
}
