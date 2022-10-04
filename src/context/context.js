import { func } from 'prop-types'
import React from 'react'
const Context = React.createContext()

function ContextProvider ({children}) {
    const [allPhotos, setAllPhotos] = React.useState([])

    const [cart, setCart] = React.useState([])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id){
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    } 


    function addToCart(obj) {
        setCart(prevCart => {
            return [
                ...prevCart,
                obj
            ]
        })
        
    }

    function removeFromCart (id) {
        setCart(prevItems => prevItems.filter(item => item.id !== id))

    }

    function emptyCart () {
        setCart([])
    }


    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    

    return(
        <Context.Provider value={{allPhotos, toggleFavorite, cart, addToCart, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

