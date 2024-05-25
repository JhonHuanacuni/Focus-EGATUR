import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import EgaturFrontal from "../assets/img/EgaturFrontal.jpg";
import {Image} from "@nextui-org/react";

export function Nosotros() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col text-black text-center m-auto pt-20 pb-10">
        <h1 className="text-[30px] font-extrabold">NOSOTROS</h1>
      </div>
      <div className="flex-grow sm:flex">
        <section className="flex sm:w-1/2 px-10 items-center justify-center">
          <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Acerca de Nosotros"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="VISIÓN">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="MISIÓN">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </section>
        <div className="sm:px-5 px-10  sm:w-1/2 sm:py-0 pt-8 flex items-center justify-center">
          <Image
            isZoomed
            width={600}
            alt="NextUI Fruit Image with Zoom"
            src={EgaturFrontal}
          />
        </div>
      </div>
    </div>
  );
}
