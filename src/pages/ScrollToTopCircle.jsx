import { useEffect, useRef, useState } from "react";

const ScrollToTopCircle = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const targetPercentRef = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollTop / docHeight) * 100;
    targetPercentRef.current = scrollProgress;
  };

  useEffect(() => {
    const update = () => {
      setScrollPercent((prev) => {
        const diff = targetPercentRef.current - prev;
        return Math.abs(diff) < 0.1 ? targetPercentRef.current : prev + diff * 0.1;
      });
      requestAnimationFrame(update);
    };
    update();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-5 right-3 z-50 cursor-pointer group"
    >
      <svg width="40" height="40" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" /> {/* purple-600 */}
            <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="#d1d1d1"
          strokeWidth="6"
          fill="#f4f1f1"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="url(#scrollGradient)"
          strokeWidth="6"
          fill="none"
          strokeDasharray={339.292}
          strokeDashoffset={339.292 - (scrollPercent / 100) * 339.292}
          strokeLinecap="round"
        />
        <polyline
          points="45,65 60,50 75,65"
          fill="none"
          stroke="url(#scrollGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ScrollToTopCircle;
