import { Member } from '../../data/componentDrivenDevelopment';
import { RandomAvatar } from '../Avatar/RandomAvatar';

interface MemberCardProps {
    member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                <div className="flex flex-1 flex-col p-8">
                    <div className="mx-auto h-32 w-32 flex-shrink-0">
                        <RandomAvatar />
                    </div>
                    <h3 className="mt-6 text-sm font-medium text-gray-900">
                        {member.name}
                    </h3>
                    <dl className="mt-1 flex flex-grow flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-sm text-gray-500">{member.desc}</dd>
                        <dt className="sr-only">Role</dt>
                        <dd className="mt-3">
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                {member.role}
                            </span>
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    );
}
