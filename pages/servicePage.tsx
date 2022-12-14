import type { NextPage } from 'next'
import Head from 'next/head'
import { Menu } from '../src/component/Menu'
import  BarMenu  from '../src/component/BarMenu'

import { Service } from '../src/component/Service'
import { Footer } from '../src/component/Footer'
import { Container } from '@mui/material';
import { Modal } from '../src/component/Modal'
import { SpecialOffers } from '../src/component/specialOffers'

import { SelectService } from '../src/component/SelectService'
import { useState } from 'react'
import ServiceServices from '../src/component/serviceServices'


const ServicePage: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showTradeInModal, setShowTradeInModal] = useState(false)
    return (
      <>
        <Head>
          <title>OPEL APKOHT SERVICE</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <Menu />
          <BarMenu />

          <Service  setShowModal={setShowModal} />
          <SpecialOffers />
          <SelectService setShowModal={setShowModal} />
          <ServiceServices setShowModal={setShowModal}  />

          <Footer />
          {
          showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
          }
     </>
    )
}
export default ServicePage