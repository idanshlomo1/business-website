import React from 'react'
import Hero from '../components/Hero'
import TinyLeadForm from '../components/TinyLeadForm'
import WhyUs from '../components/WhyUs'
import Clients from '../components/Clients'
import Responsibilty from '../components/Responsibilty'
import ReadMore from '../components/ReadMore'

const HomePage = () => {
    return (
        <div >
            <Hero />
            <WhyUs />
            <TinyLeadForm />
            <Responsibilty />
            <Clients />
            <ReadMore links={[
                { text: 'שיווק דיגיטלי', link: '/DigitalMarketing' },
                { text: 'Digicard - כרטיס ביקור דיגיטלי', link: '/Digicard' },
                { text: 'מיתוג', link: '/Branding' }
            ]} />


        </div>
    )
}

export default HomePage