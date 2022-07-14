import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";

export const handle = { hydrate: false };

export const meta: MetaFunction = () => {
  const title = "Frontend Mentor | Product preview card component";
  const description =
    "A floral, solar and voluptuous interpretation composed by Olivier Polge,Perfumer-Creator for the House of CHANEL.";
  const image = "/images/ppc/desktop-preview.jpg";
  return {
    title,
    description,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "twitter:card": "summary_large_image",
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Montserrat:wght@500;700&display=swap",
    },
  ];
};

export default function ProductPreviewCard() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center text-sm bg-[color:var(--ppc-primary-cream)] font-['Montserrat'] font-medium">
      <article className="w-full max-w-2xl m-4 bg-white min-h-[450px] rounded-xl grid grid-rows-5 sm:grid-rows-1 sm:grid-cols-2 sm:gap-x-1 overflow-hidden">
        <div className="row-span-2 bg-[image:var(--ppc-mobile-image)] sm:bg-[image:var(--ppc-desktop-image)] w-full bg-cover bg-no-repeat"></div>
        <div className="row-span-3 px-5 py-6 sm:px-7 sm:py-8 text-[color:var(--ppc-neutral-gray-blue)] m-auto">
          <span className="inline-block mb-5 tracking-[5px] uppercase text-xs sm:text-sm">Perfume</span>
          <h1 className="font-['Fraunces'] text-[color:var(--ppc-neutral-dark-blue)] text-3xl sm:text-4xl mb-6">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mb-10 text-sm leading-relaxed sm:tracking-[1px] sm:mb-8">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of
            CHANEL.
          </p>
          <div className="flex items-center w-full mb-5 sm:mb-8">
            <span className="font-['Fraunces'] text-3xl text-[color:var(--ppc-primary-dark-cyan)]">$149.99</span>
            <span className="inline-block ml-8 line-through">$169.99</span>
          </div>
          <Form>
            <button className="flex items-center hover:bg-[#194031] bg-[color:var(--ppc-primary-dark-cyan)] text-white p-4 rounded-xl w-full justify-center text-lg font-bold">
              <span className="flex items-center justify-center w-4 h-4 mr-4">
                <img src="/images/ppc/icon-cart.svg" alt="cart icon" className="w-4 h-4" />
              </span>
              Add to Cart
            </button>
          </Form>
        </div>
      </article>
    </main>
  );
}

// 671x480
