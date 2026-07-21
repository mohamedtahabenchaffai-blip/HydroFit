import Link from "next/link";

const links = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "Technology", href: "#technology" },
      { label: "Benefits", href: "#benefits" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Lifestyle", href: "#lifestyle" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-12">
      {links.map((group) => (
        <div key={group.title}>
          <h3 className="mb-5 text-lg font-bold text-white">
            {group.title}
          </h3>

          <ul className="space-y-3">
            {group.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-zinc-400 transition hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}