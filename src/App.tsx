import { type FormEvent, useState } from "react"
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BriefcaseBusinessIcon,
  CheckCircle2Icon,
  ChevronRightIcon,
  CircleDollarSignIcon,
  Clock3Icon,
  FileCheck2Icon,
  Globe2Icon,
  HandshakeIcon,
  HardHatIcon,
  HeadphonesIcon,
  HeartPulseIcon,
  HotelIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  MessageCircleIcon,
  PhoneIcon,
  PlaneIcon,
  PlaneTakeoffIcon,
  ShieldCheckIcon,
  StampIcon,
  TruckIcon,
  UsersIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"

const BUSINESS_WHATSAPP = "919487717767"
const BUSINESS_PHONE = "+91 94877 17767"
const BUSINESS_ADDRESS = "Karungal, Kanyakumari, Tamil Nadu, India"
const BUSINESS_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`

const travelClasses = [
  { label: "Economy", value: "economy" },
  { label: "Premium economy", value: "premium" },
  { label: "Business", value: "business" },
]

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Job abroad", href: "#jobs" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
]

const recruitmentSectors = [
  {
    icon: HardHatIcon,
    title: "Construction & trades",
    roles: "Electricians, welders, plumbers, technicians, and site teams",
  },
  {
    icon: HotelIcon,
    title: "Hospitality & catering",
    roles: "Chefs, service staff, housekeeping, and hotel operations",
  },
  {
    icon: TruckIcon,
    title: "Logistics & transport",
    roles: "Drivers, warehouse teams, delivery staff, and fleet support",
  },
  {
    icon: HeartPulseIcon,
    title: "Healthcare & caregiving",
    roles: "Nurses, caregivers, medical assistants, and support staff",
  },
]

const jobSteps = [
  {
    number: "01",
    title: "Requirement received",
    description: "We understand the employer's role, skills, location, and terms.",
  },
  {
    number: "02",
    title: "Candidate screening",
    description: "Profiles and documents are reviewed before interviews are arranged.",
  },
  {
    number: "03",
    title: "Offer & contract",
    description: "Selected candidates review the written offer and employment details.",
  },
  {
    number: "04",
    title: "Visa & documentation",
    description: "We coordinate the required attestations, medicals, and visa steps.",
  },
  {
    number: "05",
    title: "Ticketing",
    description: "Flights are planned around visa status and the employer's joining date.",
  },
  {
    number: "06",
    title: "Pre-departure support",
    description: "Candidates leave with a clear checklist and arrival instructions.",
  },
]

const destinations = [
  {
    name: "United Arab Emirates",
    note: "Dubai · Abu Dhabi · Sharjah",
    image:
      "https://images.unsplash.com/photo-1607414851776-f2fcc379fb48?auto=format&fit=crop&w=1200&q=82",
  },
  {
    name: "Saudi Arabia",
    note: "Riyadh · Jeddah · Dammam",
    image:
      "https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?auto=format&fit=crop&w=1200&q=82",
  },
  {
    name: "Europe",
    note: "Selected travel & work routes",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=82",
  },
]

const faqs = [
  {
    question: "Can you book both domestic and international tickets?",
    answer:
      "Yes. Share your preferred route, dates, and passenger count, and the team will check suitable options across domestic and international airlines.",
  },
  {
    question: "Do you guarantee an overseas job?",
    answer:
      "No responsible agency can guarantee selection. A job is confirmed only after the employer issues a written offer and the required visa is approved. We help coordinate the process clearly at every stage.",
  },
  {
    question: "What documents are usually needed for overseas opportunities?",
    answer:
      "Requirements vary by employer and country, but commonly include a passport, photographs, education or trade certificates, experience documents, and medical or police-clearance records.",
  },
  {
    question: "Can you help with visas and travel documents?",
    answer:
      "We can guide you through the documents connected to a confirmed booking or work opportunity and explain which steps must be completed with the relevant authorities.",
  },
]

function BrandMark() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Libi Travels home">
      <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:-rotate-6">
        <PlaneTakeoffIcon className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl tracking-tight">Libi Travels</span>
        <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Travel · Work · Abroad
        </span>
      </span>
    </a>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${BUSINESS_PHONE.replaceAll(" ", "")}`}
            className={buttonVariants({ variant: "ghost" })}
          >
            <PhoneIcon data-icon="inline-start" />
            {BUSINESS_PHONE}
          </a>
          <a href="#enquiry" className={buttonVariants()}>
            Plan a journey
            <ArrowRightIcon data-icon="inline-end" />
          </a>
        </div>
        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" />}>
            <MenuIcon />
            <span className="sr-only">Open navigation</span>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Explore Libi Travels</SheetTitle>
              <SheetDescription>Tickets, travel support, and overseas opportunities.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col px-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <SheetClose
                  key={item.href}
                  className="flex items-center justify-between border-b py-4 text-left text-base font-medium"
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                >
                  {item.label}
                  <ChevronRightIcon className="size-4 text-muted-foreground" />
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-4">
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants(), "w-full")}
              >
                <MessageCircleIcon data-icon="inline-start" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS_PHONE.replaceAll(" ", "")}`}
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
              >
                <PhoneIcon data-icon="inline-start" />
                Call {BUSINESS_PHONE}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function QuoteForm() {
  const [tripType, setTripType] = useState("round-trip")
  const [travelClass, setTravelClass] = useState("economy")

  function requestQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const classLabel = travelClasses.find((item) => item.value === travelClass)?.label
    const details = [
      "Hello Libi Travels, I would like a flight quote.",
      `Trip: ${tripType === "round-trip" ? "Round trip" : "One way"}`,
      `From: ${formData.get("from")}`,
      `To: ${formData.get("to")}`,
      `Departure: ${formData.get("departure")}`,
      `Passengers: ${formData.get("passengers")}`,
      `Class: ${classLabel}`,
    ].join("\n")

    window.open(
      `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(details)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <Card id="enquiry" className="scroll-mt-28">
      <CardHeader>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <CardTitle>Where would you like to go?</CardTitle>
            <CardDescription>Share the basics. We’ll reply with practical flight options.</CardDescription>
          </div>
          <ToggleGroup
            variant="outline"
            value={[tripType]}
            onValueChange={(values) => values[0] && setTripType(values[0])}
            spacing={1}
            aria-label="Choose trip type"
          >
            <ToggleGroupItem value="round-trip">Round trip</ToggleGroupItem>
            <ToggleGroupItem value="one-way">One way</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <form onSubmit={requestQuote}>
        <CardContent>
          <FieldGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Field>
              <FieldLabel htmlFor="from">From</FieldLabel>
              <Input id="from" name="from" placeholder="Kochi" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="to">To</FieldLabel>
              <Input id="to" name="to" placeholder="Dubai" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="departure">Departure</FieldLabel>
              <Input
                id="departure"
                name="departure"
                type="date"
                min={new Date().toISOString().slice(0, 10)}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="passengers">Passengers</FieldLabel>
              <Input id="passengers" name="passengers" type="number" min="1" max="9" defaultValue="1" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="travel-class">Travel class</FieldLabel>
              <Select
                items={travelClasses}
                value={travelClass}
                onValueChange={(value) => setTravelClass(value ?? "economy")}
              >
                <SelectTrigger id="travel-class" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectGroup>
                    {travelClasses.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="mt-5 justify-between gap-4">
          <p className="hidden text-xs text-muted-foreground sm:block">
            No payment needed to request a quote.
          </p>
          <Button type="submit" className="w-full sm:w-auto">
            <MessageCircleIcon data-icon="inline-start" />
            Get quote on WhatsApp
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-14">
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <Badge variant="secondary">
              <Globe2Icon data-icon="inline-start" />
              From Tamil Nadu to the world
            </Badge>
            <h1 className="mt-7 max-w-3xl font-heading text-5xl leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              More than a ticket. <span className="text-accent-foreground">A way forward.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Personal flight booking, travel support, and carefully coordinated overseas job journeys—all with one familiar team by your side.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href="#enquiry" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>
                Book a flight
                <ArrowRightIcon data-icon="inline-end" />
              </a>
              <a
                href="#jobs"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}
              >
                <BriefcaseBusinessIcon data-icon="inline-start" />
                Explore work abroad
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-primary" />
                Human support
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-primary" />
                Clear documents
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-primary" />
                Practical options
              </span>
            </div>
          </div>

          <div className="relative min-h-[31rem] overflow-hidden rounded-[2rem] bg-muted sm:min-h-[38rem]">
            <img
              src="https://images.unsplash.com/photo-1607414851776-f2fcc379fb48?auto=format&fit=crop&w=1600&q=88"
              alt="Dubai skyline glowing at sunset"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-primary-foreground sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                  Popular journey
                </p>
                <p className="mt-2 font-heading text-3xl">Trivandrum to Kuwait</p>
                <p className="mt-1 text-sm text-primary-foreground/75">Tickets, visa guidance & arrival support</p>
              </div>
              <span className="hidden size-14 shrink-0 items-center justify-center rounded-full bg-background text-foreground sm:flex">
                <PlaneIcon className="size-5" />
              </span>
            </div>
            <div className="absolute left-5 top-5 rounded-2xl bg-background/92 p-4 shadow-lg backdrop-blur-md sm:left-7 sm:top-7">
              <div className="flex items-center gap-3">
                <AvatarGroup>
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Traveller" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Traveller" />
                    <AvatarFallback>FM</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Traveller" />
                    <AvatarFallback>JN</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <div>
                  <p className="text-sm font-semibold">People-first service</p>
                  <p className="text-xs text-muted-foreground">A real person, every step</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10 lg:mt-12">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}

