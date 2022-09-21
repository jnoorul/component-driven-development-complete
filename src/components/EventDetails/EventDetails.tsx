import ReactMarkdown from 'react-markdown';

interface EventDetailsProps {
    description: string;
}

export function EventDetails({ description }: EventDetailsProps) {
    return (
        <div>
            <h3 className="text-xl font-bold">Details</h3>
            <ReactMarkdown>{description}</ReactMarkdown>
        </div>
    );
}
