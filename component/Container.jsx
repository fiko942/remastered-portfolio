import Footer from "./Footer";
import Header from "./Header";

export default function Container({children}) {
    return (
        <div className="w-full mx-auto">
            <Header />
                <div className="content-children h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] overflow-y-auto min-h-[calc(100vh-100px)]">
                    {children}
                </div>
                <div className="gradient-top-right"></div>
                <div className="gradient-bottom-left"></div>
            <Footer />
        </div>
    )
}
