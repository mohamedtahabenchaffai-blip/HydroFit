import Container from "@/components/layout/Container";
import ProductBackground from "./ProductBackground";
import ProductHeader from "./ProductHeader";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function Product() {
  return (
    <section
      id="product"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}
      <ProductBackground />

      <Container className="relative z-10">
        <ProductHeader />

        <div className="mt-20">
          <ProductImage />
        </div>

        <div className="mt-16">
          <ProductInfo />
        </div>
      </Container>
    </section>
  );
}