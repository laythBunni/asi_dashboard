// app/page.tsx – complete, fully‑closed JSX, typed & lint‑clean

"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  ReactElement,
} from "react";

/*************************************************
 * Shared prop helpers
 *************************************************/
interface WithChildren {
  children?: ReactNode;
  className?: string;
}
interface SectionProps extends WithChildren {
  id?: string;
  title?: string;
  emoji?: ReactNode;
  bg?: string;
}
interface TabsProps extends WithChildren {
  defaultValue: string;
}
interface TabsTriggerProps extends WithChildren {
  value: string;
}
interface TabsContentProps extends WithChildren {
  value: string;
}

/*************************************************
 * Minimal Card UI
 *************************************************/
const Card = ({ className = "", children }: WithChildren): ReactElement => (
  <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ className = "", children }: WithChildren): ReactElement => <div className={`p-4 ${className}`}>{children}</div>;
const CardTitle = ({ className = "", children }: WithChildren): ReactElement => <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
const CardContent = ({ className = "", children }: WithChildren): ReactElement => <div className={`p-4 pt-0 ${className}`}>{children}</div>;

/*************************************************
 * Ultra‑light Tabs (future use)
 *************************************************/
interface TabCtx {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}
const TabContext = createContext<TabCtx | undefined>(undefined);

const Tabs = ({ defaultValue, children }: TabsProps): ReactElement => {
  const [active, setActive] = useState<string>(defaultValue);
  return <TabContext.Provider value={{ active, setActive }}>{children}</TabContext.Provider>;
};
const TabsList = ({ children }: WithChildren): ReactElement => <div className="inline-flex gap-2 rounded-lg bg-gray-100 p-1">{children}</div>;
const TabsTrigger = ({ value, children }: TabsTriggerProps): ReactElement => {
  const ctx = useContext(TabContext)!;
  const isActive = ctx.active === value;
  return (
    <button
      type="button"
      onClick={() => ctx.setActive(value)}
      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${isActive ? "bg-primary-600 text-white" : "text-gray-700 hover:bg-gray-200"}`}
    >
      {children}
    </button>
  );
};
const TabsContent = ({ value, children, className = "" }: TabsContentProps): ReactElement | null => {
  const ctx = useContext(TabContext)!;
  if (ctx.active !== value) return null;
  return <div className={className}>{children}</div>;
};

/*************************************************
 * Static data (swap with API later)
 *************************************************/
const currentUser = { firstName: "Jalpa" };

const quickLinks = [
  { id: 1, title: "Access ASI OS", icon: "🚀", href: "#" },
  { id: 2, title: "Submit Timelog", icon: "⏱️", href: "#" },
  { id: 3, title: "Submit Expense", icon: "💸", href: "#" },
  { id: 4, title: "See my Approvals", icon: "✅", href: "#" },
  { id: 5, title: "See my Tickets", icon: "🎫", href: "#" },
] as const;

const alerts = [{ id: 1, message: "🎉 Onboarding v2 is now live!" }];

type AiItem = {
  id: number;
  name: string;
  description: ReactNode;
  status: string;
  gradient: string;
};

const aiHubItems: AiItem[] = [
  {
    id: 1,
    name: "Chat with My Assistant",
    description: (
      <>
        Real‑time AI chat for everyday work.
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>SOPs for projects</li>
          <li>General questions</li>
          <li>Project AI Hub access</li>
        </ul>
      </>
    ),
    status: "Live",
    gradient: "from-indigo-500 to-sky-500",
  },
  {
    id: 2,
    name: "AI‑Curated ASI Knowledge",
    description: "Searchable knowledge base auto‑curated from ASI docs and data.",
    status: "Beta",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    id: 3,
    name: "Prompt Library",
    description: "Curated, shareable prompts for analysts.",
    status: "Stable",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    id: 4,
    name: "Data‑Copilot",
    description: "Conversational BI dashboards & SQL helper.",
    status: "Alpha",
    gradient: "from-purple-600 to-red-500",
  },
  {
    id: 5,
    name: "Tools",
    description: (
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>IR35 Check</li>
        <li>Merge PDFs</li>
        <li>Create Images</li>
        <li>Create Presentations</li>
      </ul>
    ),
    status: "Bundle",
    gradient: "from-orange-500 to-amber-500",
  },
];

/*************************************************
 * Section wrapper
 *************************************************/
const Section = ({ id, title, emoji, bg = "bg-white", children }: SectionProps): ReactElement => (
  <section id={id} className={`${bg} py-20`}>
    <div className="container mx-auto px-4">
      {title && (
        <h2 className="mb-10 flex items-center gap-3 text-3xl font-semibold">
          {emoji} {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

/*************************************************
 * Layout components
 *************************************************/
const TopBanner = (): ReactElement => (
  <header className="bg-white border-b py-6 shadow-sm">
    <h1 className="text-center text-4xl font-extrabold text-gray-900">Adam Smith International Dashboard</h1>
  </header>
);

const AlertBar = (): ReactElement | null =>
  alerts.length ? <div className="w-full bg-primary-600 text-white text-sm py-2 text-center">{alerts[0].message}</div> : null;

const HeroSection = (): ReactElement => (
  <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-fuchsia-700 text-white">
    <div className="container mx-auto px-4 py-24 grid gap-12 lg:grid-cols-2 items-center">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold">Hello, {currentUser.firstName}!</h2>
        <p className="text-lg opacity-90 max-w-prose">What would you like to do today?</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-4">
          {quickLinks.map(({ id, title, icon, href }) => (
            <a
              key={id}
              href={href}
              className="flex flex-col items-center gap-2 rounded-xl bg-white/20 p-4 text-center hover:bg-white/30"
            >
              <span className="text-2xl lg:text-3xl">{icon}</span>
              <span className="text-sm font-medium text-white leading-tight">{title}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          className="rounded-3xl shadow-2xl"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop"
          alt="Team working"
        />
      </div>
    </div>
  </section>
);

const AIHubSection = (): ReactElement => (
  <Section id="aihub" title="AI Hub" emoji="🤖">
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
      {aiHubItems.map(({ id, name, description, status, gradient }) => (
        <Card key={id} className={`text-white bg-gradient-to-br ${gradient} hover:shadow-xl transition-shadow`}>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            {typeof description === "string" ? <p className="text-sm opacity-90 mb-4">{description}</p> : description}
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs mt-4 capitalize">{status}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const HelpSupportSection = (): ReactElement => {
  const items = [
    { id: 1, title: "Contact Support", icon: "💬" },
    { id: 2, title: "Submit an Issue", icon: "📝" },
    { id: 3, title: "Browse Help Articles", icon: "❓" },
  ];
  return (
    <Section id="support" title="Help & Support" emoji="🛟" bg="bg-gray-50">
      <div className="grid md:grid-cols-3 gap-8">
        {items.map(({ id, title, icon }) => (
          <Card key={id} className="flex flex-col items-center p-8 hover:shadow-lg transition-shadow">
            <span className="text-4xl mb-3">{icon}</span>
            <span className="font-medium text-center leading-snug">{title}</span>
          </Card>
        ))}
      </div>
    </Section>
  );
};

/*************************************************
 * Page export (App Router)
 *************************************************/
export default function LandingPage(): ReactElement {
  return (
    <main className="font-sans text-gray-900">
      <TopBanner />
      <AlertBar />
      <HeroSection />
      <AIHubSection />
      <HelpSupportSection />
    </main>
  );
}
