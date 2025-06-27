export default function Footer() {
    return (
        <footer className="w-full text-gray-300 py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="font-semibold text-lg">© {new Date().getFullYear()} Videsh</span>
                </div>
                <div className="mt-4 md:mt-0 flex gap-10">
                    <a
                        href="https://github.com/videshravi27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/videsh-r-v-544461243/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        LinkedIn 
                    </a>
                </div>
            </div>
        </footer>
    );
}