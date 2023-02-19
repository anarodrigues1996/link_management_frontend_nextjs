import Link from 'next/link';
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <div>
          <Head>
            <title>Link manegement</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
          </Head>
          <div className="container">
            <ul className="nav">
              <li className="nav-item">
                <Link href="/" className="nav-link">Links</Link>
              </li>
              <li className="nav-item">
                <Link href="/createlink" className="nav-link">Criar</Link>
              </li>
            </ul>
            {children}
          </div>
        </div>
      )
  }