'use client'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useSWR from "swr";
import Link from 'next/link';
import styles from '@/styles/app.module.css';

const HomePage = () => {

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

    return (
       <Row>
        {data?.slice(0, 3)?.map((blog: IBlog) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Col>
                    
                    </Col>
               )
        })}
       </Row>

    )
}

export default HomePage;