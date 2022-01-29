import React, {PropsWithChildren} from 'react'

type ImgProps = PropsWithChildren<{ name: string, className?: string, imageWidth?: number, imageHeight?: number, title?: string, id?: string }>

export function Img({name, className, imageWidth, imageHeight, title, id}: ImgProps) {

    return <img alt={`${name} not found`} src={require(`./../../resources/images/${name}`)}
                width={imageWidth || undefined}
                height={imageHeight || undefined}
                id={id || undefined}
                className={className} title={title}/>
}



