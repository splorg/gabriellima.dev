import { ExternalLink } from "@/components/external-link";
import { Accordion } from "@/components/ui/accordion";
import { Work } from "@/components/work";
import { WORK } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="-ml-0.5 text-foreground leading-tight text-4xl font-bold font-serif">
          Gabriel Lima
        </h1>
        <h2 className="text-lg font-serif text-secondary-foreground">
          software engineer
        </h2>
      </div>

      <div className="text-pretty text-foreground font-serif space-y-4">
        <p>
          Full stack software engineer experienced with web and mobile
          applications. I enjoy solving problems and building reliable,
          efficient solutions. Always looking to learn new technologies and
          connect with fellow developers.
        </p>
        <p>
          Graduated with an A.S. in Systems Analysis and Development from FATEC,
          a public university in Brazil, in December 2023.
        </p>

        <div className="flex gap-4 font-serif -mt-4">
          <ExternalLink href="https://github.com/splorg" label="GitHub" />
          <ExternalLink
            href="https://www.linkedin.com/in/limabs002/"
            label="LinkedIn"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold font-serif text-foreground">Work</h3>

        <Accordion type="single" collapsible className="space-y-3">
          {WORK.map((work) => (
            <Work key={work.companyName} work={work} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
