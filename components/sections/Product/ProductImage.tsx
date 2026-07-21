import Image from "next/image";
import FloatingCard from "./FloatingCard";
import { productFeatures } from "./productData";

export default function ProductImage() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Bottle */}
        <Image
          src="/images/bottle.png"
          alt="HydroFit Bottle"
          width={420}
          height={650}
          priority
          className="relative z-10 object-contain drop-shadow-[0_20px_60px_rgba(34,211,238,0.25)]"
        />

        {/* Floating Cards */}
        {productFeatures.map((feature) => {
          const positions = {
            "top-left": "-left-20 top-8",
            "top-right": "-right-20 top-16",
            "bottom-left": "-left-20 bottom-20",
            "bottom-right": "-right-20 bottom-8",
          };

          return (
            <div
              key={feature.id}
              className={`absolute ${
                positions[
                  feature.position as keyof typeof positions
                ]
              }`}
            >
              <FloatingCard
                title={feature.title}
                description={feature.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}