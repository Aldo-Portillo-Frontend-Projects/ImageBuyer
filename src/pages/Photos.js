import React from "react"
import {getClass} from '../utils'
import Image from "../components/Image"
import {Context} from "../context/context"

function Photos() {


    const {allPhotos} = React.useContext(Context)

    const renderPhotos = allPhotos.map((photo, index) => {
        return (
            <Image key={photo.id} img={photo} className={getClass(index)} />
        )
    })

    return (
        <main className="photos">
            <h1>Images go here</h1>
            {renderPhotos}
        </main>
    )
}

export default Photos