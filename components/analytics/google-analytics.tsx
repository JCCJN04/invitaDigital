"use client"

import Script from "next/script"

export function GoogleAnalytics() {
  // Reemplaza 'G-XXXXXXXXXX' con tu ID de Google Analytics
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Hook para trackear eventos personalizados
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, eventParams)
  }
}

// Eventos predefinidos para tracking
export const trackWhatsAppClick = (location: string) => {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: location,
  })
}

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submission", {
    event_category: "conversion",
    event_label: formName,
  })
}

export const trackPlanSelection = (planName: string, price: string) => {
  trackEvent("select_plan", {
    event_category: "conversion",
    event_label: planName,
    value: price,
  })
}

export const trackGalleryView = (designTitle: string) => {
  trackEvent("view_design", {
    event_category: "engagement",
    event_label: designTitle,
  })
}
