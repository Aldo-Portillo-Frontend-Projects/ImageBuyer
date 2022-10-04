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

        console.log(cart)
        
    }


    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    

    return(
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

