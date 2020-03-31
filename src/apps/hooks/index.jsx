import React, {useState, useEffect} from 'react';

function useWinSize() {
    const html = document.documentElement;
    const [size, setSize] = useState({ width: html.clientWidth, height: html.clientHeight });

    useEffect(() => {
        const onSize = e => {
            setSize({ width: html.clientWidth, height: html.clientHeight });
        };

        window.addEventListener('resize', onSize);

        return () => {
            window.removeEventListener('resize', onSize);
        };
    }, [html]);

    return size;
}

const Hooks = () => {
    const {width} = useWinSize();

    return (
        <div>{width}</div>
    );
};

export default Hooks;