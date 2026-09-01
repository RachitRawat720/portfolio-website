import { useEffect, useState } from "react";

const TypingText = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if (!isDeleting && index < text.length) {
            // Typing
            timeout = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, 100);
        }
        else if (!isDeleting && index === text.length) {
            // Pause after completing the word
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 3000);
        }
        else if (isDeleting && index > 0) {
            // Deleting
            timeout = setTimeout(() => {
                setIndex((prev) => prev - 1);
            }, 60);
        }
        else if (isDeleting && index === 0) {
            // Start typing again
            timeout = setTimeout(() => {
                setIsDeleting(false);
            }, 500);
        }

        setDisplayText(text.slice(0, index));

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text]);

    return <span>{displayText}</span>;
};

export default TypingText;