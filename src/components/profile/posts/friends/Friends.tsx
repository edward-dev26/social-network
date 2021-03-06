import React from 'react';
import style from './Friends.module.css';
import {Affix, Button, Col, Row} from 'antd';
import {TFriendsTitle} from '../../../../redux/users/users-selector';
import AvatarImage from '../../../common/helpers/AvatarImage';
import {NavLink} from 'react-router-dom';
import {formatName} from '../../../../utils/helpers';
import {url} from '../../../../utils/routeManager';
import {PeopleFilterEnum} from '../../../people/PeopleContainer';

type PropsType = {
    friendsCount: number
    friends: Array<TFriendsTitle>
}

const Friends: React.FC<PropsType> = ({friendsCount, friends}) => {
    return (
        <Affix offsetTop={64}>
            <div className={style.profile__friends}>
                <div className={style.heading}>
                    <h3>Friends</h3>
                    <div className={style.firends__count}>{friendsCount} Friends</div>
                </div>
                <Row gutter={15}>
                    {
                        friends.map(friend => (
                            <Col span={8} key={friend.id}>
                                <NavLink
                                    to={url('profile:timeline', {userId: friend.id})}
                                    className={style.friends__item}
                                >
                                    <div>
                                        <AvatarImage imgUrl={friend.photos.small}/>
                                    </div>
                                    <div className={style.name}>
                                        <h5>{formatName(friend.name)}</h5>
                                    </div>
                                </NavLink>
                            </Col>
                        ))
                    }
                </Row>
                <NavLink to={url('people', {filter: PeopleFilterEnum.Friends})}>
                    <Button className='btn btn-light-dark'>See All</Button>
                </NavLink>
            </div>
        </Affix>
    )
};

export default Friends;
