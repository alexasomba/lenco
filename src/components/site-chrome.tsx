import { ArrowUpRight } from '@phosphor-icons/react'

const helpCenterUrl = 'https://support.lenco.co/en/'
const apiDocsUrl = 'https://lenco-api.readme.io/reference/introduction'

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="page-wrap site-header__inner">
        <a
          className="site-brand"
          href="#top"
          aria-label="Lenco Brain (alpha) home"
        >
          <img className="site-brand__logo" src="/lenco-logo.svg" alt="" />
          <span className="site-brand__divider" aria-hidden="true" />
          <span className="site-brand__section">
            Brain <sup className="product-stage">alpha</sup>
          </span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a
            className="site-nav__link"
            href={helpCenterUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Help center
            <ArrowUpRight aria-hidden="true" size={16} weight="bold" />
          </a>
          <a className="site-nav__cta" href="#support-chat">
            Chat
          </a>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap site-footer__inner">
        <div className="site-footer__brand">
          <img
            className="site-footer__logo"
            src="/lenco-logo.svg"
            alt="Lenco"
          />
          <p>Internal tool for Lenco staff.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <a href={helpCenterUrl} rel="noopener noreferrer" target="_blank">
            Browse help articles
            <ArrowUpRight aria-hidden="true" size={16} weight="bold" />
          </a>
          <a href={apiDocsUrl} rel="noopener noreferrer" target="_blank">
            Browse API documentation
            <ArrowUpRight aria-hidden="true" size={16} weight="bold" />
          </a>
          <a href="#top">Back to top</a>
        </nav>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Lenco</span>
          <span>
            Brain <sup className="product-stage">alpha</sup>
          </span>
        </div>
      </div>
    </footer>
  )
}
