/**
 * FAQ content shared between the homepage preview, the full FAQ page,
 * and FAQPage structured data. Answers stick to what has actually
 * been confirmed; anything policy-specific that hasn't been
 * confirmed (pickup/delivery, exact turnaround, etc.) is phrased as
 * "ask M.S. directly" rather than an invented yes/no.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How much does furniture reupholstery cost?",
    answer:
      "It depends on the piece — the type of furniture, its size, its condition, the amount of labour involved, and the material you choose all affect the price. There's no set price list because every project is different. Send photos through our free estimate form and M.S. will give you a preliminary estimate based on what they see.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. Call M.S. or submit the free estimate form with a description and photos of your furniture, and they'll get back to you with a preliminary estimate. Final pricing is confirmed after a closer look at the piece.",
  },
  {
    question: "Can I send photos instead of bringing the furniture in?",
    answer:
      "Yes — photos are the easiest way to start. Clear photos from a few angles, including any damaged or worn areas, help M.S. understand the project and provide a more useful preliminary estimate.",
  },
  {
    question: "Do you repair furniture as well as reupholster it?",
    answer:
      "Yes, we handle both. Some furniture just needs new fabric or vinyl; other pieces need repair work — such as addressing sagging seats or replacing cushion fill — either instead of or alongside reupholstery. We'll assess what your piece actually needs.",
  },
  {
    question: "Do you work with vinyl?",
    answer:
      "Yes. Vinyl is a common choice for restaurant seating, commercial furniture, and other high-use, easy-to-clean environments, and it's also available for residential projects.",
  },
  {
    question: "Do you upholster dining chairs?",
    answer:
      "Yes — dining chairs are one of the most common projects we take on, from a single seat that's torn to a full set that needs updating.",
  },
  {
    question: "Do you work on restaurant seating?",
    answer:
      "Yes. We work with restaurants, cafés and bars on chairs, booth seating and benches, and try to coordinate projects in a way that minimizes disruption to your business.",
  },
  {
    question: "Can you work with fabric I supply myself?",
    answer:
      "In many cases, yes — bring it up when you contact us so M.S. can confirm it's suitable for your piece before work begins.",
  },
  {
    question: "How long does upholstery take?",
    answer:
      "Turnaround depends on the size and complexity of the project, current workload, and material availability. M.S. will give you a realistic timeframe once they've reviewed your project — we'd rather tell you an honest estimate than promise a turnaround we can't guarantee.",
  },
  {
    question: "Can you restore older or vintage furniture?",
    answer:
      "Often, yes. Older furniture — especially solid-wood or well-built pieces — can be a strong candidate for restoration. Send photos and M.S. will let you know what's realistic for your piece.",
  },
  {
    question: "Is reupholstery cheaper than buying new furniture?",
    answer:
      "It depends on the furniture and the scope of work. Reupholstery isn't automatically cheaper than replacement, but for a piece you already own and value — especially one with a solid frame — restoration can be a practical alternative to buying new. We'll be upfront with you either way.",
  },
  {
    question: "Do you serve areas outside St. Catharines?",
    answer:
      "St. Catharines is our primary service area. We serve surrounding Niagara communities as well — contact us to confirm availability for your specific location before booking.",
  },
  {
    question: "Do you offer pickup and delivery?",
    answer:
      "Ask M.S. directly when you get in touch — pickup and delivery availability can depend on the project and your location.",
  },
  {
    question: "What types of furniture do you not work on?",
    answer:
      "It's easiest to send a photo and ask. Some pieces aren't good candidates for restoration due to their condition or construction, and M.S. will tell you plainly if that's the case for yours rather than taking on a project that doesn't make sense.",
  },
];
