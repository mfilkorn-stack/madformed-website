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
import { apiRequest } from "@/lib/queryClient";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  firma: z.string().min(1, "Bitte geben Sie Ihre Firma an"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  telefon: z.string().optional(),
  thema: z.enum(["cannabis", "medizintechnik", "ki-workshop", "allgemein"], {
    required_error: "Bitte wählen Sie ein Thema",
  }),
  nachricht: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  honeypot: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Kontakt() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

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
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.",
      });
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
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

  return (
    <div className="bg-brand-light">
      <SEO
        title="Kontakt"
        description="Kontaktieren Sie MadforMed für ein unverbindliches Beratungsgespräch zu medizinischem Cannabis oder Medizintechnik. Rückmeldung innerhalb von 48h."
      />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
                Kontakt
              </h1>
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                Haben Sie ein Projekt oder eine Frage? Wir freuen uns auf Ihre 
                Nachricht und melden uns in der Regel innerhalb von 48 Stunden.
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
                    Vielen Dank!
                  </h2>
                  <p className="text-brand-dark/70">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns 
                    schnellstmöglich bei Ihnen.
                  </p>
                </Card>
              ) : (
                <Card className="p-6 md:p-8 bg-white border-brand-grey/20">
                  <h2 className="text-xl font-semibold text-brand-dark mb-6">
                    Nachricht senden
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
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Ihr Name"
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
                              <FormLabel>Firma *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Ihre Firma"
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
                              <FormLabel>E-Mail *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="ihre@email.de"
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
                              <FormLabel>Telefon (optional)</FormLabel>
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
                            <FormLabel>Thema *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-thema">
                                  <SelectValue placeholder="Bitte wählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cannabis">Medizinisches Cannabis</SelectItem>
                                <SelectItem value="medizintechnik">Medizintechnik</SelectItem>
                                <SelectItem value="ki-workshop">KI Workshop (Copilot & ChatGPT)</SelectItem>
                                <SelectItem value="allgemein">Allgemeine Anfrage</SelectItem>
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
                            <FormLabel>Nachricht *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Beschreiben Sie Ihr Anliegen..."
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
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Nachricht senden
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
