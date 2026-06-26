import type { TCard } from "../../data/types";

export default function CardBorder({ title, description }: TCard) {
  return (
    <>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
}
