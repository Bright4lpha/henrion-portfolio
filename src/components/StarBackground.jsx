import { useEffect, useState } from "react";

// id, size, x, y , opacity, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerHeight * window.innerWidth) / 10000
        );

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            const size = Math.random() * 3 + 1; // Size between 1 and 4
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1
            const animationDuration = Math.random() * 4 + 2; // Duration between 2 and 6 seconds

            newStars.push({
                id: i,
                size,
                x,
                y,
                opacity,
                animationDuration,
            });
        }
        setStars(newStars);
    };
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animation: star.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};
