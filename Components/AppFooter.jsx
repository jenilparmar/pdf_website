import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import FooterLinks from './FooterLink';

const AppFooter = () => {
  return (
<footer className="text-white body-font bg-blue-500">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
  <Link href={'/'} className="flex flex-row">
<Image src={'/image-removebg-preview.png'} width={50} height={70} /> 
          <p className="first-line:text-gray-900 self-center first-line:text-2xl first-line:font-bold text-balance">
            PDFs <br />
            as you want
        </p>
 </Link>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
 <FooterLinks/> 
    </div>
  </div>
 
</footer>
  )
}

export default AppFooter
