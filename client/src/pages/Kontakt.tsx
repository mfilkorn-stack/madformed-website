import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useLanguage } from "@/lib/i18n";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mreagzbn";

const getContactSchema = (isEnglish: boolean) =>
  z.object({
    name: z.string().min(2, isEnglish ? "Name must be at least 2 characters" : "Name muss mindestens 2 Zeichen lang sein"),
    email: z.string().email(isEnglish ? "Please enter a valid email address" : "Bitte geben Sie eine gültige E-Mail-Adresse ein"),
    message: z.string().min(10, isEnglish ? "Message must be at least 10 characters" : "Nachricht muss mindestens 10 Zeichen lang sein"),
    privacy: z.literal(true, {
      errorMap: () => ({
        message: isEnglish
          ? "You must accept the privacy policy"
          : "Sie müssen die Datenschutzerklärung akzeptieren",
      }),
    }),
    company: z.string().max(0).optional(),
  });

type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;

export default function Kontakt() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const contactSchema = getContactSchema(isEnglish);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      privacy: false as unknown as true,
      company: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.company && data.company.length > 0) {
      return;
    }

    setSending(true);
    setErrorMsg(null);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("_gotcha", data.company || "");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setErrorMsg(
          isEnglish
            ? "An error occurred while sending. Please try again."
            : "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
        );
      }
    } catch {
      setErrorMsg(
        isEnglish
          ? "A network error occurred. Please check your connection and try again."
          : "Ein Netzwerkfehler ist aufgetreten. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut."
      );
    } finally {
      setSending(false);
    }
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
    email: isEnglish ? "Email *" : "E-Mail *",
    emailPlaceholder: isEnglish ? "your@email.com" : "ihre@email.de",
    message: isEnglish ? "Message *" : "Nachricht *",
    messagePlaceholder: isEnglish ? "Describe your inquiry..." : "Beschreiben Sie Ihr Anliegen...",
    sending: isEnglish ? "Sending..." : "Wird gesendet...",
    privacyLabel: isEnglish
      ? "I agree to the processing of my data according to the privacy policy. *"
      : "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *",
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
                        {...form.register("company")}
                        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, overflow: "hidden" }}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />

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
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{labels.message}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={labels.messagePlaceholder}
                                className="min-h-[120px] resize-none"
                                data-testid="input-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="privacy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value as unknown as boolean}
                                onCheckedChange={field.onChange}
                                data-testid="input-privacy"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal text-brand-dark/70 cursor-pointer">
                                {labels.privacyLabel}
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      {errorMsg && (
                        <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive" data-testid="text-error">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-brand-green hover:bg-brand-green/90 text-white"
                        disabled={sending}
                        data-testid="button-submit"
                      >
                        {sending ? (
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
