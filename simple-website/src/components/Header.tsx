import Head from "next/head";

interface Props {
  header: string;
  headerTextClassName: string;
}

export default function Header({ header, headerTextClassName }: Props) {
  return (
    <>
      <Head>
        <title>This is head of your page</title>
        <link rel="icon" href="/images/meow-popcorn.gif" />
      </Head>
      <header className="ml-6 max-w-screen-xl bg-gray body-font border-b border-gray-200">
        <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-800 dark:text-gray-100 mb-4 md:mb-0">
            <span className={headerTextClassName}>{header}</span>
          </div>
        </div>
      </header>
    </>
  );
}
