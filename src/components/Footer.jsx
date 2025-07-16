
function Footer(){

    return(
        <footer>
            <section>
                <hr className="footer-seperator"/>
            </section>
            <section className="footer-social-media">
                <a href="#">Social</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    <a href="#">About</a>
                </section>
                <section className="footer-info-center">
                    <a href="#">Resources</a>
                </section>
                <section className="footer-info-right">
                    <a href="#">Roadmap</a>
                </section>
            </section>
            <p>&copy; {new Date().getFullYear()} VOKALB</p>
            <section>
                <hr className="footer-seperator" />
            </section>
        </footer>
    );
}

export default Footer