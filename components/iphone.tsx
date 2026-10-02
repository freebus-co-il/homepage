import Image from "next/image";

export type Screen = { src: string; alt: string };

// A Space Black iPhone drawn in CSS around full-screen simulator captures.
// The captures already have the status bar and Dynamic Island, so the frame
// only adds the metal band, the bezel and the side buttons. Given several
// screens it stacks them and crossfades to `active`.
export function IPhone({ screens, active = 0 }: { screens: Screen[]; active?: number }) {
  return (
    <div className="iphone">
      <span className="iphone-btn action" />
      <span className="iphone-btn vol-up" />
      <span className="iphone-btn vol-down" />
      <span className="iphone-btn power" />
      <span className="iphone-btn camera" />
      <div className="iphone-frame">
        <div className="iphone-bezel">
          <div className="iphone-screens">
            {screens.map((s, i) => (
              <Image
                key={s.src}
                className="iphone-screen"
                src={s.src}
                width={640}
                height={1391}
                alt={i === active ? s.alt : ""}
                aria-hidden={i !== active}
                data-active={i === active}
                sizes="300px"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
