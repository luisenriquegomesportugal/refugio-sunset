import Head from 'next/head';
import { HeaderNavigation } from './header';

export const Page = ({ title, actions, children }) => {
  return <>
    <Head>
      <title>{title} :: Refúgio Lifestyle</title>
    </Head>
    <section className='w-full'>
        <HeaderNavigation current={title} />
        <header className="max-w-7xl border-t border-indigo-700 mx-auto px-6 xl:px-0 pt-10 pb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          {actions}
        </header>
      <main className="max-w-7xl bg-white rounded-lg shadow-2xl -mt-16 p-6 my-10 mx-6 xl:mx-auto">
        {children}
      </main>
    </section>
  </>;
}