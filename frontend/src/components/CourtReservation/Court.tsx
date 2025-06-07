import type { CourtProps } from "./types";

const COURT_SIZES = {
  small: { width: 200, height: 300 },
  medium: { width: 250, height: 350 },
  large: { width: 300, height: 400 },
};

export function Court({
  courtId,
  name,
  size = "small",
  isReserved = false,
  onCourtClick,
}: CourtProps) {
  const { width, height } = COURT_SIZES[size];

  function handleClick() {
    if (onCourtClick) {
      onCourtClick(courtId);
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="cursor-pointer rounded-lg border transition-shadow hover:shadow-lg"
      onClick={handleClick}
    >
      {/* Court background */}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        className={`${isReserved ? "fill-destructive/10" : "fill-primary/10"} stroke-border`}
        strokeWidth="2"
        rx="8"
      />

      {/* Playing area */}
      <rect
        x="20"
        y="20"
        width={width - 40}
        height={height - 40}
        fill="none"
        className="stroke-foreground"
        strokeWidth="3"
      />

      {/* Center line */}
      <line
        x1="20"
        y1={height / 2}
        x2={width - 20}
        y2={height / 2}
        className="stroke-foreground"
        strokeWidth="2"
      />

      {/* Service lines */}
      <line
        x1="20"
        y1={height * 0.3}
        x2={width - 20}
        y2={height * 0.3}
        className="stroke-foreground"
        strokeWidth="2"
      />
      <line
        x1="20"
        y1={height * 0.7}
        x2={width - 20}
        y2={height * 0.7}
        className="stroke-foreground"
        strokeWidth="2"
      />

      {/* Center service line */}
      <line
        x1={width / 2}
        y1={height * 0.3}
        x2={width / 2}
        y2={height * 0.7}
        className="stroke-foreground"
        strokeWidth="2"
      />

      {/* Net */}
      <line
        x1="15"
        y1={height / 2}
        x2={width - 15}
        y2={height / 2}
        className="stroke-muted-foreground"
        strokeWidth="4"
      />

      {/* Court name */}
      <text
        x={width / 2}
        y="35"
        textAnchor="middle"
        className="fill-foreground text-sm font-semibold"
        fontSize="14"
      >
        {name}
      </text>

      {/* Status indicator */}
      <circle
        cx={width - 30}
        cy="30"
        r="8"
        className={isReserved ? "fill-destructive" : "fill-primary"}
      />
    </svg>
  );
}
