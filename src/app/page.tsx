import styles from './page.module.css';
import IndexBg from '@/components/IndexBackground';
import AppButtons from '@/components/Homepage/AppButtons';
import GithubLinks from '@/components/Homepage/GithubLinks';
import AppLink from '@/components/common/AppLink';
import { WebVitals } from '@/components/web-vitals';

export default async function Home() {
  return (
    <main className={styles.main}>
      <IndexBg />
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Yeti&apos;s blog
      </h1>
      <AppButtons />
      <GithubLinks />
      <div className={styles.appLinks}>
        <AppLink href="/blog" title="Blog" />
        <AppLink href="/junt" title="Junt" />
      </div>
      <WebVitals />
    </main>
  );
}
