import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-brand-grey/20"
        >
          <AccordionTrigger
            className="text-left text-brand-dark hover:text-brand-green font-medium py-4"
            data-testid={`faq-question-${index}`}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-brand-dark/70 pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
