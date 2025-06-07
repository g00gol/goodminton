export type CourtProps = {
  courtId: string;
  name: string;
  size?: "small" | "medium" | "large";
  isReserved?: boolean;
  onCourtClick?: (courtId: string) => void;
};
