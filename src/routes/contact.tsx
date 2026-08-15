import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/motion-primitives";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Talk to Mira Group | Gandhidham, Kutch" },
      {
        name: "description",
        content:
          "Get in touch with Mira Group for specialized tanker transportation, industrial water supply, heavy equipment, edible oil transport, and salt solutions in Kutch & Pan-India.",
      },
      { property: "og:title", content: "Contact Mira Group — Business Enquiries" },
      {
        property: "og:description",
        content:
          "Connect with Mira Group office in Gandhidham, Kutch. Phone: +91 2836 223377, Email: logistics@miragroup.in.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: "Water Solutions",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Enquiry Submitted Successfully", {
        description: "Thank you for reaching out. Our business team will contact you shortly.",
      });
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        requirement: "Water Solutions",
        message: "",
      });
    }, 800);
  };

  return (
    <>
      <PageIntro
        label="Contact Us"
        title="Let's Discuss Your Requirement"
      >
        <p>
          Whether you need specialized tanker transportation, industrial water supply, heavy equipment, edible oil transportation or quality salt, our team is ready to understand your requirement.
        </p>
      </PageIntro>

      <section className="border-b border-border py-16 lg:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12">
          {/* Talk to Mira Group Column */}
          <div className="space-y-10 lg:col-span-5">
            <Reveal>
              <p className="label-tech text-primary">Talk to Mira Group</p>
              <h2 className="display-lg mt-4">Mira Group of Companies</h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border-t border-border pt-6 space-y-6">
                <div>
                  <p className="label-tech text-muted-foreground">Office Address</p>
                  <p className="mt-2 font-display text-xl leading-snug">
                    207, TM Tower, Near UCO Bank,
                    <br />
                    Gandhidham, Kutch, Gujarat, India
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="label-tech text-muted-foreground">Telephone & Direct Lines</p>
                  <p className="mt-2 text-lg">
                    Phone:{" "}
                    <a href="tel:+912836223377" className="font-display font-medium text-foreground hover:text-primary transition-colors">
                      +91 2836 223377
                    </a>
                  </p>
                  <p className="mt-1 text-lg">
                    Mobile:{" "}
                    <a href="tel:+919925225555" className="font-display font-medium text-foreground hover:text-primary transition-colors">
                      +91 99252 25555
                    </a>{" "}
                    /{" "}
                    <a href="tel:+919909459999" className="font-display font-medium text-foreground hover:text-primary transition-colors">
                      +91 99094 59999
                    </a>
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="label-tech text-muted-foreground">Email Enquiry</p>
                  <p className="mt-2 text-lg">
                    <a href="mailto:logistics@miragroup.in" className="font-display font-medium text-primary hover:underline">
                      logistics@miragroup.in
                    </a>
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="label-tech text-muted-foreground">Operational Hours</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Monday — Saturday: 09:00 AM – 07:00 PM IST
                    <br />
                    24/7 Logistics & Emergency Tanker Dispatch Support
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Business Enquiries Form Column */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <div className="border border-border bg-card p-8 sm:p-12">
                <p className="label-tech text-primary">Business Enquiries</p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl">Send Us Your Requirement</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Tell us about your requirement, destination, cargo/product and expected volume. Our team will connect with you with the appropriate solution.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block label-tech text-muted-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block label-tech text-muted-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization or business name"
                        className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block label-tech text-muted-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block label-tech text-muted-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block label-tech text-muted-foreground mb-2">
                      Business Requirement *
                    </label>
                    <Select
                      value={formData.requirement}
                      onValueChange={(val) => setFormData({ ...formData, requirement: val })}
                    >
                      <SelectTrigger id="requirement" className="w-full">
                        <SelectValue placeholder="Select business requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Water Solutions">01. Water Solutions (Raw, RO, DM, Distilled)</SelectItem>
                        <SelectItem value="Chemical & Specialized Tankers">02. Chemical & Specialized Tankers (MS, SS, ISO)</SelectItem>
                        <SelectItem value="Heavy Vehicles & Equipment">03. Heavy Vehicles & Equipment (Loaders, JCBs, Dumpers)</SelectItem>
                        <SelectItem value="Oil Transportation">04. Edible & Non-Edible Oil Transportation</SelectItem>
                        <SelectItem value="Salt & Minerals">05. Salt & Minerals (Raw, Industrial, Iodized, Refined)</SelectItem>
                        <SelectItem value="General Industrial Support">06. General Logistics / Industrial Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block label-tech text-muted-foreground mb-2">
                      Message / Cargo & Volume Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your cargo type, volume, pickup/destination, and schedule..."
                      className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-ink py-4 text-ink-foreground label-tech transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry →"}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
