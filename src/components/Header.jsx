const Header = () => {
    return (
        <nav className="sticky top-0 w-full bg-black/20 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Erik Martori López
            </div>
            <div className="hidden md:flex space-x-8">
                {['About', 'Projects', 'Experience', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                    {item}
                </a>
                ))}
            </div>
            </div>
        </div>
        </nav>
    )
}
export default Header;