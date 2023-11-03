'use client'
// import styles from './page.module.css' 
import AppTable from '@/components/app.table';
import appstyle from '@/styles/app.module.css'
import Link from "next/link";
import { useEffect } from 'react';
import useSWR from 'swr';

export default function Home() {
  
  const fetcher = (url: string) => fetch(url)
  .then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
    );
    if (!data) {
      return <div>loading...</div>
    }
  return (
    <div>
      {/* <ul>
        <li className={appstyle['red']}>
          <Link href="/facebook">
            <span className={appstyle['red']}>Facebook</span>
          </Link>
        </li>
        <li>
          <a href="/youtube">Youtube</a>
        </li>
        <li>
          <a href="/github">Github</a>
        </li>
      </ul> */}
      <title>Home</title>
      <meta name="description" content="This is my basic project Next." />
        <AppTable blogs={data?.sort((a:any, b:any)=> b.id-a.id)} />
    </div>
  )
}
