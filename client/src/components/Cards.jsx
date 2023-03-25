import React from 'react'
import { CCard, CCardImage, CCardTitle, CCardText, CButton, CCardBody } from '@coreui/react'




export default function Cards() {
    return (
        <div><CCard style={{ width: '18rem' }}>
            <CCardImage orientation="top" width={'10px'} src={'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp'} />
            <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CCardText>
                <CButton href="#">Go somewhere</CButton>
            </CCardBody>
        </CCard></div>
    )
}
