function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full border-t border-white/20 backdrop-blur-lg">
            <div className="max-w-[1180px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xl font-semibold tracking-tight text-white">
                    Movie<span className="text-brand-500">Find</span>
                </span>
                <div className="flex gap-6 item-center">
                    <button className="text-white/50 hover:text-white cursor-pointer">
                        About
                    </button>
                    <button className="text-white/50 hover:text-white cursor-pointer">
                        GitHub
                    </button>
                    <button className="text-white/50 hover:text-white cursor-pointer">
                        Contact
                    </button>
                </div>
                <span className="text-white/50">
                    &copy; {year} MovieFind
                </span>
            </div>
        </footer>
    )
}

export default Footer;