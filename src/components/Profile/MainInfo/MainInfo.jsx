import mi from './MainInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const MainInfo = (props) => {
    if (props.profile == null) {return <Preloader/>}
    let vkLink = props.profile.contacts.vk;
    let facebookLink = props.profile.contacts.facebook;
    let twitterLink = props.profile.contacts.twitter;
    let websiteLink = props.profile.contacts.website;
    let instagramLink = props.profile.contacts.instagram;
    let youtubeLink = props.profile.contacts.youtube;
    let mainLink = props.profile.contacts.mainLink;
    let githubLink = props.profile.contacts.github;

    if ((vkLink != null) && (!vkLink.includes('https'))) {vkLink = 'https://' + props.profile.contacts.vk}
    if ((facebookLink != null) && (!facebookLink.includes('https'))) {facebookLink = 'https://' + props.profile.contacts.facebook}
    if ((twitterLink != null) && (!twitterLink.includes('https'))) {twitterLink = 'https://' + props.profile.contacts.twitter}
    if ((websiteLink != null) && (!websiteLink.includes('https'))) {websiteLink = 'https://' + props.profile.contacts.website}
    if ((instagramLink != null) && (!instagramLink.includes('https'))) {instagramLink = 'https://' + props.profile.contacts.instagram}
    if ((youtubeLink != null) && (!youtubeLink.includes('https'))) {youtubeLink = 'https://' + props.profile.contacts.youtube}
    if ((mainLink != null) && (!mainLink.includes('https'))) {mainLink = 'https://' + props.profile.contacts.mainLink}
    if ((githubLink != null) && (!githubLink.includes('https')) ) {githubLink = 'https://' + props.profile.contacts.github}

    return (
        <div className={mi.main_info}>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <a href={vkLink}><div>{props.profile.contacts.vk}</div></a>
            <a href={facebookLink}><div>{props.profile.contacts.facebook}</div></a>
            <a href={twitterLink}><div>{props.profile.contacts.twitter}</div></a>
            <a href={websiteLink}><div>{props.profile.contacts.website}</div></a>
            <a href={instagramLink}><div>{props.profile.contacts.instagram}</div></a>
            <a href={youtubeLink}><div>{props.profile.contacts.youtube}</div></a>
            <a href={mainLink}><div>{props.profile.contacts.mainLink}</div></a>
            <a href={githubLink}><div>{props.profile.contacts.github}</div></a>
        </div>)
}

export default MainInfo;