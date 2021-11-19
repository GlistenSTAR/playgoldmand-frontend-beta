import React, { useState, useEffect } from 'react'
import cb from 'classnames';
import Button from '../../components/common/input/Button';
import Input from '../../components/common/input/Input';
import { fetchLinkGet, fetchEditLink } from '../../services/LinkService';

const LinkComponent = () => {
    const initLinkData = (data) => {
        let preactivate = {
            link1: false,
            link2: false,
            link3: false,
        }
        let prelink = {
            link1: 'https://discord.com',
            link2: 'https://telegram.com',
            link3: 'https://regedit.com',
        }
        data.forEach(element => {
            const { title, link, isActivated } = element;
            switch (title) {
                case 'link1': {
                    preactivate = {
                        ...preactivate,
                        link1: isActivated
                    }
                    prelink = {
                        ...prelink,
                        link1: link
                    }
                    break;
                }
                case 'link2': {
                    preactivate = {
                        ...preactivate,
                        link2: isActivated
                    }
                    prelink = {
                        ...prelink,
                        link2: link
                    }
                    break;
                }
                case 'link3': {
                    preactivate = {
                        ...preactivate,
                        link3: isActivated
                    }
                    prelink = {
                        ...prelink,
                        link3: link
                    }
                    break;
                }
                default:
                    break;
            }
        });
        setActive(preactivate);
        setLinks(prelink);
    }
    const changeLinkData = async (title, link, status) => {
        let predata = await fetchEditLink({ title, link, status });
        let linkData = predata.data.links;
        initLinkData(linkData);
    }
    useEffect(async () => {
        let predata = await fetchLinkGet();
        let linkData = predata.data.links;
        initLinkData(linkData);
    }, []);

    const [links, setLinks] = useState({
        link1: 'https://discord.com',
        link2: 'https://telegram.com',
        link3: 'https://regedit.com',
    })
    const [status, setStatus] = useState({
        link1: false,
        link2: false,
        link3: false,
    })
    const [active, setActive] = useState({
        link1: false,
        link2: false,
        link3: false,
    })
    const onChangeLink = (e, title) => {
        switch (title) {
            case 'link1':
                setLinks({
                    ...links,
                    link1: e.target.value,
                })
                break;
            case 'link2':
                setLinks({
                    ...links,
                    link2: e.target.value,
                })
                break;
            case 'link3':
                setLinks({
                    ...links,
                    link3: e.target.value,
                })
                break;
            default:
                break;
        }
    }
    const preChange = (title) => {
        status[title] && changeLinkData(title, links[title], active[title]);
    }
    const onStatusChange = (title) => {
        preChange(title);
        switch (title) {
            case 'link1': {
                setStatus({
                    ...status,
                    link1: !status[title],
                })
                break;
            }
            case 'link2': {
                setStatus({
                    ...status,
                    link2: !status[title],
                })
                break;
            }
            case 'link3': {
                setStatus({
                    ...status,
                    link3: !status[title],
                })
                break;
            }
            default:
                break;
        }
    }
    const onActiveChange = (title) => {
        changeLinkData(title, links[title], !active[title]);
        switch (title) {
            case 'link1':
                setActive({
                    ...active,
                    link1: !active[title],
                })
                break;
            case 'link2':
                setActive({
                    ...active,
                    link2: !active[title],
                })
                break;
            case 'link3':
                setActive({
                    ...active,
                    link3: !active[title],
                })
                break;
            default:
                break;
        }
    }
    return (
        <div className="flex flex-col flex-wrap sm:flex-row">
            <div className="w-full md:w-4/12 pr-2 mb-6">
                <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-4 bg-purple-400">
                            <img
                                src="/img/icons/discord.png"
                                width={30}
                            />
                        </span>
                        <p className="text-md text-black dark:text-white ml-2"> Social Link1 </p>
                        <Button
                            className={cb(
                                'p-1 mt-12 mb-10 md:mb-12 w-20',
                                'border-1 border-green-500 rounded-full shadow-2xl',
                                'text-white text-10 bg-black bg-opacity-50'
                            )}
                            onClick={() => onStatusChange("link1")}
                        > {status.link1 ? 'Ok' : 'Edit'} </Button>&nbsp;&nbsp;
                        <Button
                            className={!active.link1 ? cb(
                                'p-1 mt-12 mb-10 md:mb-12 w-20',
                                'border-1 border-green-500 rounded-full shadow-2xl',
                                'text-white text-10 bg-green-900 bg-opacity-80'
                            ) : cb(
                                'p-1 mt-12 mb-10 md:mb-12 w-20',
                                'border-1 border-green-500 rounded-full shadow-2xl',
                                'text-white text-10 bg-red-800'
                            )}
                            onClick={() => onActiveChange('link1')}
                        > {active.link1 ? 'Deactive' : 'Active'} </Button>
                    </div>
                    <div className="flex flex-col justify-start">
                        {status.link1 ? (
                            <Input
                                value={links.link1}
                                onChange={(e) => onChangeLink(e, 'link1')}
                                className="text-xl"
                                onKeyPress={(e) => {
                                    if (e.which === 13) {
                                        onStatusChange("link1");
                                    }
                                }}
                            />
                        ) : (
                            <p className="text-gray-700 overflow-hidden dark:text-gray-100 text-2xl text-left font-bold my-4">
                                {links.link1}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-4/12 pr-2 mb-6">
                <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-4 bg-purple-400">
                            <img
                                src="/img/icons/telegram.png"
                                width={30}
                            />
                        </span>
                        <p className="text-md text-black dark:text-white ml-2"> Social Link2 </p>
                        <Button
                            className={cb(
                                'p-1 mt-12 mb-10 md:mb-12 w-20',
                                'border-1 border-green-500 rounded-full shadow-2xl',
                                'text-white text-10 bg-black bg-opacity-50'
                            )}
                            onClick={() => onStatusChange("link2")}
                        > {status.link2 ? 'Ok' : 'Edit'} </Button>&nbsp;&nbsp;
                        <Button
                            className={!active.link2 ? cb(
                                'p-1 mt-12 mb-10 md:mb-12 w-20',
                                'border-1 border-green-500 rounded-full shadow-2xl',
                                'text-white text-10 bg-green-900 bg-opacity-80'
                            ) : cb(
                                'p-1 mt-12 mb-10 md:mb-12 w-20',
                                'border-1 border-green-500 rounded-full shadow-2xl',
                                'text-white text-10 bg-red-800'
                            )}
                            onClick={() => onActiveChange('link2')}
                        > {active.link2 ? 'Deactive' : 'Active'} </Button>
                    </div>
                    <div className="flex flex-col justify-start">
                        {status.link2 ? (
                            <Input
                                value={links.link2}
                                onChange={(e) => onChangeLink(e, 'link2')}
                                className="text-xl"
                                onKeyPress={(e) => {
                                    if (e.which === 13) {
                                        onStatusChange("link2");
                                    }
                                }}
                            />
                        ) : (
                            <p className="text-gray-700 overflow-hidden dark:text-gray-100 text-2xl text-left font-bold my-4">
                                {links.link2}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-4/12">
                <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-4 bg-purple-400">
                            <img
                                src="/img/icons/reddit.png"
                                width={30}
                            />
                        </span>
                        <p className="text-md text-black dark:text-white md:ml-4"> Social Link3 </p>
                        <Button
                            className={cb(
                                'p-1 mt-12 mb-10 md:mb-12 w-20',
                                'border-1 border-green-500 rounded-full shadow-2xl',
                                'text-white text-10 bg-black bg-opacity-50'
                            )}
                            onClick={() => onStatusChange("link3")}
                        > {status.link3 ? 'Ok' : 'Edit'} </Button>&nbsp;&nbsp;
                        <Button
                            className={!active.link3 ? cb(
                                'p-1 mt-12 mb-10 md:mb-12 w-20',
                                'border-1 border-green-500 rounded-full shadow-2xl',
                                'text-white text-10 bg-green-900 bg-opacity-80'
                            ) : cb(
                                'p-1 mt-12 mb-10 md:mb-12 w-20',
                                'border-1 border-green-500 rounded-full shadow-2xl',
                                'text-white text-10 bg-red-800'
                            )}
                            onClick={() => onActiveChange('link3')}
                        > {active.link3 ? 'Deactive' : 'Active'} </Button>
                    </div>
                    <div className="flex flex-col justify-start">
                        {status.link3 ? (
                            <Input
                                value={links.link3}
                                onChange={(e) => onChangeLink(e, 'link3')}
                                className="text-xl"
                                onKeyPress={(e) => {
                                    if (e.which === 13) {
                                        onStatusChange("link3");
                                    }
                                }}
                            />
                        ) : (
                            <p className="text-gray-700 overflow-hidden dark:text-gray-100 text-2xl text-left font-bold my-4">
                                {links.link3}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LinkComponent;
