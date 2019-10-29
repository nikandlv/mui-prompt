import { storiesOf } from "@storybook/react";
import React from "react";
import PromptDemo from "../lib/PromptDemo";
import InlineDemo from "../lib/InlineDemo";

storiesOf("Demos", module)
    .add("Prompt Demo", () => <PromptDemo />)
    .add("Inline Demo", () => <InlineDemo />);
