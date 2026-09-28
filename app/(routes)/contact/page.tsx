import ContainerPage from "@/components/container";
import ContactSection from "@/components/contact-section";
import LiquidBackground from "@/components/liquid-background";

const ContactPage = () => (
  <main id="main-content" className="relative isolate bg-my-green-950">
    <LiquidBackground variant="contact" />

    <div className="relative z-10">
      <ContainerPage>
        <header className="reading-surface mx-auto mb-10 max-w-2xl text-center">
          <h1 className="section-title mb-4 text-center">
            Hablemos de tu{" "}
            <span className="font-bold text-tamarillo-400">proyecto</span>
          </h1>
          <p className="text-base leading-relaxed text-gray-200">
            Cuéntame qué necesitas o qué oportunidad tienes en mente. Puedes
            escribirme por WhatsApp, correo o LinkedIn.
          </p>
        </header>

        <ContactSection />
      </ContainerPage>
    </div>
  </main>
);

export default ContactPage;
