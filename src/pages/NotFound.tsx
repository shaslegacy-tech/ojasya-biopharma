import PageTransition from '../components/PageTransition'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Page not found</h2>
        <p className="text-neutral-600 dark:text-neutral-400">The page you requested does not exist.</p>
        <Link to="/" className="inline-block px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
          Go Home
        </Link>
      </div>
    </PageTransition>
  )
}
