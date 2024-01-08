import { Poppins } from 'next/font/google'
import './globals.css'
import AmplifyProvider from '@/utils/providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://poa.idenbrid.com'),
  title:
    'Recruit software engineers from Pakistan with POA | Pakistan Offshore Augmentaiton',
  description:
    'Discover top-tier offshore software development with POA – Pakistan Offshore Augmentation. Specializing in providing cost-effective, high-quality app and web application solutions, we offer flexible hiring of skilled engineers and dedicated teams for your specific project needs. Experience excellence in software development with our process-focused approach, ensuring timely delivery and optimal results. Choose POA for reliable, efficient, and affordable tech solutions tailored to your business.',
  keywords: [
    'POA',
    'Pakistan Offshore Augmentaiton',
    'Engineer Augmentaiton',
    'Pakistan Offshore',
    'Pakistan engineer',
    'Pakistan developer',
    'IT engineer',
    'Offshore development',
    'Software Outsourcing Pakistan',
    'IT Team Pakistan',
    'App Development Pakistan',
    'Web Development Outsourcing',
    'Project Outsourcing',
    'Pakistan IT Solutions',
    'Remote Development Team',
    'Pakistan Software Services',
    'IT Staff Augmentation',
    'Offshore Tech',
    'Offshore Outsourcing',
    'Mobile Development Pakistan',
    'Agile Offshore',
    'Full-Stack Developer Pakistan',
    'Offshore Programming Services',
    'Project-Based IT Hiring',
    'Cost development',
    'Pakistan cost development',
    'Pakistan offshore cost',
    'Pakistan app cost',
  ],
  alternates: {
  canonical: 'https://poa.idenbrid.com',
  },
  openGraph: {
    title: 'Recruit software engineers from Pakistan with POA | Pakistan Offshore Augmentaiton',
    description: `Discover top-tier offshore software development with POA – Pakistan Offshore Augmentation. Specializing in providing cost-effective, high-quality app and web application solutions, we offer flexible hiring of skilled engineers and dedicated teams for your specific project needs. Experience excellence in software development with our process-focused approach, ensuring timely delivery and optimal results. Choose POA for reliable, efficient, and affordable tech solutions tailored to your business.`,
    url: 'https://poa.idenbrid.com',
    siteName: 'Recruit software engineers from Pakistan with POA | Pakistan Offshore Augmentaiton',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{
          padding: 0,
        }}
      >
        <AmplifyProvider>{children}</AmplifyProvider>
      </body>
    </html>
  )
}
