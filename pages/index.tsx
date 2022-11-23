import Head from "next/head";
import { MeshBadge } from "@martifylabs/mesh-react";
import { fetchProtocolParameters } from "../backend";
import { useState } from "react";

export default function Home() {
  const [results, setResults] = useState<string | null>(null);

  async function getProtocolParameters() {
    const res = await fetchProtocolParameters();
    setResults(JSON.stringify(res, null, 2));
  }

  return (
    <div className="container">
      <Head>
        <title>Mesh App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <link
          rel="icon"
          href="https://mesh.martify.io/favicon/favicon-32x32.png"
        />
        <link
          href="https://mesh.martify.io/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Head>

      <main className="main">
        <h1 className="title">
          <a href="https://mesh.martify.io/">Mesh</a> with Blockfrost Backend
        </h1>

        <div className="demo">
          <button type="button" onClick={() => getProtocolParameters()}>
            getProtocolParameters()
          </button>
          {results && <code>{results}</code>}
        </div>

        <div className="grid">
          <a href="https://mesh.martify.io/apis" className="card">
            <h2>Documentation</h2>
            <p>
              Our documentation provide live demos and code samples; great
              educational tool for learning how Cardano works.
            </p>
          </a>

          <a href="https://mesh.martify.io/guides" className="card">
            <h2>Guides</h2>
            <p>
              Whether you are launching a new NFT project or ecommerce store,
              these guides will help you get started.
            </p>
          </a>

          <a href="https://mesh.martify.io/react" className="card">
            <h2>React components</h2>
            <p>
              Useful React UI components and hooks, seamlessly integrate them
              into your app, and bring the user interface to life.
            </p>
          </a>
        </div>
      </main>

      <footer className="footer">
        <MeshBadge dark={true} />
      </footer>
    </div>
  );
}
