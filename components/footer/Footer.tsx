'use client'
import React, { useEffect } from 'react'
import styles from '../../styles/Footer.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
    useEffect(()=>{
        console.log("Fetch call from useeffect-Footer");
        fetch('https://fakestoreapi.com/products')
    },[]);
    console.log("Footer");
  return (
    <div className={styles.downdiv}>@FooterPageComm</div>
  )
}