function ServiceSection() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">What we do</p>
            <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight sm:text-5xl">
              One trusted desk for two life-changing journeys.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Whether someone is flying home for a holiday or leaving for a new career, the details matter. We keep the process understandable, personal, and connected.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card>
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=82"
              alt="Airplane flying above the clouds"
              className="h-64 w-full object-cover"
            />
            <CardHeader>
              <Badge variant="secondary">Travel desk</Badge>
              <CardTitle className="mt-2 text-2xl">Flight tickets without the guesswork</CardTitle>
              <CardDescription>
                Domestic and international options explained by a person who knows your route and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 sm:grid-cols-2">
                {["One-way & return tickets", "Date-change assistance", "Baggage guidance", "Visa-linked itineraries"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2Icon className="size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#enquiry" className={buttonVariants({ variant: "secondary" })}>
                Request a flight quote
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </CardFooter>
          </Card>

          <Card>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=82"
              alt="A diverse team discussing an opportunity together"
              className="h-64 w-full object-cover"
            />
            <CardHeader>
              <Badge variant="secondary">Overseas opportunities</Badge>
              <CardTitle className="mt-2 text-2xl">A clearer path to working abroad</CardTitle>
              <CardDescription>
                Candidate coordination from requirement and screening through documentation, visa, and departure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 sm:grid-cols-2">
                {["Role requirement checks", "Candidate screening", "Document coordination", "Pre-departure briefing"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2Icon className="size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#jobs" className={buttonVariants({ variant: "secondary" })}>
                See the process
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-14 grid gap-8 border-y py-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: HeadphonesIcon, title: "A real person", text: "Talk to someone who remembers your case." },
            { icon: CircleDollarSignIcon, title: "Clear pricing", text: "Know the fare and service details upfront." },
            { icon: ShieldCheckIcon, title: "Careful process", text: "Important details are checked before you move." },
            { icon: Clock3Icon, title: "Timely updates", text: "Stay informed when your plan changes." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RecruitmentFocus() {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
              Overseas recruitment
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight tracking-tight sm:text-4xl">
              Finding the right people for real roles.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5 lg:items-end">
            <p className="max-w-xl leading-7 text-primary-foreground/65 lg:text-right">
              When an employer shares a requirement, we help source suitable candidates, organize screening, and coordinate the journey from selection to deployment.
            </p>
            <a href="#process" className={cn(buttonVariants({ variant: "secondary" }), "w-fit")}>
              See how recruitment works
              <ArrowRightIcon data-icon="inline-end" />
            </a>
          </div>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {recruitmentSectors.map(({ icon: Icon, title, roles }) => (
            <article key={title} className="bg-primary p-6 sm:p-7">
              <span className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/20">
                <Icon className="size-5" />
              </span>
              <div className="mt-8">
                <h3 className="font-heading text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/60">{roles}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-primary-foreground/15 pt-7 sm:flex-row sm:items-center">
          <Badge variant="secondary">
            <BadgeCheckIcon data-icon="inline-start" />
            Requirement-led hiring
          </Badge>
          <p className="max-w-2xl text-sm leading-6 text-primary-foreground/60 sm:text-right">
            Roles and destinations depend on active employer requirements. Candidate selection is never guaranteed before a written offer.
          </p>
        </div>
      </div>
    </section>
  )
}

function JobsSection() {
  return (
    <section id="jobs" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-muted">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=84"
              alt="People discussing a job opportunity"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground sm:p-9">
              <Badge variant="secondary">
                <BadgeCheckIcon data-icon="inline-start" />
                Document-first approach
              </Badge>
              <p className="mt-5 max-w-md font-heading text-3xl leading-tight sm:text-4xl">
                A career move deserves more than a forwarded message.
              </p>
            </div>
          </div>

          <div>
            <p className="section-kicker">Working abroad</p>
            <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight sm:text-5xl">
              Opportunity with clarity at every checkpoint.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              We connect candidate coordination with the practical work of documentation and travel. The goal is simple: help every person understand what happens next and why.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                { icon: UsersIcon, title: "Candidate screening", text: "Skills, experience, and documents reviewed for the role." },
                { icon: HandshakeIcon, title: "Employer coordination", text: "Interview and selection steps kept organized." },
                { icon: FileCheck2Icon, title: "Offer visibility", text: "Role and contract details reviewed before travel planning." },
                { icon: StampIcon, title: "Visa & departure", text: "Document milestones connected to the joining journey." },
              ].map(({ icon: Icon, title, text }) => (
                <Card key={title} size="sm">
                  <CardHeader>
                    <span className="flex size-9 items-center justify-center rounded-full bg-secondary">
                      <Icon className="size-4" />
                    </span>
                    <CardTitle className="mt-2">{title}</CardTitle>
                    <CardDescription>{text}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-secondary p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-sm leading-6">
                <strong>Important:</strong> Selection is confirmed only through a written employer offer and the required visa approval.
              </p>
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent("Hello Libi Travels, I would like to know about current overseas job requirements.")}`}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants(), "shrink-0")}
              >
                Ask about openings
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">How the journey works</p>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight sm:text-5xl">
            From a real requirement to a ready departure.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Each stage has a purpose. Moving ahead only when the previous checkpoint is clear keeps candidates, families, and employers aligned.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {jobSteps.map((step) => (
            <div key={step.number} className="group relative border-t pt-6">
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-xs font-semibold text-muted-foreground">{step.number}</span>
                <ArrowRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
              <h3 className="mt-8 font-heading text-2xl">{step.title}</h3>
              <p className="mt-3 max-w-sm leading-7 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DestinationsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker">Across borders</p>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl tracking-tight sm:text-5xl">
              Familiar routes. New possibilities.
            </h2>
          </div>
          <p className="max-w-lg leading-7 text-muted-foreground">
            Destination availability depends on flight schedules and active employer requirements. Ask the team for the latest options.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Card key={destination.name}>
              <img src={destination.image} alt={destination.name} className="h-72 w-full object-cover" />
              <CardHeader>
                <CardTitle className="text-xl">{destination.name}</CardTitle>
                <CardDescription>{destination.note}</CardDescription>
              </CardHeader>
              <CardFooter>
                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(`Hello Libi Travels, I would like to know about travel or job options for ${destination.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Ask about this destination
                  <ArrowRightIcon data-icon="inline-end" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
            Good to know
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight sm:text-5xl">
            Questions are part of the journey.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-primary-foreground/65">
            Ask early, keep records, and move forward only when the travel or employment details are clear.
          </p>
          <a
            href={`https://wa.me/${BUSINESS_WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}
          >
            Ask us directly
            <MessageCircleIcon data-icon="inline-end" />
          </a>
        </div>
        <Accordion className="border-t border-primary-foreground/20">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="border-primary-foreground/20">
              <AccordionTrigger className="py-5 text-base text-primary-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-5 leading-7 text-primary-foreground/65">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-secondary px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Badge variant="outline">Let’s start with a conversation</Badge>
              <h2 className="mt-5 max-w-3xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl">
                Your next journey can feel simpler from here.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Tell us where you want to travel—or the kind of overseas role you’re looking for. We’ll help you understand the next practical step.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
                >
                  <MessageCircleIcon data-icon="inline-start" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS_PHONE.replaceAll(" ", "")}`}
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}
                >
                  <PhoneIcon data-icon="inline-start" />
                  Call {BUSINESS_PHONE}
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a href="mailto:hello@libitravels.com" className="flex items-center gap-4 rounded-2xl bg-background p-5 transition-transform hover:-translate-y-0.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MailIcon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="mt-1 font-medium">hello@libitravels.com</p>
                </div>
              </a>
              <a href={BUSINESS_MAPS_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-background p-5 transition-transform hover:-translate-y-0.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPinIcon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Visit</p>
                  <p className="mt-1 font-medium">{BUSINESS_ADDRESS}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Separator />
        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <BrandMark />
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Libi Travels.</p>
        </div>
        <p className="border-t pt-5 text-xs leading-5 text-muted-foreground">
          Overseas employment depends on employer selection, written contract, visa approval, and applicable government requirements. Never make a payment without an official receipt.
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <div className="bg-primary px-5 py-2 text-center text-xs font-medium tracking-wide text-primary-foreground">
        Flight tickets · Travel support · Overseas job coordination
      </div>
      <Header />
      <main>
        <Hero />
        <ServiceSection />
        <RecruitmentFocus />
        <JobsSection />
        <ProcessSection />
        <DestinationsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
