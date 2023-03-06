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

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main title={<>Nuestro equipo</>} text={'**Las imagenes png sin fondo**'} />
      <Features.Cards
        features={[
          {
            image:
              "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
            imageClassName: "ml-16",
            title: "Lorem ipsum",
            text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
            imageClassName: "ml-16",
            title: "Lorem ipsum",
            text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
            imageClassName: "ml-16",
            title: "Lorem ipsum",
            text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
            imageClassName: "ml-16",
            title: "Lorem ipsum",
            text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
          },
        ]}
      />
    </Features>
  );
};
