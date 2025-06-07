import { Court } from "./Court";

export function CourtReservation() {
  return (
    <div className="flex space-x-2">
      <Court
        courtId="court1"
        name="Court 1"
        isReserved={false}
        onCourtClick={(courtId: string) =>
          console.log(`Court clicked: ${courtId}`)
        }
      />
      <Court
        courtId="court2"
        name="Court 2"
        isReserved={false}
        onCourtClick={(courtId: string) =>
          console.log(`Court clicked: ${courtId}`)
        }
      />
      <Court
        courtId="court3"
        name="Court 3"
        isReserved={false}
        onCourtClick={(courtId: string) =>
          console.log(`Court clicked: ${courtId}`)
        }
      />
    </div>
  );
}
