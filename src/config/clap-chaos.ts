class SiteConfig {
    SITENAME: string;
    SITEDESCRIPTION: string;
    GITHUBURL: string;
    CONTACTEMAIL: string;
    CONTACTADDRESS: string;
    ANALYTICS_ID: string;
    constructor() {
        this.SITENAME = 'Clap Chaos';
        this.SITEDESCRIPTION = '';
        this.GITHUBURL = 'https://github.com/Treyson-Grange/clap-chaos';
        this.CONTACTEMAIL = 'clap@chaos.com';
        this.CONTACTADDRESS = '';
        this.ANALYTICS_ID = '';
    }
}
let siteConfig = new SiteConfig();
export default siteConfig;