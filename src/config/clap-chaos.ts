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
        this.GITHUBURL = '';
        this.CONTACTEMAIL = '';
        this.CONTACTADDRESS = '';
        this.ANALYTICS_ID = '';
    }

}
let siteConfig = new SiteConfig();
export default siteConfig;