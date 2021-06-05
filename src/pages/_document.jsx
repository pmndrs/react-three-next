import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;            
              if (typeof DEV_TOOLS === "object") DEV_TOOLS.inject = function () {};
            `,
          }}
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
