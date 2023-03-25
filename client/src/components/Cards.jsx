import React from 'react'
import { CCard, CCardImage, CCardTitle, CCardText, CButton, CCardBody } from '@coreui/react'

export default function Cards() {
    return (
        <div><CCard style={{ width: '18rem' }}>
            <CCardImage orientation="top" width={'10px'} src={'https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/article/2019/03/27/merchandising-fresh-produce-shoppers-seek-more-snack-sized-and-local-options/9303073-1-eng-GB/Merchandising-fresh-produce-Shoppers-seek-more-snack-sized-and-local-options.jpg'} />
            <CCardBody>
                <CCardTitle>Produce</CCardTitle>
                <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CCardText>
                <CButton href="#">Go somewhere</CButton>
            </CCardBody>
        </CCard></div>
    )
}
