export const TOOGLE_PRODUCT_MODAL='TOOGLE_PRODUCT_MODAL'
export const TOOGLE_ORDER_MODAL='TOOGLE_ORDER_MODAL'

export function toogleProductModal(){
    return {
        type:TOOGLE_PRODUCT_MODAL,
        
    }
}


export function toogleOrderModal(order){
    return {
        type:TOOGLE_ORDER_MODAL,
    }
}