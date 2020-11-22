

export const addProduct = (product) => ({
    type : 'ADD_PRODUCT',
    target:product
});

export const removeProduct = (product) => ({
    type : 'REMOVE_PRODUCT',
    productId : product
});

export const UpdateList =(list)=>({
    type:"UPDATE_LIST",
    target:list
})

export const UpdateResponse=(response)=>({
    type:"ADD_RESPONSE",
    target:response
})

export  const UpdateDifference=(response)=>({
    type:"UPDATE_DIFFERENCE",
    target:response
})