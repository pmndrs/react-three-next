import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const { pathname } = ctx
    const lang = pathname.startsWith('/jp') ? 'jp' : 'en'
    return { ...initialProps, lang }
  }

  render() {
    const { lang } = this.props
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
