import CtaCardWithLabel from "./CtaCardWithLabel"

export default function HomeCtasWithLabels() {
  return (
    <section className="max-w-7xl mx-auto px-8">
      <CtaCardWithLabel size="lg" />
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <CtaCardWithLabel size="sm" />
        <CtaCardWithLabel size="sm" />
      </div>
    </section>
  )
}
