import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import Image from 'next/image'
export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/pfp.jpeg"
          alt="Picture of the author"
          width={150}
          height={150}
          id='pfp' 
        />
        <h1>Ash's XLR8 Blog</h1>
        <h2>
          Super Fast Blog made with Next.js
          {/* <ExtLink
            href="https://github.com/vercel/next.js/issues/9524"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            SSG
          </ExtLink> */}
        </h2>

        {/* <Features /> */}

        {/* <div className="explanation">
          

          
        </div> */}
      </div>
    </>
  )
}
