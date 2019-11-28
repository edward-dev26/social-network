import React from 'react';
import style from '../About.module.css';
import facebook from '../../../../assets/images/facebook.png';
import website from '../../../../assets/images/website.png';
import github from '../../../../assets/images/github.png';
import instagram from '../../../../assets/images/instagram.png';
import mainLink from '../../../../assets/images/mainLink.png';
import twitter from '../../../../assets/images/twitter.jpg';
import vk from '../../../../assets/images/vk.png';
import youtube from '../../../../assets/images/youtube.png';
import contact from '../../../../assets/images/contact.png';


const Contacts = ({contacts}) => {
    let ContactElements = [];
    let Img = null;
    for (let contact in contacts) {
        if (contacts[contact]) {
            switch (contact) {
                case 'facebook':
                    Img = <img src={facebook}/>;
                    break;
                case 'website':
                    Img = <img src={website}/>;
                    break;
                case 'github':
                    Img = <img src={github}/>;
                    break;
                case 'instagram':
                    Img = <img src={instagram}/>;
                    break;
                case 'mainLink':
                    Img = <img src={mainLink}/>;
                    break;
                case 'youtube':
                    Img = <img src={youtube}/>;
                    break;
                case 'vk':
                    Img = <img src={vk}/>;
                    break;
                case 'twitter':
                    Img = <img src={twitter}/>;
                    break;
                default:
                    alert('sdadsda');
            }
            ContactElements.push(<a key={contacts[contact]} href={contacts[contact]}>{Img}</a>)
        }
    }
    return (
        <div className={style.contacts}>
            <h3><img src={contact} alt="C"/>Contacts</h3>
            <div className={style.contactsIcons}>
                {ContactElements}
            </div>
        </div>
    )
};

export default Contacts;