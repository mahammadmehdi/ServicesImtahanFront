import React, { createContext, useState } from 'react'

export const WishlistContext = createContext()
const [wishlist, setWishlist] = useState([])
function WishlistProvider({children}) {

    function addWishlist(item) {
        const index = wishlist.findIndex((x)=>x.id === item.id)
        if (index === -1) {
            setWishlist([...wishlist,{...item}])
            return
        }
        else{
            removeWishlist(item)
        }
    }
    function removeWishlist(item) {
        setWishlist(wishlist.filter((x)=>x.id !==item.id))
    }
  return (
    <WishlistContext.Provider>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider