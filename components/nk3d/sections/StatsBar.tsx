import { STATS } from "../constants";
import { Container } from "../ui/Container";

export function StatsBar() {
  return (
    <div className="bg-navy py-7">
      <Container>
        <div className="grid grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`text-center px-4 ${i < 3 ? "border-r border-white/10" : ""}`}
            >
              <p className="font-montserrat font-black text-[32px] text-orange m-0 leading-none">
                {s.value}
              </p>
              <p className="font-montserrat text-[12px] text-white/60 mt-1 m-0">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}