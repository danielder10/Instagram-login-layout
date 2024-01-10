import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Login - Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./Instagram_icon.ico" />
      </Head>
 <main className={styles.main}>                       
      
    <div id="wrapper">
    <div class="main-content">
          <div class="header">
            <img src="Instagram-logo.png" />
          </div>
          <div class="l-part">
            <input type="text" placeholder="Username" class="input-1" />
            <div class="overlap-text">
              <input type="password" placeholder="Password" class="input-2" />
              <a href="#">Forgot?</a>
            </div>
            <input type="button" value="Log in" class="btn" />
          </div>
        </div>
        <div class="sub-content">
          <div class="s-part">
            Don't have an account?<a href="#">Sign up</a>
          </div>
        </div>
      </div>
</main>
  </>
  )
  }
