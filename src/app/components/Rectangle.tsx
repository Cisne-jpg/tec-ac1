interface RectangleProps {
    color: string;
}

export default function Rectangle(props: RectangleProps) {
    return <div className={`bg-${props.color}`}></div>;
}