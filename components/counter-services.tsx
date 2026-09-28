import { dataCounter } from "@/data";

const Counterservices = () => (
  <dl className="reading-surface my-8 grid max-w-2xl grid-cols-3 gap-3 sm:gap-8">
    {dataCounter.map(({ id, endCounter, text }) => (
      <div key={id} className="flex flex-col text-center md:text-left">
        <dt className="order-2 mt-1 text-xs leading-snug text-my-green-100 sm:text-sm">
          {text}
        </dt>
        <dd className="order-1 text-2xl font-extrabold tabular-nums text-tamarillo-300 sm:text-3xl">
          +{endCounter}
        </dd>
      </div>
    ))}
  </dl>
);

export default Counterservices;
