import Head from 'next/head'
import About from './about'
import Demo from './demo'
import Info from './info'
import Button from './../components/Button'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <style>
        </style>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <About></About>
        <hr />
        <Button></Button>
        <hr />
        <Demo></Demo>
        <hr />
        <Info name="Vu Minh Tien" age="18" address="Sai Gon">
          {/* Có thể truyền cả thẻ trong props children */}
          <ul>
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
        </Info>
      </main>
    </div>
  )
}
