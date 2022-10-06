import styled from 'styled-components';
import React from "react";

interface Props {
    href: string;
    children?: React.ReactNode;
}
const Link: React.FC<Props> = ({
    href,
    children
}) => {

    const handleClick = (event: React.MouseEvent) => {
        // 기동 동작 막음. 서버에 요청 X
        event.preventDefault();

        // update url
        window.history.pushState({}, "", href);

        // update page
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent); // 이벤트 트리거
    };

    return (
        <Alink href={href} onClick={handleClick}>{children}</Alink>
    )
};

export default Link;

const Alink = styled.a`
    border-radius: 8px;
    background: #000;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    padding: 8px 16px;
    margin-top: 24px;
    box-shadow: 0 8px 16px rgb(0 0 0 / 13%);
`;