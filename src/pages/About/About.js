import React from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'

const Description = styled.p`
  padding: 50px 500px;
`

const About = () => {
  return (
    <>
      <Title text="About our brand" />
      <Description>
        <strong>«YOURDESIGN»: PAR MŪSU VEIKALU</strong>
        <br /> <br /> Mūsu veikala vēsture sākās vienkārši ar hobiju un ideju
        krāsot uz somām.Vienmēr vēlējos ienest kaut ko interesantu veikalos
        nopērkamo produktu ikdienas dizainā. Pamanot, ka šī ideja ir pieprasīta,
        nolēmu atvērt biznesu un dot iespēju iegādāties sev ko neparastu.
        Iepriecini sevi un savu ģimeni. Produkti vienmēr ir augstas kvalitātes,
        mīksti un patīkami pieskarties. Es vienmēr uzklausu jūs un jūsu
        viedokli, uzlabojot produktu.
      </Description>
    </>
  )
}

export default About
