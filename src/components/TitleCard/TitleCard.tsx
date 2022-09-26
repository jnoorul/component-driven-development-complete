interface TitleCardProps {
    date: string;
    title: string;
}

export function TitleCard({ date, title }: TitleCardProps) {
    return (
        <div className="py-2">
            <span className=" text-gray-600">
                <time>{date}</time>
            </span>
            <h1 className="font-extrabold text-2xl md:text-3xl">{title}</h1>
        </div>
    );
}
