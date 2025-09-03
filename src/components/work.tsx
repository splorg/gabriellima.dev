import type { FC } from "react";
import { Badge } from "@/components/badge";
import type { WorkExperience } from "@/lib/data";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type Props = {
  work: WorkExperience;
};

export const Work: FC<Props> = ({ work }) => {
  return (
    <AccordionItem
      value={work.companyName}
      className="font-serif text-foreground border-b-0"
    >
      <AccordionTrigger className="py-0 focus:no-underline hover:no-underline group hover:cursor-pointer focus:text-secondary-foreground hover:text-secondary-foreground transition-colors ease-out duration-200">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-left w-full">
            <div className="flex items-center gap-1">
              <p className="text-lg">{work.companyName}</p>
            </div>
            <p className="text-sm text-secondary-foreground group-focus:text-muted-foreground group-hover:text-muted-foreground transition-colors ease-out duration-200">
              {work.period}
            </p>
          </div>
          <p className="text-sm text-secondary-foreground group-focus:text-muted-foreground group-hover:text-muted-foreground transition-colors ease-out duration-200">
            {work.location}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-2 mt-2">
        <p className="text-pretty text-base">{work.description}</p>

        <div className="flex gap-2 items-center flex-wrap">
          {work.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
