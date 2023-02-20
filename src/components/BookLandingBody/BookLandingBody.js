import React from 'react'
import { AuthorInformation } from '../AuthorInformation/AuthorInformation'
import { BookInfo } from '../BookInfo/BookInfo'
import { CharactersInfo } from '../CharactersInfo/CharactersInfo'
import { ContactInfo } from '../ContactInfo/ContactInfo'
import { CoverPage } from '../CoverPage/CoverPage'
import { Features } from '../Features/Features'
import { Journal } from '../Journal/Journal'

export const BookLandingBody = () => {
  return (
    <>
        <CoverPage/>
        <BookInfo/>
        <CharactersInfo/>
        <AuthorInformation/>
        <Features/>
        <Journal/>
        <ContactInfo/>
    </>
  )
}
