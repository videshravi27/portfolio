export default function Footer() {
    return (
        <footer className="w-full text-gray-300 py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row">
                <div className="mb-4 md:mb-0">
                    <span className="font-semibold text-lg">© {new Date().getFullYear()} Videsh</span>
                </div>

            </div>
        </footer>
    );
}