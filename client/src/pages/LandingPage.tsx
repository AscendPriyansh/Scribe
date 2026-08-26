/**
 * Quiet Library Systems — all page presentation is intentionally expressed as Tailwind utilities.
 * The design uses #111111/#FAFAFA for structure, with only compact red and green action signals.
 */
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookMarked,
  BookOpen,
  BookmarkPlus,
  Check,
  ChevronRight,
  Clock3,
  Command,
  FileUp,
  FolderHeart,
  Layers3,
  Library,
  Menu,
  MessageCircle,
  Moon,
  Search,
  Sparkles,
  Sun,
  Tags,
  UploadCloud,
  UsersRound,
  X,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const productScreens = [
  { label: "01 / Library overview", title: "Everything worth keeping, in one place.", copy: "Sort books, essays, course material, and field notes into a library that stays useful long after you save it.", image: "/manus-storage/scribe-library-dashboard_76b0fa92.png", alt: "Scribe library dashboard mockup showing books, collections, and reading activity." },
  { label: "02 / Reading context", title: "A book page that carries the context with it.", copy: "Keep the important details close: author, summary, collections, and your next page, without turning reading into administration.", image: "/manus-storage/scribe-book-detail_693dc27e.png", alt: "Scribe book details mockup with a cover, reading progress, and collection information." },
  { label: "03 / Contribution flow", title: "Make sharing knowledge feel considered.", copy: "A focused upload flow helps contributors add clear details, useful categories, and reliable context before a resource reaches the community.", image: "/manus-storage/scribe-upload-flow_db2034bc.png", alt: "Scribe upload workflow mockup with file drop zone, category tags, and book details fields." },
];

const problems = [
  { icon: Layers3, number: "01", title: "Scattered resources", copy: "Books and learning materials are spread across different platforms, folders, and forgotten tabs." },
  { icon: FolderHeart, number: "02", title: "Lost collections", copy: "Personal libraries grow quickly, then become difficult to organise, retrieve, and actually use." },
  { icon: UsersRound, number: "03", title: "Limited sharing", copy: "Useful resources often remain invisible to the people who would value them most." },
];

const features = [
  { icon: UploadCloud, title: "Upload books", copy: "Bring essential resources into one dependable home.", meta: "INBOX / 12 FILES", trace: 42 },
  { icon: Search, title: "Discover content", copy: "Find books and collections through a calmer search experience.", meta: "INDEX / 4,290 ITEMS", trace: 76 },
  { icon: Library, title: "Organise your library", copy: "Make personal shelves, themed collections, and saved filters.", meta: "SHELF / 08 ACTIVE", trace: 61 },
  { icon: BarChart3, title: "Track reading progress", copy: "Return to the right page with an honest reading trace.", meta: "TRACE / 132 PAGES", trace: 68 },
  { icon: MessageCircle, title: "Share knowledge", copy: "Add a useful resource to a growing knowledge commons.", meta: "NOTES / 24 SHARED", trace: 49 },
  { icon: Tags, title: "Build collections", copy: "Group ideas by subject, purpose, class, project, or curiosity.", meta: "TAGS / 16 LINKED", trace: 84 },
];

const steps = [
  { number: "01", state: "PRIVATE / YOUR SHELF", title: "Create your account", copy: "Start with a personal library that is private by default and ready to grow." },
  { number: "02", state: "FIND / ADD CONTEXT", title: "Discover or upload books", copy: "Explore thoughtful collections, or add a resource with the context it deserves." },
  { number: "03", state: "RETURN / SHARE", title: "Read, organise, and share", copy: "Build a reading practice that gives useful knowledge a durable home." },
];

