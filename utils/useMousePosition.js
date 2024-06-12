import { useEffect } from "react";
import { useSpring, useMotionValue } from "framer-motion";

export default function useMousePosition () {

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    
    const smoothOptions = { damping: 15, stiffness: 200, mass: 0.55 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = e => {
    const { clientX, clientY } = e;
        mouse.x.set(clientX - 4);
        mouse.y.set(clientY - 4);
    }

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove);
        return () => window.removeEventListener('mousemove', manageMouseMove);
    });

    return smoothMouse;

};