"use client";

import { Features } from "../features";
import classNames from 'classnames';

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Proyectos destacado
          </>
        }
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, consequuntur."
      />
      <Features.Cards
        features={[
          {
            image: "/card-board.webp",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Lorem ipsum",
            text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
          },
          {
            image: "/card-views.webp",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Lorem ipsum",
            text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
          },
          {
            image: "/card-board.webp",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Lorem ipsum",
            text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
          },
          {
            image: "/card-views.webp",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Lorem ipsum",
            text: "Dolor sit amet consectetur adipisicing elit. Quas, consequuntur.",
          },
        ]}
      />
    </Features>
  );
};
