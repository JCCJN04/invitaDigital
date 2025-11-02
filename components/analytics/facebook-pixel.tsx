"use client"

import Script from "next/script"

export function FacebookPixel() {
  // Reemplaza 'YOUR_PIXEL_ID' con tu Facebook Pixel ID
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "YOUR_PIXEL_ID"

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}

// Hook para trackear eventos personalizados en Facebook
export const trackFBEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    ;(window as any).fbq("track", eventName, eventParams)
  }
}

// Eventos predefinidos
export const trackFBLead = (planName?: string) => {
  trackFBEvent("Lead", {
    content_name: planName || "General Inquiry",
    currency: "MXN",
  })
}

export const trackFBInitiateCheckout = (planName: string, value: number) => {
  trackFBEvent("InitiateCheckout", {
    content_name: planName,
    value: value,
    currency: "MXN",
  })
}

export const trackFBAddToCart = (planName: string, value: number) => {
  trackFBEvent("AddToCart", {
    content_name: planName,
    value: value,
    currency: "MXN",
  })
}

export const trackFBContact = (method: string) => {
  trackFBEvent("Contact", {
    contact_method: method,
  })
}
