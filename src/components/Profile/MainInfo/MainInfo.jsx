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
    const checkAdd = (contact) => {
        if ((contact != null) && (!contact.includes('https'))) {
            return ('https://' + contact);
        } else return contact;
    }
    return (
        <div className={mi.main_info}>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <a href={checkAdd(vkLink)}><div>{checkAdd(vkLink)}</div></a>
            <a href={checkAdd(facebookLink)}><div>{props.profile.contacts.facebook}</div></a>
            <a href={checkAdd(twitterLink)}><div>{props.profile.contacts.twitter}</div></a>
            <a href={checkAdd(websiteLink)}><div>{props.profile.contacts.website}</div></a>
            <a href={checkAdd(instagramLink)}><div>{props.profile.contacts.instagram}</div></a>
            <a href={checkAdd(youtubeLink)}><div>{props.profile.contacts.youtube}</div></a>
            <a href={checkAdd(mainLink)}><div>{props.profile.contacts.mainLink}</div></a>
            <a href={checkAdd(githubLink)}><div>{props.profile.contacts.github}</div></a>
            <div>ID: {props.profile.userId || props.myId}</div>

        </div>)
}

export default MainInfo;