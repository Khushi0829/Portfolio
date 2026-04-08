import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, title }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,   // run only once
    threshold: 0.5       // 50% visible
  });

  return (
    <div ref={ref} className="text-center">
      
      <h3 className="counter-number">
        {inView && (
          <CountUp start={0} end={end} duration={3} />
        )}
        +
      </h3>

      <p className="counter-title">{title}</p>

    </div>
  );
};

export default Counter;