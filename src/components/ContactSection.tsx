import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "shriyav1903@gmail.com",
      href: "mailto:shriyav1903@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9631748124",
      href: "tel:+919631748124",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "shriya-199",
      href: "https://github.com/shriya-199",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shriyaverma1909",
      href: "https://www.linkedin.com/in/shriyaverma1909",
    },
  ];

  const handleChange =
    (field: keyof typeof formState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      setFormState({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let us build something.</h2>
            <p className="mt-3 text-muted-foreground">
              Share a brief and I will respond with next steps, timelines, and a plan.
            </p>
            <div className="mt-6 grid gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <method.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{method.label}</p>
                    <p className="text-sm font-semibold">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-semibold text-muted-foreground">
                  Name
                  <input
                    value={formState.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </label>
                <label className="text-sm font-semibold text-muted-foreground">
                  Email
                  <input
                    type="email"
                    value={formState.email}
                    onChange={handleChange("email")}
                    placeholder="you@email.com"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </label>
              </div>
              <label className="text-sm font-semibold text-muted-foreground">
                Company or role
                <input
                  value={formState.company}
                  onChange={handleChange("company")}
                  placeholder="Company, startup, or role"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="text-sm font-semibold text-muted-foreground">
                Project details
                <textarea
                  value={formState.message}
                  onChange={handleChange("message")}
                  placeholder="Share your timeline, goals, and scope..."
                  rows={4}
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  By sending, you agree to be contacted about this request.
                </p>
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send request"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
              {status === "sent" && (
                <p className="text-sm font-semibold text-primary">Thanks! I will respond soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm font-semibold text-accent">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
