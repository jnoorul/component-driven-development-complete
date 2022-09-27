import Avatar from 'avataaars';

interface MemberAvatarProps {
    type: string;
}

export function MemberAvatar({ type }: MemberAvatarProps) {
    return (
        <Avatar
            style={{ width: '128px', height: '128px' }}
            avatarStyle="Transparent"
            topType={type}
            accessoriesType="Prescription02"
            hairColor="BrownDark"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="PastelBlue"
            eyeType="Happy"
            eyebrowType="Default"
            mouthType="Smile"
            skinColor="Light"
        />
    );
}