const shell = "mx-auto w-full max-w-[1280px] px-5 sm:px-8";
const mono = "font-mono text-[10px] font-medium tracking-[0.06em]";
const eyebrow = `${mono} uppercase text-[#111111]/55 dark:text-[#FAFAFA]/55`;
const outlineButton = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#111111]/20 bg-transparent px-4 text-[13px] font-bold text-[#111111] transition duration-200 hover:-translate-y-0.5 hover:border-[#111111] dark:border-[#FAFAFA]/25 dark:text-[#FAFAFA] dark:hover:border-[#FAFAFA]";
const primaryButton = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#111111] px-5 text-[13px] font-bold text-[#FAFAFA] transition duration-200 hover:-translate-y-0.5 hover:opacity-80 active:scale-[.98] dark:bg-[#FAFAFA] dark:text-[#111111]";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo({ showMark = true }: { showMark?: boolean }) {
  return (
    <Link className="inline-flex items-center gap-2.5 text-[#111111] dark:text-[#FAFAFA]" to="/" aria-label="Scribe home">
      {showMark && <img src="/manus-storage/scribe-logo-mark_1060d0e5.png" alt="" className="h-9 w-9 object-contain grayscale contrast-125 dark:invert" />}
      <span className="text-[17px] font-extrabold tracking-[0.105em]">SCRIBE</span>
      <span className="font-mono text-[9px] tracking-[0.075em] text-[#111111]/50 dark:text-[#FAFAFA]/50">THE DIGITAL LIBRARY</span>
    </Link>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button className="inline-flex h-9 items-center gap-2 rounded-full border border-[#111111]/20 px-3 font-mono text-[10px] tracking-wide text-[#111111] transition hover:border-[#FF3B30] active:scale-95 dark:border-[#FAFAFA]/25 dark:text-[#FAFAFA]" onClick={() => toggleTheme?.()} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      {isDark ? <Sun size={14} /> : <Moon size={14} />}<span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const placeholder = (label: string) => toast(`${label} is coming soon`, { description: "The landing experience is ready; this product workflow is the next chapter." });
  const navigate = (id: string) => { setMenuOpen(false); scrollToSection(id); };

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#FAFAFA] text-[#111111] transition-colors duration-200 dark:bg-[#111111] dark:text-[#FAFAFA]">
      <header className="sticky top-0 z-40 border-b border-[#111111]/10 bg-[#FAFAFA]/90 backdrop-blur-xl dark:border-[#FAFAFA]/15 dark:bg-[#111111]/90">
        <div className={`${shell} flex h-[73px] items-center justify-between gap-4`}>
          <Logo showMark={false} />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {[["Home", "top"], ["Library", "library"], ["Features", "features"], ["Community", "community"]].map(([label, id]) => <button key={id} className="rounded-lg px-3 py-2 text-[13px] font-semibold text-[#111111]/75 transition hover:bg-[#111111]/5 hover:text-[#111111] dark:text-[#FAFAFA]/75 dark:hover:bg-[#FAFAFA]/10 dark:hover:text-[#FAFAFA]" onClick={() => navigate(id)}>{label}</button>)}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link className="hidden items-center gap-1.5 rounded-lg border border-[#111111]/20 bg-[#FAFAFA] px-3 py-2 text-[12px] font-bold text-[#111111] shadow-sm transition hover:-translate-y-0.5 hover:border-[#111111] lg:inline-flex dark:border-[#FAFAFA]/25 dark:bg-[#111111] dark:text-[#FAFAFA] dark:hover:border-[#FAFAFA]" to="/auth/login">Sign in</Link>
            <Link className="hidden items-center gap-1.5 rounded-lg bg-[#111111] px-3 py-2 text-[12px] font-bold text-[#FAFAFA] shadow-sm transition hover:-translate-y-0.5 hover:opacity-85 lg:inline-flex dark:bg-[#FAFAFA] dark:text-[#111111]" to="/auth/register">Sign up</Link>
            <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#111111]/20 lg:hidden dark:border-[#FAFAFA]/25" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={19} /> : <Menu size={20} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-[#111111]/10 bg-[#FAFAFA] px-5 pb-4 pt-2 dark:border-[#FAFAFA]/15 dark:bg-[#111111] lg:hidden" aria-label="Mobile navigation">{[["Home", "top"], ["Library", "library"], ["Features", "features"], ["Community", "community"]].map(([label, id]) => <button key={id} className="flex w-full items-center justify-between border-b border-[#111111]/10 py-3 text-left text-[13px] font-bold dark:border-[#FAFAFA]/15" onClick={() => navigate(id)}>{label}<ChevronRight size={16} /></button>)}</nav>}
      </header>

      <main>
        <section className="relative isolate overflow-hidden border-b border-[#111111]/10 py-20 sm:py-28 dark:border-[#FAFAFA]/15">
          <div className="pointer-events-none absolute -right-28 top-6 h-72 w-72 rounded-full border border-[#111111]/10 dark:border-[#FAFAFA]/10" />
          <div className={`${shell} grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]`}>
            <div className="max-w-[590px]">
              <p className={`${eyebrow} flex items-center gap-2`}><span className="h-2 w-2 rounded-full bg-[#FF3B30]" />00 / A knowledge workspace for readers</p>
              <h1 className="mt-6 max-w-[620px] text-[clamp(3.2rem,6vw,5.8rem)] font-extrabold leading-[.92] tracking-[-.075em]">Your digital library, built for knowledge.</h1>
              <p className="mt-7 max-w-[510px] text-[15px] leading-7 text-[#111111]/65 dark:text-[#FAFAFA]/65">Discover, organise, and share books in one beautifully designed platform. Scribe gives every reader and contributor a modern home for meaningful resources.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link className={primaryButton} to="/dashboard/books">Browse the library <ArrowRight size={17} /></Link><Link className={outlineButton} to="/dashboard/books/create"><UploadCloud size={16} /> Upload a book</Link></div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-medium tracking-wide text-[#111111]/50 dark:text-[#FAFAFA]/50"><span className="inline-flex items-center gap-1.5"><Command size={13} /> Thoughtful by default</span><span className="inline-flex items-center gap-1.5"><BookMarked size={13} /> Made for long-term learning</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-[730px]">
              <div className="absolute -left-3 -top-5 z-10 flex items-center gap-2 rounded-lg border border-[#111111]/15 bg-[#FAFAFA]/95 px-3 py-2 font-mono text-[10px] shadow-sm dark:border-[#FAFAFA]/20 dark:bg-[#111111]/95"><Sparkles size={13} />14 new finds</div>
              <div className="absolute -right-2 bottom-10 z-10 flex items-center gap-2 rounded-lg border border-[#111111]/15 bg-[#FAFAFA]/95 px-3 py-2 font-mono text-[10px] shadow-sm dark:border-[#FAFAFA]/20 dark:bg-[#111111]/95"><span className="h-1.5 w-10 overflow-hidden rounded-full bg-[#111111]/15 dark:bg-[#FAFAFA]/15"><i className="block h-full w-[72%] rounded-full bg-[#00C853]" /></span>72% through</div>
              <div className="relative overflow-hidden rounded-xl border border-[#111111]/20 bg-[#FAFAFA] shadow-[0_26px_60px_rgba(17,17,17,.13)] dark:border-[#FAFAFA]/25 dark:bg-[#111111] dark:shadow-[0_26px_60px_rgba(0,0,0,.38)]">
                <div className="flex h-9 items-center gap-1.5 border-b border-[#111111]/10 px-3 dark:border-[#FAFAFA]/15"><i className="h-1.5 w-1.5 rounded-full bg-[#FF3B30]" /><i className="h-1.5 w-1.5 rounded-full bg-[#00C853]" /><i className="h-1.5 w-1.5 rounded-full bg-[#111111]/25 dark:bg-[#FAFAFA]/25" /><span className="ml-3 rounded bg-[#111111]/5 px-3 py-1 font-mono text-[9px] text-[#111111]/45 dark:bg-[#FAFAFA]/10 dark:text-[#FAFAFA]/45">scribe.app / library</span></div>
                <img src="/manus-storage/scribe-hero-workspace_5a3099f1.png" alt="Scribe dashboard with personal bookshelf, search, reading progress, and upload controls." className="block aspect-video w-full object-cover grayscale contrast-[.97] dark:brightness-[.86]" />
              </div>
              <div className="absolute -right-7 top-28 -z-10 hidden items-end gap-1.5 rotate-[6deg] lg:flex"><i className="h-40 w-3 rounded-t bg-[#111111] dark:bg-[#FAFAFA]" /><i className="h-32 w-3 rounded-t bg-[#00C853]" /><i className="h-36 w-3 rounded-t bg-[#FF3B30]" /><i className="h-28 w-3 rounded-t bg-[#111111] dark:bg-[#FAFAFA]" /></div>
            </div>
          </div>
          <button className="absolute bottom-6 left-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.06em] text-[#111111]/50 sm:left-8 lg:left-[max(32px,calc((100%-1216px)/2+32px))] dark:text-[#FAFAFA]/50" onClick={() => navigate("problem")}>Scroll to discover <ArrowDown size={15} /></button>
        </section>

        <section id="problem" className="bg-[#FAFAFA] py-24 dark:bg-[#111111] sm:py-32"><div className={shell}>
          <div className="grid gap-7 md:grid-cols-[220px_1fr]"><div className={eyebrow}><span className="text-[#111111] dark:text-[#FAFAFA]">01</span><span className="mx-2 inline-block h-px w-6 align-middle bg-current" />The friction</div><div><p className={eyebrow}>A reading life deserves a better system</p><h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[.98] tracking-[-.07em]">Knowledge is everywhere, but managing it is difficult.</h2></div></div>
          <div className="mt-16 grid border-l border-t border-[#111111]/15 sm:grid-cols-3 dark:border-[#FAFAFA]/15">{problems.map(({ icon: Icon, number, title, copy }) => <article key={number} className="group min-h-[280px] border-b border-r border-[#111111]/15 p-7 dark:border-[#FAFAFA]/15"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-lg border border-[#111111]/15"><Icon size={19} /></span><span className={eyebrow}>{number}</span></div><h3 className="mt-10 text-[19px] font-extrabold tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-[260px] text-[13px] leading-6 text-[#111111]/65 dark:text-[#FAFAFA]/65">{copy}</p><span className="mt-8 block h-[3px] w-9 bg-[#111111] transition-all group-hover:w-16 dark:bg-[#FAFAFA]" /></article>)}</div>
        </div></section>

        <section id="features" className="bg-[#111111] py-24 text-[#FAFAFA] sm:py-32"><div className={shell}>
          <div className="grid gap-10 lg:grid-cols-[200px_1fr]"><aside className="flex items-start justify-between lg:flex-col"><div className={`${eyebrow} text-[#FAFAFA]/55`}><span className="text-[#FAFAFA]">02</span><span className="mx-2 inline-block h-px w-6 align-middle bg-current" />The system</div><div className="hidden h-28 w-24 flex-col justify-between bg-[#FAFAFA] p-4 text-[#111111] lg:flex"><BookOpen size={24} /><span className="font-mono text-[11px] font-bold leading-none">Read<br />well.</span></div></aside>
            <div><p className={`${eyebrow} text-[#FAFAFA]/55`}>One place, more possibility</p><h2 className="mt-4 text-[clamp(2.6rem,5vw,4.7rem)] font-extrabold leading-[.98] tracking-[-.075em]">A modern library experience for everyone.</h2><p className="mt-6 max-w-[570px] text-[15px] leading-7 text-[#FAFAFA]/65">Scribe combines reading, organisation, and community sharing into one seamless platform — so your next useful idea is never far from reach.</p>
              <div className="mt-14 grid border-l border-t border-[#FAFAFA]/15 sm:grid-cols-2 xl:grid-cols-3">{features.map(({ icon: Icon, title, copy, meta, trace }) => <article key={title} className="relative min-h-[220px] border-b border-r border-[#FAFAFA]/15 p-6 transition hover:bg-[#FAFAFA]/5"><span className="grid h-9 w-9 place-items-center rounded-md bg-[#FAFAFA] text-[#111111]"><Icon size={18} /></span><h3 className="mt-7 text-[15px] font-extrabold">{title}</h3><p className="mt-2 max-w-[220px] text-[12px] leading-5 text-[#FAFAFA]/60">{copy}</p><div className="absolute bottom-5 left-6 right-6 flex items-center justify-between gap-3"><span className="font-mono text-[8px] tracking-[.045em] text-[#FAFAFA]/45">{meta}</span><span className="h-[3px] w-10 overflow-hidden rounded bg-[#FAFAFA]/20"><i className="block h-full bg-[#FAFAFA]" style={{ width: `${trace}%` }} /></span></div><ArrowUpRight className="absolute right-5 top-5 text-[#FAFAFA]" size={16} /></article>)}</div>
            </div></div>
        </div></section>

        <section id="library" className="py-24 dark:bg-[#111111] sm:py-32"><div className={shell}>
          <div className="grid gap-7 lg:grid-cols-[200px_1fr_290px] lg:items-end"><div className={eyebrow}><span className="text-[#111111] dark:text-[#FAFAFA]">03</span><span className="mx-2 inline-block h-px w-6 align-middle bg-current" />In practice</div><div><p className={eyebrow}>Designed around the work of learning</p><h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[.98] tracking-[-.07em]">Your library, in motion.</h2></div><p className="text-[13px] leading-6 text-[#111111]/65 dark:text-[#FAFAFA]/65">A collection is only useful when it helps you find your next step. Scribe keeps your library useful at every scale.</p></div>
          <div className="mt-16">{productScreens.map((screen, index) => <article key={screen.title} className={`grid gap-8 border-t border-[#111111]/15 py-12 dark:border-[#FAFAFA]/15 lg:grid-cols-[285px_1fr] lg:items-center lg:gap-16 ${index === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}><div><span className={`${eyebrow} text-[#111111]/65 dark:text-[#FAFAFA]/65`}>{screen.label}</span><h3 className="mt-4 max-w-[280px] text-[26px] font-extrabold leading-[1.08] tracking-[-.055em]">{screen.title}</h3><p className="mt-4 text-[13px] leading-6 text-[#111111]/65 dark:text-[#FAFAFA]/65">{screen.copy}</p><button className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold underline-offset-4 hover:underline" onClick={() => placeholder("Product preview")}>See how it works <ArrowRight size={15} /></button></div><div className="overflow-hidden rounded-xl border border-[#111111]/20 bg-[#FAFAFA] shadow-[0_18px_45px_rgba(17,17,17,.09)] dark:border-[#FAFAFA]/20 dark:bg-[#111111] dark:shadow-[0_18px_45px_rgba(0,0,0,.32)]"><img src={screen.image} alt={screen.alt} className="block aspect-[16/8.25] w-full object-cover grayscale contrast-[.97] dark:brightness-[.86]" /></div></article>)}</div>
        </div></section>

        <section id="workflow" className="bg-[#F4F4F2] py-24 dark:bg-[#171717] sm:py-32"><div className={shell}>
          <div className="grid gap-7 lg:grid-cols-[200px_1fr_290px] lg:items-end"><div className={eyebrow}><span className="text-[#111111] dark:text-[#FAFAFA]">04</span><span className="mx-2 inline-block h-px w-6 align-middle bg-current" />The rhythm</div><div><p className={eyebrow}>A practical path from find to finish</p><h2 className="mt-4 text-[clamp(2.5rem,4.7vw,4.2rem)] font-extrabold leading-[.98] tracking-[-.07em]">How Scribe works.</h2></div><p className="text-[13px] leading-6 text-[#111111]/65 dark:text-[#FAFAFA]/65">Clear enough to start in an afternoon. Deep enough to become the place your learning life lives.</p></div>
          <div className="mt-14 grid gap-3 border-y border-[#111111]/15 py-4 sm:grid-cols-[210px_1fr_200px] dark:border-[#FAFAFA]/15"><div className={`${eyebrow} flex justify-between`}><span>READING ROUTE</span><span>01—03</span></div><div className="grid grid-cols-3 gap-2"><span className="h-[3px] bg-[#111111] dark:bg-[#FAFAFA]" /><span className="h-[3px] bg-[#111111] dark:bg-[#FAFAFA]" /><span className="h-[3px] bg-[#00C853]" /></div><span className={`${eyebrow} text-left sm:text-right`}>FIND · KEEP · RETURN</span></div>
          <div className="grid border-l border-t border-[#111111]/15 sm:grid-cols-3 dark:border-[#FAFAFA]/15">{steps.map((step) => <article key={step.number} className="min-h-[240px] border-b border-r border-[#111111]/15 p-6 dark:border-[#FAFAFA]/15"><span className="grid h-9 w-9 place-items-center rounded-full border border-[#111111]/20 font-mono text-[10px] dark:border-[#FAFAFA]/25">{step.number}</span><span className="mt-7 inline-block border border-[#111111]/15 px-2 py-1 font-mono text-[8px] tracking-[.055em] text-[#111111]/55 dark:border-[#FAFAFA]/20 dark:text-[#FAFAFA]/55">{step.state}</span><h3 className="mt-5 text-[18px] font-extrabold tracking-[-.04em]">{step.title}</h3><p className="mt-3 max-w-[260px] text-[12px] leading-5 text-[#111111]/65 dark:text-[#FAFAFA]/65">{step.copy}</p><span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wide text-[#111111]/50 dark:text-[#FAFAFA]/50"><BookMarked size={12} /> Keep the thread</span></article>)}</div>
        </div></section>

        <section id="contributors" className="bg-[#FAFAFA] py-24 dark:bg-[#111111] sm:py-32"><div className={`${shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center`}>
          <div className="border-l border-[#111111] pl-6 dark:border-[#FAFAFA]"><div className={eyebrow}><span className="text-[#111111] dark:text-[#FAFAFA]">05</span><span className="mx-2 inline-block h-px w-6 align-middle bg-current" />For contributors</div><p className={`${eyebrow} mt-5`}>Give useful work a longer life</p><h2 className="mt-4 text-[clamp(2.6rem,5vw,4.7rem)] font-extrabold leading-[.98] tracking-[-.075em]">Share knowledge with thousands of readers.</h2><p className="mt-6 max-w-[520px] text-[15px] leading-7 text-[#111111]/65 dark:text-[#FAFAFA]/65">Upload your books and resources, organise your collection, and contribute to a growing knowledge community without losing your own point of view.</p><Link to="/dashboard/books/create" className={`${primaryButton} mt-7`}>Share a resource <ArrowRight size={17} /></Link><div className="mt-7 grid max-w-[370px] grid-cols-[auto_1fr_auto] items-center gap-3 font-mono text-[8px] tracking-[.05em] text-[#111111]/50 dark:text-[#FAFAFA]/50"><span>YOUR SHELF</span><span className="h-[3px] overflow-hidden rounded bg-[#111111]/15 dark:bg-[#FAFAFA]/15"><i className="block h-full w-[72%] bg-[#111111] dark:bg-[#FAFAFA]" /></span><span>SHARED SHELF</span></div></div>
          <div className="overflow-hidden rounded-lg border border-[#111111]/20 bg-[#FAFAFA] shadow-[0_20px_45px_rgba(17,17,17,.10)] dark:border-[#FAFAFA]/20 dark:bg-[#111111] dark:shadow-[0_20px_45px_rgba(0,0,0,.35)]"><div className="h-1 bg-[#111111] dark:bg-[#FAFAFA]" /><div className="flex items-center justify-between border-b border-[#111111]/15 px-5 py-4 dark:border-[#FAFAFA]/15"><span className="inline-flex items-center gap-2 text-[12px] font-bold"><FileUp size={16} /> Contributor toolkit</span><span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wide text-[#00C853]"><i className="h-1.5 w-1.5 rounded-full bg-[#00C853]" />READY</span></div><div className="flex justify-between border-b border-[#111111]/15 bg-[#111111]/[.025] px-5 py-3 font-mono text-[8px] tracking-[.05em] text-[#111111]/50 dark:border-[#FAFAFA]/15 dark:bg-[#FAFAFA]/[.04] dark:text-[#FAFAFA]/50"><span>RESOURCE INDEX / 04</span><span>CONTEXT FIRST</span></div><div className="px-5">{[["01", "Easy uploads", "Bring in a resource with structure, not friction."], ["02", "Content management", "Keep a useful collection coherent as it grows."], ["03", "Reader engagement", "Let people find resources through thoughtful context."], ["04", "Community contribution", "Add value to the shared shelf, one resource at a time."]].map(([number, title, copy]) => <div className="grid grid-cols-[24px_1fr_18px] gap-3 border-b border-[#111111]/10 py-5 last:border-0 dark:border-[#FAFAFA]/15" key={number}><span className="font-mono text-[10px] text-[#111111]/55 dark:text-[#FAFAFA]/55">{number}</span><div><h3 className="text-[13px] font-extrabold">{title}</h3><p className="mt-1 text-[11px] leading-5 text-[#111111]/60 dark:text-[#FAFAFA]/60">{copy}</p></div><Check className="self-center text-[#00C853]" size={16} /></div>)}</div><div className="flex items-center justify-between border-t border-[#111111]/15 bg-[#111111]/[.025] px-5 py-4 font-mono text-[10px] text-[#111111]/55 dark:border-[#FAFAFA]/15 dark:bg-[#FAFAFA]/[.04] dark:text-[#FAFAFA]/55"><span>Built for generous knowledge sharing.</span><BookmarkPlus size={16} /></div></div>
        </div></section>

        <section id="community" className="bg-[#FAFAFA] py-24 dark:bg-[#111111] sm:py-32"><div className={`${shell} grid items-center gap-14 lg:grid-cols-[1fr_.87fr]`}>
          <div className="relative h-[360px] overflow-hidden rounded-xl border border-[#111111]/15 bg-[#F4F4F2] dark:border-[#FAFAFA]/15 dark:bg-[#171717]"><div className="absolute left-1/2 top-12 flex h-28 -translate-x-1/2 items-end gap-1.5 border-b-[6px] border-[#111111] px-3 dark:border-[#FAFAFA]"><i className="h-20 w-6 rounded-t bg-[#111111] dark:bg-[#FAFAFA]" /><i className="h-24 w-6 rounded-t bg-[#111111] dark:bg-[#FAFAFA]" /><i className="h-16 w-6 rounded-t bg-[#111111] dark:bg-[#FAFAFA]" /><i className="h-22 w-6 rounded-t bg-[#111111] dark:bg-[#FAFAFA]" /></div><div className="absolute bottom-12 left-1/2 flex h-28 -translate-x-1/2 items-end gap-1.5 border-b-[6px] border-[#111111] px-3 dark:border-[#FAFAFA]"><i className="h-20 w-7 rounded-t bg-[#111111] dark:bg-[#FAFAFA]" /><i className="h-24 w-7 rounded-t bg-[#111111] dark:bg-[#FAFAFA]" /><i className="h-17 w-7 rounded-t bg-[#111111] dark:bg-[#FAFAFA]" /></div><span className="absolute left-[12%] top-[13%] grid h-10 w-10 place-items-center rounded-full border border-[#111111]/20 bg-[#FAFAFA] text-[#00C853] shadow-sm dark:border-[#FAFAFA]/20 dark:bg-[#111111]"><MessageCircle size={17} /></span><span className="absolute right-[11%] top-[40%] grid h-10 w-10 place-items-center rounded-full border border-[#111111]/20 bg-[#FAFAFA] text-[#FF3B30] shadow-sm dark:border-[#FAFAFA]/20 dark:bg-[#111111]"><UsersRound size={17} /></span><span className="absolute bottom-7 right-6 font-mono text-[10px] tracking-[.07em] text-[#111111]/45 dark:text-[#FAFAFA]/45">KNOWLEDGE<br />SHARED</span></div>
          <div><div className={eyebrow}><span className="text-[#111111] dark:text-[#FAFAFA]">06</span><span className="mx-2 inline-block h-px w-6 align-middle bg-current" />The commons</div><p className={`${eyebrow} mt-6`}>A library powered by people</p><h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[.98] tracking-[-.07em]">The more we share, the more we can find.</h2><p className="mt-6 max-w-[480px] text-[15px] leading-7 text-[#111111]/65 dark:text-[#FAFAFA]/65">Scribe connects readers and contributors through shared knowledge and resources. Every collection can be a doorway into a better question.</p><div className="mt-7 flex flex-wrap gap-2">{["Discussions", "Recommendations", "Collections", "Reading notes"].map((label) => <span key={label} className="rounded-full border border-[#111111]/15 bg-transparent px-3 py-2 font-mono text-[10px] text-[#111111]/65 dark:border-[#FAFAFA]/20 dark:text-[#FAFAFA]/65">{label}</span>)}</div></div>
        </div></section>

        <section className="bg-[#FAFAFA] pb-20 dark:bg-[#111111]"><div className={shell}><div className="relative overflow-hidden rounded-2xl bg-[#111111] px-6 py-20 text-center text-[#FAFAFA] sm:px-10 sm:py-24"><div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-[#FAFAFA]"><img src="/manus-storage/scribe-logo-mark_1060d0e5.png" alt="" className="h-8 w-8 grayscale contrast-125" /></div><div className={`${eyebrow} mt-7 text-[#FAFAFA]/55`}><span className="text-[#FAFAFA]">07</span><span className="mx-2 inline-block h-px w-6 align-middle bg-current" />Return to shelf</div><p className={`${eyebrow} mt-5 text-[#FAFAFA]/55`}>A place to return to</p><h2 className="mx-auto mt-4 max-w-[800px] text-[clamp(2.8rem,5vw,5rem)] font-extrabold leading-[.95] tracking-[-.075em]">Build the library you return to.</h2><div className="mt-8 flex flex-wrap justify-center gap-3"><Link className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FAFAFA] px-5 text-[13px] font-bold text-[#111111] transition hover:opacity-85" to="/dashboard/home">Organize your library <ArrowRight size={17} /></Link><Link className="inline-flex min-h-11 items-center rounded-full border border-[#FAFAFA]/30 px-5 text-[13px] font-bold transition hover:bg-[#FAFAFA]/10" to="/dashboard/books">Browse the shelves</Link></div><span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] text-[#FAFAFA]/55"><Clock3 size={13} /> Keep every useful thing you read within reach.</span></div></div></section>
      </main>

      <footer className="border-t border-[#111111]/10 bg-[#F4F4F2] py-14 dark:border-[#FAFAFA]/15 dark:bg-[#171717]"><div className={`${shell} grid gap-12 lg:grid-cols-[1.1fr_1.9fr]`}><div><Logo /><p className="mt-5 max-w-[270px] text-[12px] leading-5 text-[#111111]/60 dark:text-[#FAFAFA]/60">A calm, capable home for every book and resource that shapes your thinking.</p><span className="mt-6 block font-mono text-[10px] text-[#111111]/45 dark:text-[#FAFAFA]/45">© 2026 Scribe Library</span></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{[["Product", ["Features", "Library", "Reading progress"]], ["Resources", ["Guides", "Help centre", "Scribe notes"]], ["Community", ["Collections", "Contributors", "Discussions"]], ["Company", ["About", "Careers", "Contact"]]].map(([group, links]) => <div key={group as string} className="flex flex-col items-start gap-3"><h3 className="mb-1 text-[11px] font-extrabold">{group as string}</h3>{(links as string[]).map((label) => <button key={label} className="text-left text-[11px] font-medium text-[#111111]/60 transition hover:text-[#111111] dark:text-[#FAFAFA]/60 dark:hover:text-[#FAFAFA]" onClick={() => placeholder(label)}>{label}</button>)}</div>)}</div></div></footer>
    </div>
  );
}
