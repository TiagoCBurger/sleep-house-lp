import type { Metadata } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Sleep House | As melhores marcas para o seu sono",
  description:
    "Curadoria internacional e atendimento consultivo para encontrar o colchão ideal.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jost.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://scripts.clarity.ms" />
      </head>
      <body className="flex min-h-full flex-col">
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59ZH4XS2');`}
        </Script>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xf937n4l49");`}
        </Script>
        <Script id="sleep-house-conversion-events" strategy="afterInteractive">
          {`window.addEventListener('click',function(event){
  var link=event.target.closest('[data-cta]');
  if(link){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'sleep_house_cta_click',cta:link.getAttribute('data-cta'),destination:link.getAttribute('href')});}
});
document.addEventListener('submit',function(event){
  var form=event.target.closest('[data-lead-form]');
  if(form){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'sleep_house_form_submit',form_origin:form.getAttribute('data-form-origin')});}
});`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59ZH4XS2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
