function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full border-t border-neutral-300 dark:border-white/20 backdrop-blur-lg">
            <div className="max-w-[1180px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    Movie<span className="text-brand-500">Find</span>
                </span>
                <div className="flex gap-6 item-center">
                    <button className="text-neutral-600 dark:text-white/50 hover:text-neutral-900 dark:hover:text-white cursor-pointer">
                        About
                    </button>
                    <button className="text-neutral-600 dark:text-white/50 hover:text-neutral-900 dark:hover:text-white cursor-pointer">
                        GitHub
                    </button>
                    <button className="text-neutral-600 dark:text-white/50 hover:text-neutral-900 dark:hover:text-white cursor-pointer">
                        Contact
                    </button>
                </div>
                <span className="text-neutral-600 dark:text-white/50">
                    &copy; {year} MovieFind
                </span>
            </div>
        </footer>
    )
}

export default Footer;