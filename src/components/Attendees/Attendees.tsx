import { Member } from '../../data/types';
import { MemberCard } from '../MemberCard/MemberCard';

interface AttendeesProps {
    members: Member[];
}

export function Attendees({ members }: AttendeesProps) {
    return (
        <div className="py-2">
            <h3 className="py-2 text-xl font-bold">Attendees</h3>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {members.map((member) => (
                    <li
                        key={member.id}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                        <MemberCard member={member} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
