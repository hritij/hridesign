import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import logo from '../assets/hri_white.jpg'
import BookMeetingForm from '@/components/forms/bookMeeting'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<nav className="flex justify-around items-center">
				<Image src={logo} width={100} />
				<div className="w-1/2 hidden md:block">
					<div className="flex justify-around flex-grow">
						<div>Design gallery</div>
						<div>Services</div>
						<div>About Us</div>
					</div>
				</div>
				<div>
					<Link href="/quote">
						<button className="px-3 py-2 bg-red-400 text-white rounded-md hover:bg-red-600">Get Free Quote</button>
					</Link>
				</div>
			</nav>
			<BookMeetingForm />
		</>
	)
}
