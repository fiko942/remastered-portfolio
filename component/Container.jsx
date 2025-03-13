import Header from "./Header";

export default function Container({children}) {
    return (
        <div className="w-full mx-auto">
            <Header />
            {children}
        </div>
    )
}
