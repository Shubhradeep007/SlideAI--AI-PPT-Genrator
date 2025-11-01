import GooeyNav from "@/components/GooeyNav";
import { Link } from "react-router-dom";
import testImage from '../assets/logo.png';

const Navbar = () => {
    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
    ];
    return (
        <nav className="fixed top-2 left-0 right-0 px-4 z-50 ">
            <div className="flex justify-between items-center  max-w-7xl mx-auto h-25 p-10" style={{ borderRadius: "1vh", }} >
                <div className="w-[120px]">
                    <img
                        src={testImage} 
                        alt="Logo"
                        width={80}
                        height={40}
                        className="object-contain"
                        
                    />
                </div>
                <div className="flex-1 flex justify-center">
                    <GooeyNav
                        items={items}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={0}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    />
                </div>
                <Link
                    to="/get-started"
                    className="px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    style={{background: "white", color: "black"}}
                >
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;