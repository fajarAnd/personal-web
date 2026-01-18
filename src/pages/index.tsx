import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Web - Home</title>
        <meta name="description" content="Professional web developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-primary-dark text-text-primary">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-h1">Personal Web</h1>
          <p className="text-body mt-4">
            Welcome to Personal Web - Setup Complete!
          </p>
        </div>
      </main>
    </>
  )
}
