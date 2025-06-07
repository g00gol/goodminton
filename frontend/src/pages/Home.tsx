import { CourtReservation } from "@/components/CourtReservation";
import { Court } from "@/components/CourtReservation/Court";
import { ThemeToggle } from "@/components/ThemeToggler";

export function Home() {
  return (
    <div>
      <ThemeToggle />
      <Court
        courtId="court1"
        name="Court 1"
        isReserved={false}
        onCourtClick={(courtId: string) =>
          console.log(`Court clicked: ${courtId}`)
        }
      />
      <CourtReservation />
    </div>
  );
}
