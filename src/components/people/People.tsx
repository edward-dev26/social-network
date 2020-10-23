import React from 'react';
import style from './People.module.scss';
import UserList from './users-list/UsersList';
import {TUserModel} from '../../types/types';
import Heading from './heading/Heading';
import {Pagination} from 'antd';

type PropsType = {
    isFetching: boolean
    usersData: Array<TUserModel>
    count: number
    currentPage: number
    startPage: number
    totalCount: number
    followingInProgress: Array<number>
    handlePageChanged: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    changePageSize: (pageSize: number, currentPage: number) => void
}

const People: React.FC<PropsType> = ({isFetching, totalCount, currentPage, handlePageChanged, ...props}) => {
    return (
        <div className={style.container}>
            <div>
                <Heading/>
                <UserList
                    follow={props.follow}
                    unFollow={props.unFollow}
                    followingInProgress={props.followingInProgress}
                    usersData={props.usersData}
                />
            </div>
            <div className={style.paginator}>
                <Pagination
                    total={totalCount}
                    current={currentPage}
                    onChange={handlePageChanged}
                    onShowSizeChange={props.changePageSize}
                    pageSizeOptions={['15', '30', '60', '90']}
                    defaultPageSize={props.count}
                />
            </div>
        </div>
    )
}

export default People;