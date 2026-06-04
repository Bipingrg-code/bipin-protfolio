import { useEffect, useState } from "react";
import { counterItems } from "../constants"

const useCountUp = (end: number, duration: number = 2) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [end, duration]);

    return count;
};

// Separate component for each counter
const CounterCard = ({ item }: { item: typeof counterItems[0] }) => {
    const count = useCountUp(item.value, 2);
    
    return (
        <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div className="counter-number text-white text-5xl font-bold mb-2">
                {count}{item.suffix}
            </div>
            <div className="text-white text-lg">
                {item.label}
            </div>
        </div>
    );
};

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <CounterCard key={item.label} item={item} />
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter