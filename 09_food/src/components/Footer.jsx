function Footer() {
    return (
        <footer className="page-footer  teal darken-1">
            <div className="container"></div>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="grey-text text-lighten-4 right"
                        href="https://anton-zolf.su/movies/"
                    >
                        Movie DB from PBay
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
