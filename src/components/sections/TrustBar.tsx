import Container from "@/components/ui/Container";
import { CheckIcon, HandshakeIcon, MapPinIcon, PhoneIcon } from "@/components/ui/Icons";

const points = [
  {
    icon: <HandshakeIcon />,
    title: "Deal directly with M.S.",
    body: "No call centre, no sales team — you talk to the person doing the work.",
  },
  {
    icon: <MapPinIcon />,
    title: "Local to St. Catharines",
    body: "Focused on homeowners and businesses across St. Catharines and Niagara.",
  },
  {
    icon: <CheckIcon />,
    title: "Free estimates",
    body: "Send photos or call for a straightforward, no-obligation estimate.",
  },
  {
    icon: <PhoneIcon />,
    title: "Residential & commercial",
    body: "Family furniture, restaurant seating, offices and waiting rooms alike.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-b border-tan-light bg-paper py-10" aria-label="Why customers choose us">
      <Container>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <li key={p.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-tan-light text-lg text-brown">
                {p.icon}
              </span>
              <div>
                <p className="font-semibold text-charcoal">{p.title}</p>
                <p className="text-sm text-charcoal-soft">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
