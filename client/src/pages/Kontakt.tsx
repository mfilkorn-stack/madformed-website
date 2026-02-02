import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactBlock } from "@/components/ContactBlock";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n";
import { apiRequest } from "@/lib/queryClient";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const getContactSchema = (isEnglish: boolean) => z.object({
  name: z.string().min(2, isEnglish ? "Name must be at least 2 characters" : "Name muss mindestens 2 Zeichen lang sein"),
  firma: z.string().min(1, isEnglish ? "Please enter your company" : "Bitte geben Sie Ihre Firma an"),
  email: z.string().email(isEnglish ? "Please enter a valid email address" : "Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  telefon: z.string().optional(),
  thema: z.enum(["cannabis", "medizintechnik", "ki-workshop", "allgemein"], {
    required_error: isEnglish ? "Please select a topic" : "Bitte wählen Sie ein Thema",
  }),
  nachricht: z.string().min(10, isEnglish ? "Message must be at least 10 characters" : "Nachricht muss mindestens 10 Zeichen lang sein"),
  honeypot: z.string().max(0).optional(),
});

type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;

export default function Kontakt() {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const isEnglish = language === "en";
  const [submitted, setSubmitted] = useState(false);

  const contactSchema = getContactSchema(isEnglish);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      firma: "",
      email: "",
      telefon: "",
      thema: undefined,
      nachricht: "",
      honeypot: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: isEnglish ? "Message sent" : "Nachricht gesendet",
        description: isEnglish 
          ? "Thank you for your inquiry. We will get back to you shortly."
          : "Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.",
      });
    },
    onError: () => {
      toast({
        title: isEnglish ? "Error" : "Fehler",
        description: isEnglish 
          ? "An error occurred while sending. Please try again."
          : "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    if (data.honeypot && data.honeypot.length > 0) {
      return;
    }
    mutation.mutate(data);
  };

  const labels = {
    title: isEnglish ? "Contact" : "Kontakt",
    subtitle: isEnglish 
      ? "Are you planning a project or need a qualified assessment? We would be happy to discuss your matter personally and confidentially. Simply send us a message – we will get back to you promptly."
      : "Sie planen ein Projekt oder benötigen eine fundierte Einschätzung? Gerne besprechen wir Ihr Anliegen persönlich und vertraulich. Senden Sie uns einfach eine Nachricht – wir melden uns zeitnah bei Ihnen.",
    seoDescription: isEnglish
      ? "Contact MadforMed for a non-binding consultation about medical cannabis or medical technology."
      : "Kontaktieren Sie MadforMed für ein unverbindliches Beratungsgespräch zu medizinischem Cannabis oder Medizintechnik.",
    sendMessage: isEnglish ? "Send Message" : "Nachricht senden",
    thankYou: isEnglish ? "Thank you!" : "Vielen Dank!",
    successMessage: isEnglish 
      ? "Your message has been sent successfully. We will get back to you as soon as possible."
      : "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.",
    name: isEnglish ? "Name *" : "Name *",
    namePlaceholder: isEnglish ? "Your name" : "Ihr Name",
    company: isEnglish ? "Company *" : "Firma *",
    companyPlaceholder: isEnglish ? "Your company" : "Ihre Firma",
    email: isEnglish ? "Email *" : "E-Mail *",
    emailPlaceholder: isEnglish ? "your@email.com" : "ihre@email.de",
    phone: isEnglish ? "Phone (optional)" : "Telefon (optional)",
    topic: isEnglish ? "Topic *" : "Thema *",
    selectPlaceholder: isEnglish ? "Please select" : "Bitte wählen",
    message: isEnglish ? "Message *" : "Nachricht *",
    messagePlaceholder: isEnglish ? "Describe your inquiry..." : "Beschreiben Sie Ihr Anliegen...",
    sending: isEnglish ? "Sending..." : "Wird gesendet...",
    topics: {
      cannabis: isEnglish ? "Medical Cannabis" : "Medizinisches Cannabis",
      medizintechnik: isEnglish ? "Medical Technology" : "Medizintechnik",
      kiWorkshop: isEnglish ? "AI Workshop (Copilot & ChatGPT)" : "KI Workshop (Copilot & ChatGPT)",
      allgemein: isEnglish ? "General Inquiry" : "Allgemeine Anfrage",
    },
  };

  return (
    <div className="bg-brand-light">
      <SEO
        title={labels.title}
        description={labels.seoDescription}
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
                {labels.title}
              </h1>
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                {labels.subtitle}
              </p>
              <ContactBlock />
            </div>

            <div>
              {submitted ? (
                <Card className="p-8 bg-white border-brand-grey/20 text-center">
                  <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-brand-green" />
                  </div>
                  <h2 className="text-xl font-semibold text-brand-dark mb-2">
                    {labels.thankYou}
                  </h2>
                  <p className="text-brand-dark/70">
                    {labels.successMessage}
                  </p>
                </Card>
              ) : (
                <Card className="p-6 md:p-8 bg-white border-brand-grey/20">
                  <h2 className="text-xl font-semibold text-brand-dark mb-6">
                    {labels.sendMessage}
                  </h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <input
                        type="text"
                        {...form.register("honeypot")}
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{labels.name}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={labels.namePlaceholder}
                                  data-testid="input-name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="firma"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{labels.company}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={labels.companyPlaceholder}
                                  data-testid="input-firma"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{labels.email}</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder={labels.emailPlaceholder}
                                  data-testid="input-email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="telefon"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{labels.phone}</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+49 ..."
                                  data-testid="input-telefon"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="thema"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{labels.topic}</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-thema">
                                  <SelectValue placeholder={labels.selectPlaceholder} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cannabis">{labels.topics.cannabis}</SelectItem>
                                <SelectItem value="medizintechnik">{labels.topics.medizintechnik}</SelectItem>
                                <SelectItem value="ki-workshop">{labels.topics.kiWorkshop}</SelectItem>
                                <SelectItem value="allgemein">{labels.topics.allgemein}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="nachricht"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{labels.message}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={labels.messagePlaceholder}
                                className="min-h-[120px] resize-none"
                                data-testid="input-nachricht"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-brand-green hover:bg-brand-green/90 text-white"
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            {labels.sending}
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            {labels.sendMessage}
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
