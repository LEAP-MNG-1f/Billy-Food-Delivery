import Image from "next/image";

type CardPropsType = {
  img: string;
  title: string;
  price: number;
  discount?: number;
  color?: "black" | "red";
};

export const Card = (props: CardPropsType) => {
  return (
    <div>
      <div>{props.img}</div>
      <p>{props.title}</p>
      <p>{props.price}</p>
      <p style={{ backgroundColor: props.color == "red" ? "white" : "black" }}>
        {props.discount}
      </p>
    </div>
  );
};
