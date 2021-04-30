import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="About Page">
      <h1>About Page</h1>
      <Link href="/">Home</Link>
    </Layout>
  )
}
