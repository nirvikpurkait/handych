import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoIcon, LogoText } from "@/components/logo";
import { cn } from "@/utils/cn";

function Logo() {
  return (
    <div className={cn(`flex gap-4`)}>
      <LogoIcon />
      <LogoText />
    </div>
  );
}

const meta: Meta<typeof Logo> & TypedMetaOptions = {
  component: Logo,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const DefaultLogoStory: Story = {
  args: {},
};
