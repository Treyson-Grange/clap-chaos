class SiteConfig {
    SITENAME: string;
    SITEDESCRIPTION: string;
    GITHUBURL: string;
    CONTACTEMAIL: string;
    CONTACTADDRESS: string;
    ANALYTICS_ID: string;
    NUM_CLAP_MP3: number;
    constructor() {
        this.SITENAME = 'Clap Chaos';
        this.SITEDESCRIPTION = 'Clap Chaos is a metronome that claps randomly.';
        this.GITHUBURL = 'https://github.com/Treyson-Grange/clap-chaos';
        this.CONTACTEMAIL = 'do@not.email';
        this.CONTACTADDRESS = '';
        this.ANALYTICS_ID = '';
        this.NUM_CLAP_MP3 = 3;
    }
}
let siteConfig = new SiteConfig();
export default siteConfig;
