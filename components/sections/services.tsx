"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const Services = () => {
  return (
    <section id="services">
      <Features color="194,97,254" colorDark="53,42,79">
        <Features.Main
          title={
            <>
              Servicios
              <br />
              que ofrecemos
            </>
          }
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, consequuntur."
        />
        <Features.Grid
          features={[
            {
              icon: ParentSubIcon,
              title: "Lorem ipsum",
              text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
            },
            {
              icon: AutomatedBacklogIcon,
              title: "Lorem ipsum",
              text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
            },
            {
              icon: WorkflowsIcon,
              title: "Lorem ipsum",
              text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
            },
            {
              icon: CustomViewsIcon,
              title: "Lorem ipsum",
              text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
            },
            {
              icon: DiscussionIcon,
              title: "Lorem ipsum",
              text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
            },
            {
              icon: IssuesIcon,
              title: "Lorem ipsum",
              text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
            },
          ]}
        />
      </Features>
    </section>
  );
};
