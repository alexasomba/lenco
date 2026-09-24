import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type ChatSnippetElementAttributes = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  'api-url': string
  'hide-branding'?: boolean | string
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'chat-page-snippet': ChatSnippetElementAttributes
      'chat-bubble-snippet': ChatSnippetElementAttributes
    }
  }
}
