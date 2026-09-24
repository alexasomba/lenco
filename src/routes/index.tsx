import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter, SiteHeader } from '#/components/site-chrome'

if (!import.meta.env.SSR) {
  void import('@cloudflare/ai-search-snippet')
}

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="site-shell" id="top">
      <SiteHeader />
      <main className="support-main" id="main-content">
        <div className="page-wrap support-main__inner">
          <section
            aria-label="Lenco support chat"
            className="support-widget"
            id="support-chat"
          >
            <chat-page-snippet
              api-url="https://lenco.theworkflow.dev/"
              hide-branding="true"
            />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
