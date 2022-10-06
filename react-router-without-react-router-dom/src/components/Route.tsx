import React, { useState, useEffect } from "react";

interface Props {
    path: string;
    component: JSX.Element;
}
const Route: React.FC<Props> = ({
    path,
    component
}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {

        // 현재 url로 업데이트
        const handleLocationChange = () => setCurrentPath(window.location.pathname);

        /**
         * popstate : 사용자의 세션 기록 탐색으로 인해, 현재 활성화된 기록 항목이 바뀌는 경우 발생
         * 기록에 변화가 생기면, 현재 url로 업데이트
         */
        window.addEventListener('popstate', handleLocationChange);

        // 언마운트시 이벤트 제거
        return () => {
            window.removeEventListener('popstate', handleLocationChange)
        };
    }, []);

    return currentPath === path ? component : null;
};

export default Route;