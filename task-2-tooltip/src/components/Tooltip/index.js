import React, {useRef, useEffect, useState} from 'react';
import './tooltip.css'
import ReactDOM from 'react-dom';

export default function Tooltip({placement = 'top', children, content, triggers = "hover"}) {
    let childRef = useRef(null);
    let tooltipRef = useRef(null);

    let [position, setPosition] = useState({x: 0, y: 0, width: 0, height: 0});
    let [visible, setVisible] = useState(false);

    const handleClickOutside = (event) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target) && event.target !== childRef.current) {
            setVisible(false);
        }
    }

    useEffect(() => {
        if (childRef.current !== null) {
            console.log(childRef.current.offsetTop);
            setPosition({
                x: childRef.current.offsetLeft,
                y: childRef.current.offsetTop,
                width: childRef.current.offsetWidth,
                height: childRef.current.offsetHeight,
            });
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [childRef]);

    const placementStyles = {
        'top': {
            top: -30,
            left: position.width / 2 - 100,
        },
        'bottom': {
            top: position.height + 5,
            left: position.width / 2 - 100,
        },
        'left': {
            top: position.height / 2 - 11,
            left: -210,
        },
        'right': {
            top: position.height / 2 - 11,
            left: position.width + 10,
        }
    }

    const handleMouseOver = (e) => {
        if (triggers.indexOf('hover') > -1) {
            setVisible(true);
        }
    }

    const handleMouseLeave = (e) => {
        if (triggers.indexOf('hover') > -1) {
            setVisible(false);
        }
    }

    const handleClick = (e) => {
        if (triggers.indexOf('click') > -1) {
            setVisible(!visible);
        }
    }

    return (
        <>
            {visible &&
            ReactDOM.createPortal(
                <>
                    <div ref={tooltipRef} className={`dit-tooltip placement-${placement}`} style={
                        {
                            ...placementStyles[placement],
                            transform: `translate3d(${position.x}px, ${position.y}px, 0)`
                        }
                    }>
                        <span className="dit-tooltip-text">{content}</span>
                        {
                            triggers.indexOf('click') !== -1 && <span className="dit-close" onClick={() => {
                                setVisible(false);
                            }}>&times;</span>
                        }
                    </div>
                </>,
                document.body
            )
            }

            {React.Children.toArray(children).map((c, index) => React.cloneElement(
                c,
                {
                    ref: childRef,
                    onMouseOver: handleMouseOver,
                    onMouseLeave: handleMouseLeave,
                    onClick: handleClick,
                },
            ))}
        </>

    )
}