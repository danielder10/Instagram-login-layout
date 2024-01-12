import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <a href="">Meta</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Jobs</a>
            <a href="">Help</a>
            <a href="">API</a>
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Top Accounts</a>
            <a href="">Locations</a>
            <a href="">Instagram Lite</a>
            <a href="">Instagram Contact</a>
            <a href="">Uploading & Non-Users</a>
            <div class="bottom-footer">
                <select name="" id="">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Francais">Francais</option>
                </select>
                <span> &copy; 2023 Instagram from Meta</span>
            </div>
        </footer>
    )
}