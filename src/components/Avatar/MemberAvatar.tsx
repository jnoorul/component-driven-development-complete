import Avatar from 'avataaars';

export type AvatarType =
    | 'ShortHairShortCurly'
    | 'ShortHairTheCaesar'
    | 'ShortHairShortWaved'
    | 'Hat';

interface MemberAvatarProps {
    type?: AvatarType;
    mouth?: 'Default' | 'Smile' | 'Sad';
}

export function MemberAvatar({
    type = 'Hat',
    mouth = 'Default',
}: MemberAvatarProps) {
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
            mouthType={mouth}
            skinColor="Light"
        />
    );
}
