import { STATS } from "../constants";
import { Container } from "../ui/Container";

const DISPLAYED_STATS = STATS.slice(0, 3);

export function StatsBar() {
  return (
    <div className="bg-navy py-10 md:py-12">
      <Container>
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-3 sm:items-stretch sm:gap-0">
          {DISPLAYED_STATS.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 px-4 py-2 ${i < DISPLAYED_STATS.length - 1 ? "sm:border-r sm:border-white/10" : ""}`}
            >
              <span className="font-montserrat font-black text-[clamp(2rem,5vw,2.75rem)] leading-none text-orange">
                {s.value}
              </span>
              <span className="font-eurostile-extended text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
