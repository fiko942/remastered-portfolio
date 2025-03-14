import { useEffect, useState } from "react"
import app from '../constants/app'
import dayjs from "dayjs"

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false)

    const onResize = () => { 
        setIsMobile(app.screen.isMobile())
    }

    useEffect(() => {
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <footer className="h-[50px] bg-white shadow-gray-500 shadow-sm inset-shadow-zinc-500">
            {isMobile && (
                <div className="mx-auto flex w-fit items-center justify-center h-full">
                    <CopyrightText />
                </div>
            )}
            {!isMobile && (
                <div className="mx-auto flex w-full items-center h-full px-4">
                    <CopyrightText />
                </div>
            )}
        </footer>
    )
}

function CopyrightText() {
    return (
        <div className="text whitespace-nowrap text-gray-500 text-sm w-fit gap-1.5 max-w-full overflow-hidden text-ellipsis">
            Created with ❤️ and ☕️ by <b>{app.author.name}</b>
        </div>
    )
}