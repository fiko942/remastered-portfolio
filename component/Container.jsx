import Header from "./Header";

export default function Container({children}) {
    return (
        <div className="w-full mx-auto">
            <Header />
            {children}
            <div className="gradient-top-right"></div>
            <div className="gradient-bottom-left"></div>
        </div>
    )
}
