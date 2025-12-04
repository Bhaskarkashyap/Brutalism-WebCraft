import { Navbar } from "./navbar";

interface Props{
    children: React.ReactNode;
}

export default function HomeLayout({children} : Props){
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
        </div>
    )
}